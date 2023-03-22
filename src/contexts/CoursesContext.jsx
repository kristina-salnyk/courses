import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { COURSES_LIST } from '../constants';

const CoursesContext = createContext();

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
	const [courses, setCourses] = useState(COURSES_LIST);

	return (
		<CoursesContext.Provider value={{ courses, setCourses }}>
			{children}
		</CoursesContext.Provider>
	);
};

CoursesProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
		.isRequired,
};
