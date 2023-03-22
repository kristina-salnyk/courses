import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

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

UserProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
		.isRequired,
};
