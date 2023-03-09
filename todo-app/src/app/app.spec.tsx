import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
	it('should have header component', () => {
		render(<App />);
		expect(screen.getByTestId('TODO_HEADER_CONTAINER')).toBeInTheDocument();
	});

	it('should have search bar component', () => {
		render(<App />);
		expect(screen.getByTestId('SEARCH_BAR_CONTAINER')).toBeInTheDocument();
	});

	it('should have footer component', () => {
		render(<App />);
		expect(screen.getByTestId('FOOTER')).toBeInTheDocument();
	});
});
