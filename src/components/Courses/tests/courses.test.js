import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import Courses from '../index';
import App from '../../../App';
import renderWithProvidersAndRouter from '../../../utils/renderWithProvidersAndRouter';
import {
	ADD_NEW_COURSE_BTN,
	COURSES_NO_RESULTS_TEXT,
	CREATE_COURSE_BTN,
	MOCKED_STATE,
} from '../../../constants';

test('should display amount of CourseCard equal length of courses array', async () => {
	const { store, findAllByTestId, getAllByTestId } =
		renderWithProvidersAndRouter(<Courses />);

	await findAllByTestId(/course-card/i);

	const courseCards = getAllByTestId(/course-card/i);
	expect(courseCards).toHaveLength(store.getState().courses.length);
});

test('should display Empty container if courses array length is 0', async () => {
	const { findByText, getByText } = renderWithProvidersAndRouter(<Courses />, {
		initialState: { ...MOCKED_STATE, courses: [] },
	});

	await findByText(COURSES_NO_RESULTS_TEXT);

	expect(getByText(COURSES_NO_RESULTS_TEXT)).toBeInTheDocument();
});

test('CourseForm should be showed after a click on a button "Add new course"', async () => {
	const { findByText, getByText } = renderWithProvidersAndRouter(<App />);

	await findByText(ADD_NEW_COURSE_BTN.text);

	fireEvent.click(getByText(ADD_NEW_COURSE_BTN.text));

	await findByText(CREATE_COURSE_BTN.text);

	expect(getByText(CREATE_COURSE_BTN.text)).toBeInTheDocument();
});
