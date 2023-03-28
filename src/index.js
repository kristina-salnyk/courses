import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { UserProvider } from './contexts/UserContext';
import { AuthorsProvider } from './contexts/AuthorsContext';
import { CoursesProvider } from './contexts/CoursesContext';
import App from './App';
import theme from './theme';

import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<UserProvider>
				<AuthorsProvider>
					<CoursesProvider>
						<App />
					</CoursesProvider>
				</AuthorsProvider>
			</UserProvider>
		</ThemeProvider>
	</React.StrictMode>
);
