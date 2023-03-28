import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { AUTHORS_LIST } from '../constants';

const AuthorsContext = createContext();

export const useAuthors = () => useContext(AuthorsContext);

export const AuthorsProvider = ({ children }) => {
	const [authors, setAuthors] = useState(AUTHORS_LIST);

	const getAuthorsListById = useMemo(
		() => (authorsId) =>
			authorsId
				.map((item) => authors.find((author) => author.id === item)?.name)
				.join(', '),
		[authors]
	);

	const getAuthorsById = useMemo(
		() => (authorsId) => authors.filter((item) => authorsId.includes(item.id)),
		[authors]
	);

	return (
		<AuthorsContext.Provider
			value={{ authors, setAuthors, getAuthorsListById, getAuthorsById }}
		>
			{children}
		</AuthorsContext.Provider>
	);
};

AuthorsProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
		.isRequired,
};
