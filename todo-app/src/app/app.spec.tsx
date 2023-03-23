import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from 'context/todoContext';

import App from './app';

const renderAppWithProvider = () => {
	return (
		<TodoProvider>
			<App />
		</TodoProvider>
	);
};

describe('App', () => {
	it('should have header component', () => {
		render(renderAppWithProvider());
		expect(screen.getByTestId('TODO_HEADER_CONTAINER')).toBeInTheDocument();
	});

	it('should have search bar component', () => {
		render(renderAppWithProvider());
		expect(screen.getByTestId('CREATE_TODO_BAR_CONTAINER')).toBeInTheDocument();
	});

	it('should have footer component', () => {
		render(renderAppWithProvider());
		expect(screen.getByTestId('FOOTER')).toBeInTheDocument();
	});

	describe('integration tests', () => {
		it('should allow user to toggle theme', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			await user.click(screen.getByTitle('Moon Icon'));

			await waitFor(() => {
				expect(screen.getByTitle('Sun Icon')).toBeInTheDocument();
			});

			await user.click(screen.getByTitle('Sun Icon'));

			await waitFor(() => {
				expect(screen.getByTitle('Moon Icon')).toBeInTheDocument();
			});
		});

		it('should allow user to add new todo', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const input = screen.getByTestId('CREATE_TODO_BAR_INPUT');
			await user.type(input, 'new todo');
			await user.type(input, '{enter}');

			await waitFor(() => {
				const todoItems = screen.getAllByTestId('TODO_ITEM_CONTAINER');
				const newTodo = todoItems[todoItems.length - 1];

				expect(newTodo).toHaveTextContent('new todo');
			});
		});

		it('should allow user to complete a todo', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const completeTodoButtons = screen.getAllByTestId('TODO_ITEM_BTN');

			await user.click(completeTodoButtons[0]);
			await waitFor(() => {
				expect(screen.getByTestId('TODO_ITEM_CHECK_MARK')).toBeInTheDocument();
			});
		});

		it('should show user correct active todo count', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const completeTodoButtons = screen.getAllByTestId('TODO_ITEM_BTN');

			await user.click(completeTodoButtons[0]);
			await waitFor(() => {
				expect(screen.getByText('5 items left')).toBeInTheDocument();
			});
		});

		it('should allow user to filter all todos', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const allFilterBtn = screen.getByTestId('TODO_CONTROLS_ALL_BTN');

			await user.click(allFilterBtn);
			await waitFor(() => {
				const todos = screen.getAllByTestId('TODO_ITEM_CONTAINER');
				expect(todos.length).toBe(6);
				expect(todos[0]).toHaveTextContent('Complete online JavaScript course');
				expect(todos[1]).toHaveTextContent('Jog around the park 3x');
				expect(todos[2]).toHaveTextContent('10 minutes meditation');
				expect(todos[3]).toHaveTextContent('Read for 1 hour');
				expect(todos[4]).toHaveTextContent('Pick up groceries');
				expect(todos[5]).toHaveTextContent(
					'Complete Todo App on Frontend Mentor'
				);
			});
		});

		it('should allow user to filter active todos', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const activeFilterBtn = screen.getByTestId('TODO_CONTROLS_ACTIVE_BTN');

			await user.click(activeFilterBtn);
			await waitFor(() => {
				const todos = screen.getAllByTestId('TODO_ITEM_CONTAINER');
				expect(todos.length).toBe(5);
				expect(todos[0]).toHaveTextContent('Jog around the park 3x');
				expect(todos[1]).toHaveTextContent('10 minutes meditation');
				expect(todos[2]).toHaveTextContent('Read for 1 hour');
				expect(todos[3]).toHaveTextContent('Pick up groceries');
				expect(todos[4]).toHaveTextContent(
					'Complete Todo App on Frontend Mentor'
				);
			});
		});

		it('should allow user to filter completed todos', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const activeFilterBtn = screen.getByTestId('TODO_CONTROLS_COMPLETED_BTN');

			await user.click(activeFilterBtn);
			await waitFor(() => {
				const todos = screen.getAllByTestId('TODO_ITEM_CONTAINER');
				expect(todos.length).toBe(1);
				expect(todos[0]).toHaveTextContent('Complete online JavaScript course');
			});
		});

		it('should allow user to clear completed todos', async () => {
			const user = userEvent.setup();
			render(renderAppWithProvider());

			const clearBtn = screen.getByTestId('TODO_CONTROLS_CLEAR');

			await user.click(clearBtn);
			await waitFor(() => {
				const todos = screen.getAllByTestId('TODO_ITEM_CONTAINER');
				expect(todos.length).toBe(5);
				expect(screen.queryByText('Complete online JavaScript course')).toBe(
					null
				);
			});
		});
	});
});
