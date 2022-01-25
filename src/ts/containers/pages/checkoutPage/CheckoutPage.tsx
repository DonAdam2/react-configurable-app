import React, { FC, useState } from 'react';
//components
import Stepper from '../../../components/shared/stepper/Stepper';

const CheckoutPage: FC = (): JSX.Element => {
	const [acceptFirstTerms, setAcceptFirstTerms] = useState({
			checked: false,
			touched: false,
		}),
		[acceptSecondTerms, setAcceptSecondTerms] = useState({
			checked: false,
			touched: false,
		}),
		[acceptThirdTerms, setAcceptThirdTerms] = useState({
			checked: false,
			touched: false,
		}),
		[isSecondStepLoading, setIsSecondStepLoading] = useState(false);

	const firstTermsHandler = () => {
		setAcceptFirstTerms((prev) => ({ checked: !prev.checked, touched: true }));
	};

	const secondTermsHandler = () => {
		setAcceptSecondTerms((prev) => ({ checked: !prev.checked, touched: true }));
	};

	const thirdTermsHandler = () => {
		setAcceptThirdTerms((prev) => ({ checked: !prev.checked, touched: true }));
	};

	//for demo purposes only
	const timeout = (ms: number) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const secondStepAsyncFunc = async () => {
		//it can be an API call
		setIsSecondStepLoading(true);
		await timeout(3000);
		setIsSecondStepLoading(false);
		console.log('second step clicked');
	};

	const stepperContent = [
		{
			label: 'Step 1',
			content: (
				<div>
					<label>
						<input
							type="checkbox"
							checked={acceptFirstTerms.checked}
							onChange={firstTermsHandler}
						/>{' '}
						Accept first terms and conditions
					</label>
				</div>
			),
			isError: !acceptFirstTerms.checked && acceptFirstTerms.touched,
			isComplete: acceptFirstTerms.checked,
		},
		{
			label: 'Step 2',
			content: (
				<div>
					<label>
						<input
							type="checkbox"
							checked={acceptSecondTerms.checked}
							onChange={secondTermsHandler}
						/>{' '}
						Accept second terms and conditions
					</label>
				</div>
			),
			clicked: () => secondStepAsyncFunc(),
			isLoading: isSecondStepLoading,
			isError: !acceptSecondTerms.checked && acceptSecondTerms.touched,
			isComplete: acceptSecondTerms.checked,
		},
		{
			label: 'Step 3',
			content: (
				<div>
					<label>
						<input
							type="checkbox"
							checked={acceptThirdTerms.checked}
							onChange={thirdTermsHandler}
						/>{' '}
						Accept third terms and conditions
					</label>
				</div>
			),
			isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
			isComplete: acceptThirdTerms.checked,
		},
	];

	const submitStepper = () => {
		console.log('submitted');
	};

	return <Stepper stepperContent={stepperContent} submitStepper={submitStepper} />;
};

export default CheckoutPage;
