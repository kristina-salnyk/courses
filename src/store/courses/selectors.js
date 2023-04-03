import { createSelector } from 'reselect';

export const selectIsLoading = (state) => state.courses.isLoading;

export const selectCourses = (state) => state.courses.items;

export const selectCoursesBySearchQuery = createSelector(
	[selectCourses, (state, searchQuery) => searchQuery],
	(courses, searchQuery) =>
		courses.filter((item) =>
			[item.title.toLowerCase(), item.id.toLowerCase()].some((property) =>
				property.includes(searchQuery.toLowerCase())
			)
		)
);

export const selectCourseById = createSelector(
	[selectCourses, (state, courseId) => courseId],
	(courses, courseId) => courses.find((item) => item.id === courseId)
);
