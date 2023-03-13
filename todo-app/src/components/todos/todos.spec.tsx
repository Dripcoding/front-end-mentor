import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Todos from './todos';

describe('Todos', () => {
	it('should render correctly', () => {
		render(<Todos />);

		expect(screen.getByTestId('TODOS_CONTAINER')).toBeInTheDocument();
	});

	it('should renders TodoControls', () => {
		render(<Todos />);

		expect(screen.getByTestId('TODO_CONTROLS_CONTAINER')).toBeInTheDocument();
	});
});
