import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ThemeProvider } from 'context/themeContext';

export const reportAccessibility = async (
	App: typeof React,
	config?: Record<string, unknown>
): Promise<void> => {
	if (process.env.NODE_ENV !== 'production') {
		const axe = await import('@axe-core/react');
		const ReactDOM = await import('react-dom');

		axe.default(App, ReactDOM, 1000, config);
	}
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);

reportAccessibility(React);
