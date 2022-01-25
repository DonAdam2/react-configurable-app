import React, { FC } from 'react';
//interfaces
import { StepInterface } from '../../../interfaces/components/StepperInterface';

const Step: FC<StepInterface> = ({
	indicator,
	label,
	navigateToStepHandler,
	index,
	isActive,
	isComplete,
	isWarning,
	isError,
	isRightToLeftLanguage,
}) => {
	const innerClasses = [''];

	if (isActive) {
		innerClasses.push('is-active');
	}
	if (isComplete) {
		innerClasses.push('is-complete');
	}
	if (isWarning) {
		innerClasses.push('is-warning');
	}
	if (isError) {
		innerClasses.push('is-error');
	}
	if (isRightToLeftLanguage) {
		innerClasses.push('rightToLeft');
	}

	return (
		<div className={`stepper-step ${innerClasses.join(' ')}`}>
			<div className="stepper-indicator">
				<span
					className="stepper-indicator-info"
					onClick={isComplete || isError ? () => navigateToStepHandler(index) : undefined}
				>
					{isComplete ? (
						<svg className="stepper-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
							<path d="M452.253 28.326L197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z" />
						</svg>
					) : (
						indicator
					)}
				</span>
			</div>
			<div className="stepper-label">{label}</div>
		</div>
	);
};

export default Step;
