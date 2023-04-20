import React from 'react';
import '@testing-library/jest-dom';

import { CourseCard } from '../index';
import renderWithProviders from '../../../../../utils/renderWithProviders';

const mockedCourse = {
	id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551bb',
	title: 'React',
	description: `Lorem Ipsum has been the industry's standard.`,
	creationDate: '5/11/2023',
	duration: 120,
	authors: [
		'df32994e-b23d-497c-9e4d-84e4dc02882f',
		'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
	],
};

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
}));

test('should display title', () => {
	const { getByText } = renderWithProviders(<CourseCard {...mockedCourse} />);

	expect(getByText(/React/i)).toBeInTheDocument();
});

test('should display description', () => {
	const { getByText } = renderWithProviders(<CourseCard {...mockedCourse} />);

	expect(
		getByText(/Lorem Ipsum has been the industry's standard./i)
	).toBeInTheDocument();
});

test('should display duration in the correct format', () => {
	const { getByText } = renderWithProviders(<CourseCard {...mockedCourse} />);

	expect(getByText(/02:00 hours/i)).toBeInTheDocument();
});

test('should display authors list', () => {
	const { getByText } = renderWithProviders(<CourseCard {...mockedCourse} />);

	expect(getByText(/Anna Sidorenko, Valentina Larina/i)).toBeInTheDocument();
});

test('should display created date in the correct format', () => {
	const { getByText } = renderWithProviders(<CourseCard {...mockedCourse} />);

	expect(getByText(/5.11.2023/i)).toBeInTheDocument();
});
