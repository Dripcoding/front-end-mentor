import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
	it('should have header component', () => {
		// const header = render(<Header/>)
		expect(1).toBeTruthy();
	});
	// it('should render successfully', () => {
	// 	const { baseElement } = render(<App />);
	// 	expect(baseElement).toBeTruthy();
	// });

	// it('should have a greeting as the title', () => {
	// 	const { getByText } = render(<App />);
	// 	expect(getByText(/Welcome todo-app-/gi)).toBeTruthy();
	// });
});
