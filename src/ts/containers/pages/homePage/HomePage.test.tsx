import React from 'react';
import { render, screen } from '@testing-library/react';
//pages
import HomePage from './HomePage';

describe('<HomePage />', () => {
	test('renders webpack react boilerplate', () => {
		render(<HomePage />);
		const title = screen.getByText(/homePage/i);
		expect(title).toBeInTheDocument();
	});
});
