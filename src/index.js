import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import meta image
import './assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//store configuration
import configureStore from './js/store/configureStore';
//root component
import App from './App';
//styles
import './scss/global.scss';

const store = configureStore();

const config = {
	events: {
		onPayment: (payload) => {
			console.log('On payment Click Triggered and this is the payload: ', payload);
		},
	},
	views: {
		testComponent: {
			isPayment: false,
		},
	},
	theme: {
		palette: {
			background: {
				default: 'red',
			},
			text: {
				primary: '#fff',
			},
		},
	},
};

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App config={config} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
