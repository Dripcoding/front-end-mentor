import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from 'context/context';

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
	});
});
