import React from 'react';
import '@testing-library/jest-dom';

import Courses from '../index';
import { getAuthors } from '../../../services/api/authors';
import renderWithProviders from '../../../utils/renderWithProviders';
import {
	MOCKED_AUTHORS_LIST,
	MOCKED_COURSES_LIST,
	MOCKED_STATE,
} from '../../../constants';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
}));

jest.mock('../../../services/api/authors', () => ({
	__esModule: true,
	getAuthors: jest.fn(),
}));

jest.mock('../../../services/api/courses', () => ({
	__esModule: true,
	getCourses: jest.fn(),
}));

test('should display amount of CourseCard equal length of courses array', async () => {
	getAuthors.mockImplementationOnce(() =>
		Promise.resolve({
			status: 200,
			data: { successful: true, result: [...MOCKED_AUTHORS_LIST] },
		})
	);
	getAuthors.mockImplementationOnce(() => ({
		status: 200,
		data: { successful: true, result: [...MOCKED_COURSES_LIST] },
	}));

	const { store } = renderWithProviders(<Courses />, {
		initialState: MOCKED_STATE,
	});

	console.log(store.getState());

	// await screen.findByTestId('course-card');
	//
	// const courseCards = screen.getAllByTestId('course-card');
	// expect(courseCards).toHaveLength(store.getState().courses.length);
});
