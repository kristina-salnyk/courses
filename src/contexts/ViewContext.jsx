import { createContext, useCallback, useContext, useState } from 'react';

import { VIEWS } from '../constants';

const ViewContext = createContext();

export const useCurrentView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
	const [currentView, setCurrentView] = useState(VIEWS.COURSES);

	const updateCurrentView = useCallback((view) => {
		setCurrentView(view);
	}, []);

	return (
		<ViewContext.Provider value={{ currentView, updateCurrentView }}>
			{children}
		</ViewContext.Provider>
	);
};
