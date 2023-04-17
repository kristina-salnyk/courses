import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import theme from '../theme';
import setupStore from './setupStore';
import { MOCKED_STATE, ROUTES } from '../constants';

const renderWithProvidersAndRouter = (
	ui,
	{
		initialState = MOCKED_STATE,
		store = setupStore(initialState),
		route = ROUTES.ROOT,
	} = {}
) => {
	const Wrapper = ({ children }) => (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		</ThemeProvider>
	);

	Wrapper.propTypes = {
		children: PropTypes.element,
	};

	return {
		...render(ui, { wrapper: Wrapper }),
		store,
	};
};

export default renderWithProvidersAndRouter;
