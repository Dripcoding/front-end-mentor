import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import axe from '@axe-core/react';

import { TodoProvider } from 'context/context';
import App from './app/app';

if (process.env.NODE_ENV !== 'production') {
	axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</StrictMode>
);
