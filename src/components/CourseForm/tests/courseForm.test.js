import React from 'react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, within } from '@testing-library/react';

import CourseForm from '../CourseForm';
import renderWithProviders from '../../../utils/renderWithProviders';
import {
	ADD_AUTHOR_BTN,
	AUTHOR_NAME_INPUT,
	CREATE_AUTHOR_BTN,
	DELETE_AUTHOR_BTN,
} from '../../../constants';

const mockedAuthorName = 'Test Author';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
	useLocation: () => jest.fn(),
}));

test('should show all authors list', () => {
	const { getByTestId } = renderWithProviders(<CourseForm />);

	expect(getByTestId(/author-list/i)).toBeInTheDocument();
});

test('should show course authors list', async () => {
	const { store, getByText, findByTestId, getByTestId } = renderWithProviders(
		<CourseForm />
	);

	const author = store.getState().authors[0];

	fireEvent.click(
		within(getByText(author.name)).getByText(ADD_AUTHOR_BTN.text)
	);

	await findByTestId(/course-author-list/i);

	expect(getByTestId(/course-author-list/i)).toBeInTheDocument();
});

test('"Create author" click button should call dispatch', async () => {
	const { store, getByLabelText, getByText } = renderWithProviders(
		<CourseForm />
	);

	fireEvent.change(getByLabelText(AUTHOR_NAME_INPUT.label), {
		target: { value: mockedAuthorName },
	});

	await act(async () => fireEvent.click(getByText(CREATE_AUTHOR_BTN.text)));

	expect(store.dispatch).toHaveBeenCalled();
});

test('"Add author" button click should add an author to course authors list', async () => {
	const { store, getByText, getByTestId, findByTestId } = renderWithProviders(
		<CourseForm />
	);

	const author = store.getState().authors[0];

	fireEvent.click(
		within(getByText(author.name)).getByText(ADD_AUTHOR_BTN.text)
	);

	await findByTestId(/course-author-list/i);

	expect(getByTestId(/course-author-list/i)).toHaveTextContent(author.name);
});

test('"Delete author" button click should delete an author from the course list', async () => {
	const { store, getByText, queryByTestId, findByTestId } = renderWithProviders(
		<CourseForm />
	);

	const author = store.getState().authors[0];

	fireEvent.click(
		within(getByText(author.name)).getByText(ADD_AUTHOR_BTN.text)
	);

	await findByTestId(/course-author-list/i);

	await act(async () =>
		fireEvent.click(
			within(getByText(author.name)).getByText(DELETE_AUTHOR_BTN.text)
		)
	);

	expect(queryByTestId(/course-author-list/i)).toBeNull();
});
