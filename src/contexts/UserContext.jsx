import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name] = useState('Dave');
	// const [token, setToken] = useState(null);

	return (
		<UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, name }}>
			{children}
		</UserContext.Provider>
	);
};
