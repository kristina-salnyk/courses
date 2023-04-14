import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { Header } from '../index';
import renderWithProviders from '../../../utils/renderWithProviders';
import { LOGO_ALTERNATIVE_TEXT, MOCKED_STATE } from '../../../constants';

test('should display logo', () => {
	renderWithProviders(<Header />, { initialState: MOCKED_STATE });

	expect(screen.getByAltText(LOGO_ALTERNATIVE_TEXT)).toBeInTheDocument();
});

test("should display user's name", () => {
	renderWithProviders(<Header />, { initialState: MOCKED_STATE });

	expect(screen.getByText(MOCKED_STATE.user.name)).toBeInTheDocument();
});
