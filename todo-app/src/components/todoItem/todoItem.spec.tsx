import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TodoItem from './todoItem';

describe('TodoItem', () => {
	it('should render correctly', () => {
		const todo = { id: 0, value: 'walk dog' };
		const key = 'exampleKey';
		render(<TodoItem todo={todo} key={key} />);

		expect(screen.getByTestId('TODO_ITEM_CONTAINER')).toBeInTheDocument();
	});

	it('should render todo value', () => {
		const todo = { id: 0, value: 'walk dog' };
		const key = 'exampleKey';
		render(<TodoItem todo={todo} key={key} />);

		const todoEl = screen.getByTestId('TODO_ITEM_VALUE');
		expect(todoEl).toBeInTheDocument();
		expect(todoEl).toHaveTextContent(todo.value);
	});

	it('should render todo item toggle', () => {
		const todo = { id: 0, value: 'walk dog' };
		const key = 'exampleKey';
		render(<TodoItem todo={todo} key={key} />);

		const toggle = screen.getByTestId('TODO_ITEM_BTN');
		expect(toggle).toBeInTheDocument();
	});
});
