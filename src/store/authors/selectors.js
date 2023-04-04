import { createSelector } from 'reselect';

export const selectAuthors = (state) => state.authors;

export const selectAuthorsWithoutSelected = createSelector(
	[selectAuthors, (state, selectedAuthors) => selectedAuthors],
	(authors, selectedAuthors) =>
		authors.filter((item) => !selectedAuthors.includes(item.id))
);

export const selectAuthorsByIds = createSelector(
	[selectAuthors, (state, authorIds) => authorIds],
	(authors, authorIds) => authors.filter((item) => authorIds.includes(item.id))
);

export const selectAuthorsListByIds = createSelector(
	[selectAuthors, (state, authorIds) => authorIds],
	(authors, authorIds) =>
		authorIds
			.map((item) => authors.find((author) => author.id === item)?.name)
			.join(', ')
);
