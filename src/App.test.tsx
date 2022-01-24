import React from 'react';
import { render, screen } from '@testing-library/react';
//component
import App from './App';

describe('App Component', () => {
	test('renders webpack react boilerplate', () => {
		const config = {
			events: {
				onPayment: (payload: any) => {
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

		render(<App config={config} />);
		const title = screen.getByText(/webpack react boilerplate/i);
		expect(title).toBeInTheDocument();
	});
});
