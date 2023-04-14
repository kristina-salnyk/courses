import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../theme';
import setupStore from './setupStore';

const renderWithProviders = (
	component,
	{ initialState, store = setupStore(initialState) } = {}
) => {
	return {
		...render(
			<ThemeProvider theme={theme}>
				<Provider store={store}>{component}</Provider>
			</ThemeProvider>
		),
		store,
	};
};

export default renderWithProviders;
