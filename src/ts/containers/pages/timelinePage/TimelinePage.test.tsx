import React from 'react';
import { render, screen } from '@testing-library/react';
//pages
import TimelinePage from './TimelinePage';

describe('<TimelinePage />', () => {
	test('renders webpack react boilerplate', () => {
		render(<TimelinePage />);
		const title = screen.getByText(/timelinePage/i);
		expect(title).toBeInTheDocument();
	});
});
