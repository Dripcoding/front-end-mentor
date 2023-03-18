import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';

import TodoItem from './todoItem';

describe('TodoItem', () => {
	it('should render correctly', () => {
		const todo = { id: uuidv4(), value: 'walk dog', completed: false };
		const key = 'exampleKey';
		render(
			<TodoItem
				todo={todo}
				key={key}
				completeTodo={(id) => {
					return;
				}}
			/>
		);

		const container = screen.getByTestId('TODO_ITEM_CONTAINER');
		expect(container).toBeInTheDocument();
		expect(container).toHaveTextContent('walk dog');
	});

	it('should render todo value', () => {
		const todo = { id: uuidv4(), value: 'walk dog', completed: false };
		const key = 'exampleKey';
		render(
			<TodoItem
				todo={todo}
				key={key}
				completeTodo={(id) => {
					return;
				}}
			/>
		);

		const todoEl = screen.getByTestId('TODO_ITEM_VALUE');
		expect(todoEl).toBeInTheDocument();
		expect(todoEl).toHaveTextContent(todo.value);
	});

	it('should render todo item toggle', () => {
		const todo = { id: uuidv4(), value: 'walk dog', completed: false };
		const key = 'exampleKey';
		render(
			<TodoItem
				todo={todo}
				key={key}
				completeTodo={(id) => {
					return;
				}}
			/>
		);

		const toggle = screen.getByTestId('TODO_ITEM_BTN');
		expect(toggle).toBeInTheDocument();
	});

	it('should render check mark when todo item is complete', () => {
		const todo = { id: uuidv4(), value: 'finish homework', completed: true };
		const key = 'exampleKey';
		render(
			<TodoItem
				todo={todo}
				key={key}
				completeTodo={(id) => {
					return;
				}}
			/>
		);

		const checkmark = screen.getByTestId('TODO_ITEM_CHECK_MARK');
		expect(checkmark).toBeInTheDocument();
		expect(checkmark).toHaveAttribute('alt', 'todo check mark');
	});
});
