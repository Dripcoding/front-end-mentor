import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'context/themeContext';

import Footer from './footer';

describe('Footer', () => {
	it('should render correctly', () => {
		render(
			<ThemeProvider>
				<Footer />
			</ThemeProvider>
		);

		expect(screen.getByTestId('FOOTER')).toBeInTheDocument();
		expect(
			screen.getByText('Drag and drop to reorder list')
		).toBeInTheDocument();
	});
});
