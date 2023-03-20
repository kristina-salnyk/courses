import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme';

import { UserProvider } from './contexts/UserContext';

import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<UserProvider>
				<App />
			</UserProvider>
		</ThemeProvider>
	</React.StrictMode>
);
