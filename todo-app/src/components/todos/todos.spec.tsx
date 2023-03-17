import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoProvider } from 'context/context';

import Todos from './todos';

const renderTodosWithProvider = () => {
	return (
		<TodoProvider>
			<Todos />
		</TodoProvider>
	);
};

describe('Todos', () => {
	it('should render correctly', () => {
		render(renderTodosWithProvider());

		expect(screen.getByTestId('TODOS_CONTAINER')).toBeInTheDocument();
	});

	it('should render default TodoItems', () => {
		render(renderTodosWithProvider());

		const todos = screen.getAllByTestId('TODO_ITEM_CONTAINER');

		expect(todos.length).toBe(6);
		expect(screen.getByText('Complete online JavaScript course'));
		expect(screen.getByText('Jog around the park 3x'));
		expect(screen.getByText('10 minutes meditation'));
		expect(screen.getByText('Read for 1 hour'));
		expect(screen.getByText('Pick up groceries'));
		expect(screen.getByText('Complete Todo App on Frontend Mentor'));
	});

	it('should render TodoControls', () => {
		render(renderTodosWithProvider());

		expect(screen.getByTestId('TODO_CONTROLS_CONTAINER')).toBeInTheDocument();
	});
});
