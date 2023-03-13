import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Todos from './todos';

describe('Todos', () => {
	it('should render correctly', () => {
		render(<Todos />);

		expect(screen.getByTestId('TODOS_CONTAINER')).toBeInTheDocument();
	});

	it('should render TodoItems', () => {
		render(<Todos />);

		const todos = screen.getAllByTestId('TODO_ITEM_CONTAINER');
		expect(todos).not.toBeNull();
		expect(todos.length).toBe(2);
	});

	it('should renders TodoControls', () => {
		render(<Todos />);

		expect(screen.getByTestId('TODO_CONTROLS_CONTAINER')).toBeInTheDocument();
	});
});
