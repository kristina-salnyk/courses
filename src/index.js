import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { AuthorsProvider } from './contexts/AuthorsContext';
import { CoursesProvider } from './contexts/CoursesContext';
import { persistor, store } from './store';
import theme from './theme';
import App from './App';

import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthorsProvider>
						<CoursesProvider>
							<App />
						</CoursesProvider>
					</AuthorsProvider>
				</PersistGate>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
