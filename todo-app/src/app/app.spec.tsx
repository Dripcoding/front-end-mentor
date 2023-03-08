import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
	it('should have header component', () => {
		render(<App />);
		expect(screen.getByTestId('TODO_HEADER_CONTAINER')).toBeInTheDocument();
	});
});
