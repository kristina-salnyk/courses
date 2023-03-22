import { createContext, useContext, useState } from 'react';

import { MOCKED_COURSES_LIST } from '../constants';

const CoursesContext = createContext();

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
	const [courses, setCourses] = useState(MOCKED_COURSES_LIST);

	return (
		<CoursesContext.Provider value={{ courses, setCourses }}>
			{children}
		</CoursesContext.Provider>
	);
};
