import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../theme';
import setupStore from './setupStore';
import { MOCKED_STATE } from '../constants';

const renderWithProviders = (
	ui,
	{ initialState = MOCKED_STATE, store = setupStore(initialState) } = {}
) => {
	const Wrapper = ({ children }) => (
		<ThemeProvider theme={theme}>
			<Provider store={store}>{children}</Provider>
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

export default renderWithProviders;
