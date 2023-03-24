import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { TodoProvider } from 'context/todoContext';

import Todos, { filterStrategy } from './todos';
import { ThemeProvider } from 'context/themeContext';

const renderTodosWithProvider = () => {
	return (
		<ThemeProvider>
			<TodoProvider>
				<Todos />
			</TodoProvider>
		</ThemeProvider>
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

	describe('filter strategies', () => {
		it('ALL strategy returns all todos', () => {
			const todos = [
				{ id: uuidv4(), value: 'Jog around the park 3x', completed: false },
				{ id: uuidv4(), value: '10 minutes meditation', completed: false },
				{ id: uuidv4(), value: 'Read for 1 hour', completed: false },
			];
			const strategy = filterStrategy['ALL'];
			const filtered = strategy(todos);

			expect(filtered.length).toBe(3);
			expect(filtered).toEqual(todos);
		});

		it('ACTIVE strategy returns active todos', () => {
			const todos = [
				{ id: uuidv4(), value: 'Jog around the park 3x', completed: false },
				{ id: uuidv4(), value: '10 minutes meditation', completed: false },
				{ id: uuidv4(), value: 'Read for 1 hour', completed: true },
			];
			const strategy = filterStrategy['ACTIVE'];
			const filtered = strategy(todos);

			expect(filtered.length).toBe(2);
			expect(filtered).toEqual([todos[0], todos[1]]);
		});

		it('COMPLETED strategy returns completed todos', () => {
			const todos = [
				{ id: uuidv4(), value: 'Jog around the park 3x', completed: false },
				{ id: uuidv4(), value: '10 minutes meditation', completed: false },
				{ id: uuidv4(), value: 'Read for 1 hour', completed: true },
			];
			const strategy = filterStrategy['COMPLETED'];
			const filtered = strategy(todos);

			expect(filtered.length).toBe(1);
			expect(filtered).toEqual([todos[2]]);
		});
	});
});
