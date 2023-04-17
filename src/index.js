import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AuthMiddleware } from './components/AuthMiddleware';
import { store } from './store';
import theme from './theme';
import App from './App';

import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<AuthMiddleware>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</AuthMiddleware>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
