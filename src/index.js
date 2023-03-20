import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { ViewProvider } from './contexts/ViewContext';
import App from './App';
import theme from './theme';

import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ViewProvider>
				<App />
			</ViewProvider>
		</ThemeProvider>
	</React.StrictMode>
);
