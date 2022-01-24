import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//selectors
import { getTestAction } from '../store/app/selectors/AppSelectors';
//actions
import { setTestAction } from '../store/app/actions/AppActions';
//state
import { State } from '../store/rootReducer';
//constants
import { EventDispatcher, Events } from '../constants/EventDispatcher';
import { themeOptions, viewsController } from '../constants/Constants';

const TestComponent = () => {
	const dispatch = useDispatch(),
		testAction = useSelector((state: State) => getTestAction(state));

	const payHandler = () => {
		if (Events.onPayment) {
			EventDispatcher.trigger && EventDispatcher.trigger('onPayment', {});
		} else {
			console.log('Default event handler');
		}
	};

	return (
		<div className="container">
			<p
				style={{
					backgroundColor: themeOptions.palette.background.default,
					color: themeOptions.palette.text.primary,
				}}
			>
				Current environment API is <strong>{process.env.BASE_URL}</strong>
			</p>
			<p>
				Testing the store <strong>{testAction}</strong>
			</p>
			<div>
				<button onClick={() => dispatch(setTestAction())}>Change text</button>
			</div>
			{viewsController.testComponent && viewsController.testComponent.isPayment && (
				<div>
					<button onClick={payHandler}>Pay</button>
				</div>
			)}
		</div>
	);
};

export default TestComponent;
