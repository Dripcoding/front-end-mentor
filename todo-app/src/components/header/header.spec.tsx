import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoProvider } from 'context/context';

import Header from './header';

const renderHeaderWithProvider = () => {
	return (
		<TodoProvider>
			<Header />
		</TodoProvider>
	);
};

describe('Todo Header', () => {
	it('should render correctly', () => {
		render(renderHeaderWithProvider());

		expect(screen.getByTestId('TODO_HEADER_CONTAINER')).toBeInTheDocument();
	});

	it('should have a header', () => {
		render(renderHeaderWithProvider());

		const header = screen.getByRole('heading');
		expect(header).toBeInTheDocument();
		expect(header).toHaveTextContent('TODO');
	});

	it('should have an image toggle', () => {
		render(renderHeaderWithProvider());

		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
	});

	it('renders moon icon by default', () => {
		render(renderHeaderWithProvider());

		const moonIcon = screen.getByTitle('Moon Icon');
		expect(moonIcon).toBeInTheDocument();
	});
});
