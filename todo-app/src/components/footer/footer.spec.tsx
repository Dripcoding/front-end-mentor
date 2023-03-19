import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoProvider } from 'context/context';

import Footer from './footer';

describe('Footer', () => {
	it('should render correctly', () => {
		render(
			<TodoProvider>
				<Footer />
			</TodoProvider>
		);

		expect(screen.getByTestId('FOOTER')).toBeInTheDocument();
		expect(
			screen.getByText('Drag and drop to reorder list')
		).toBeInTheDocument();
	});
});
