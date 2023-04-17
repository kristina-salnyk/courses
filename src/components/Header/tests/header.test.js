import React from 'react';
import '@testing-library/jest-dom';

import { Header } from '../index';
import renderWithProviders from '../../../utils/renderWithProviders';
import { LOGO_ALTERNATIVE_TEXT, MOCKED_STATE } from '../../../constants';

test('should display logo', () => {
	const { getByAltText } = renderWithProviders(<Header />);

	expect(getByAltText(LOGO_ALTERNATIVE_TEXT)).toBeInTheDocument();
});

test("should display user's name", () => {
	const { getByText } = renderWithProviders(<Header />);

	expect(getByText(MOCKED_STATE.user.name)).toBeInTheDocument();
});
