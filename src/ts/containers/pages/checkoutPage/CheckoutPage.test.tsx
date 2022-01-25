import React from 'react';
import { render, screen } from '@testing-library/react';
//pages
import CheckoutPage from './CheckoutPage';

describe('<CheckoutPage />', () => {
	test('renders webpack react boilerplate', () => {
		render(<CheckoutPage />);
		const title = screen.getByText(/checkoutPage/i);
		expect(title).toBeInTheDocument();
	});
});
