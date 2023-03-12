import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TodoControls from './todoControls';

describe('TodoControls', () => {
	it('should render correctly', () => {
		render(<TodoControls />);

		expect(screen.getByTestId('TODO_CONTROLS_CONTAINER')).toBeInTheDocument();
	});

	it('should have todos counter', () => {
		render(<TodoControls />);

		expect(screen.getByTestId('TODO_CONTROLS_COUNTER')).toBeInTheDocument();
	});

	it('should have todos counter', () => {
		render(<TodoControls />);

		expect(screen.getByTestId('TODO_CONTROLS_TOGGLES')).toBeInTheDocument();
	});

	it('should have todos counter', () => {
		render(<TodoControls />);

		expect(screen.getByTestId('TODO_CONTROLS_CLEAR')).toBeInTheDocument();
	});
});
