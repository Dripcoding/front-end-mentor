import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SearchBar from './searchBar';

describe('SearchBar', () => {
	it('should render correctly', () => {
		render(<SearchBar />);

		expect(screen.getByTestId('SEARCH_BAR_CONTAINER')).toBeInTheDocument();
	});

	it('should have radio btn', () => {
		render(<SearchBar />);

		expect(screen.getByTestId('SEARCH_BAR_RADIO_BTN')).toBeInTheDocument();
	});

	it('should have input', () => {
		render(<SearchBar />);

		expect(screen.getByTestId('SEARCH_BAR_INPUT')).toBeInTheDocument();
	});
});
