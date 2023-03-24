import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoFilters } from 'components/todos/todos';
import { ThemeProvider } from 'context/themeContext';

import TodoControls from './todoControls';

const renderTodoControlsWithProvider = (filter: string) => {
	return (
		<ThemeProvider>
			<TodoControls
				activeCount={5}
				changeFilter={jest.fn()}
				filter={TodoFilters.ALL}
				clearCompleted={jest.fn()}
				theme='light'
			/>
		</ThemeProvider>
	);
};

describe('TodoControls', () => {
	it('should render correctly', () => {
		render(renderTodoControlsWithProvider(TodoFilters.ALL));

		expect(screen.getByTestId('TODO_CONTROLS_CONTAINER')).toBeInTheDocument();
	});

	it('should have todos counter', () => {
		render(renderTodoControlsWithProvider(TodoFilters.ALL));

		expect(screen.getByTestId('TODO_CONTROLS_COUNTER')).toBeInTheDocument();
	});

	it('should render active todo count', () => {
		render(renderTodoControlsWithProvider(TodoFilters.ACTIVE));

		const counter = screen.getByTestId('TODO_CONTROLS_COUNTER');
		expect(counter).toBeInTheDocument();
		expect(counter).toHaveTextContent('5 items left');
	});

	it('should have todos clear button', () => {
		render(renderTodoControlsWithProvider(TodoFilters.COMPLETED));

		const clearBtn = screen.getByTestId('TODO_CONTROLS_CLEAR');

		expect(clearBtn).toBeInTheDocument();
		expect(clearBtn).toHaveTextContent('Clear Completed');
	});

	describe('Todos Toggle', () => {
		it('should render correctly', () => {
			render(renderTodoControlsWithProvider(TodoFilters.ALL));

			expect(screen.getByTestId('TODO_CONTROLS_TOGGLES')).toBeInTheDocument();
		});

		it('should have toggle all button', () => {
			render(renderTodoControlsWithProvider(TodoFilters.ALL));

			const allBtn = screen.getByTestId('TODO_CONTROLS_ALL_BTN');

			expect(allBtn).toHaveTextContent('All');
		});

		it('should have toggle active button', () => {
			render(renderTodoControlsWithProvider(TodoFilters.ALL));

			const activeBtn = screen.getByTestId('TODO_CONTROLS_ACTIVE_BTN');

			expect(activeBtn).toHaveTextContent('Active');
		});

		it('should have toggle completed button', () => {
			render(renderTodoControlsWithProvider(TodoFilters.ALL));

			const completedBtn = screen.getByTestId('TODO_CONTROLS_COMPLETED_BTN');

			expect(completedBtn).toHaveTextContent('Completed');
		});
	});
});
