import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { ViewProvider } from './contexts/ViewContext';
import { AuthorsProvider } from './contexts/AuthorsContext';
import App from './App';
import theme from './theme';

import 'normalize.css';
import './index.css';
import { CoursesProvider } from './contexts/CoursesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ViewProvider>
				<AuthorsProvider>
					<CoursesProvider>
						<App />
					</CoursesProvider>
				</AuthorsProvider>
			</ViewProvider>
		</ThemeProvider>
	</React.StrictMode>
);
