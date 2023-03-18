import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { clear } from 'console';

import TodoControls from './todoControls';

describe('TodoControls', () => {
	it('should render correctly', () => {
		render(<TodoControls activeCount={5} />);

		expect(screen.getByTestId('TODO_CONTROLS_CONTAINER')).toBeInTheDocument();
	});

	it('should have todos counter', () => {
		render(<TodoControls activeCount={5} />);

		expect(screen.getByTestId('TODO_CONTROLS_COUNTER')).toBeInTheDocument();
	});

	it('should render active todo count', () => {
		render(<TodoControls activeCount={5} />);

		const counter = screen.getByTestId('TODO_CONTROLS_COUNTER');
		expect(counter).toBeInTheDocument();
		expect(counter).toHaveTextContent('5 items left');
	});

	it('should have todos clear button', () => {
		render(<TodoControls activeCount={5} />);
		const clearBtn = screen.getByTestId('TODO_CONTROLS_CLEAR');

		expect(clearBtn).toBeInTheDocument();
		expect(clearBtn).toHaveTextContent('Clear Completed');
	});

	describe('Todos Toggle', () => {
		it('should render correctly', () => {
			render(<TodoControls activeCount={5} />);

			expect(screen.getByTestId('TODO_CONTROLS_TOGGLES')).toBeInTheDocument();
		});

		it('should have toggle all button', () => {
			render(<TodoControls activeCount={5} />);
			const allBtn = screen.getByTestId('TODO_CONTROLS_ALL_BTN');

			expect(allBtn).toHaveTextContent('All');
		});

		it('should have toggle active button', () => {
			render(<TodoControls activeCount={5} />);
			const activeBtn = screen.getByTestId('TODO_CONTROLS_ACTIVE_BTN');

			expect(activeBtn).toHaveTextContent('Active');
		});

		it('should have toggle completed button', () => {
			render(<TodoControls activeCount={5} />);
			const completedBtn = screen.getByTestId('TODO_CONTROLS_COMPLETED_BTN');

			expect(completedBtn).toHaveTextContent('Completed');
		});
	});
});
