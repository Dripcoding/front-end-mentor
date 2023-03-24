import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoProvider } from 'context/todoContext';

import SearchBar from './createTodoBar';

const renderCreateTodoBarWithProvider = () => {
	return (
		<TodoProvider>
			<SearchBar />
		</TodoProvider>
	);
};

describe('CreateTodoBar', () => {
	it('should render correctly', () => {
		render(renderCreateTodoBarWithProvider());

		expect(screen.getByTestId('CREATE_TODO_BAR_CONTAINER')).toBeInTheDocument();
	});

	it('should have radio btn', () => {
		render(renderCreateTodoBarWithProvider());

		expect(screen.getByTestId('CREATE_TODO_BAR_BTN')).toBeInTheDocument();
	});

	it('should have form', () => {
		render(renderCreateTodoBarWithProvider());

		expect(screen.getByTestId('CREATE_TODO_BAR_FORM')).toBeInTheDocument();
	});

	it('should have input', () => {
		render(renderCreateTodoBarWithProvider());

		const input = screen.getByTestId('CREATE_TODO_BAR_INPUT');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('placeholder', 'Create a todo...');
	});
});
