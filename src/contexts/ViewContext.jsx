import { createContext, useContext, useState } from 'react';

import { VIEWS } from '../constants';

const ViewContext = createContext();

export const useCurrentView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
	const [currentView, setCurrentView] = useState(VIEWS.COURSES);

	return (
		<ViewContext.Provider value={{ currentView, setCurrentView }}>
			{children}
		</ViewContext.Provider>
	);
};
