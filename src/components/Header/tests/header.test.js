import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import theme from '../../../theme';
import { Header } from '../index';
import {
	LOGO_ALTERNATIVE_TEXT,
	MOCKED_STATE,
	MOCKED_STORE,
} from '../../../constants';

test("should have logo and user's name", () => {
	render(
		<ThemeProvider theme={theme}>
			<Provider store={MOCKED_STORE}>
				<Header />
			</Provider>
		</ThemeProvider>
	);

	expect(screen.getByAltText(LOGO_ALTERNATIVE_TEXT)).toBeInTheDocument();
	expect(screen.getByText(MOCKED_STATE.user.name)).toBeInTheDocument();
});
