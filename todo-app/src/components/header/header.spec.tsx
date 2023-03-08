import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from './header';

describe('Todo Header', () => {
	it('should render correctly', () => {
		render(<Header />);

		expect(screen.getByTestId('TODO_HEADER_CONTAINER')).toBeInTheDocument();
	});

	it('should have a header', () => {
		render(<Header />);

		const header = screen.getByRole('heading');
		expect(header).toBeInTheDocument();
		expect(header).toHaveTextContent('TODO');
	});

	it('should have an image toggle', () => {
		render(<Header />);

		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src');
		expect(img).toHaveAttribute('alt', 'dark mode toggle');
	});
});
