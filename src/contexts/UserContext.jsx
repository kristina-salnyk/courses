import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../common/Loader';
import { clearAuthHeader, setAuthHeader } from '../utils/api/api';
import { current } from '../utils/api/auth';
import { TOKEN_LOCAL_STORAGE_KEY } from '../constants';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({ name: null, email: null });
	const [token, setToken] = useState(null);
	const [isRefreshing, setIsRefreshing] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const serializedToken = window.localStorage.getItem(
					TOKEN_LOCAL_STORAGE_KEY
				);

				if (!serializedToken) return;

				const { token } = JSON.parse(serializedToken);

				setIsLoading(true);

				try {
					const response = await current(token);
					const { data } = response;

					if (response.status === 200 && data.successful) {
						const { name, email } = data.result;

						setIsLoggedIn(true);
						setToken(token);
						setUser({ name, email });
					} else {
						clearAuthHeader();
					}
				} catch (error) {
					clearAuthHeader();
				} finally {
					setIsLoading(false);
				}
			} catch (error) {
			} finally {
				setIsRefreshing(false);
			}
		})();
	}, []);

	useEffect(() => {
		if (!token) {
			clearAuthHeader();
			window.localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
			return;
		}

		setAuthHeader(token);
		const serializedToken = JSON.stringify({ token });
		window.localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, serializedToken);
	}, [token, clearAuthHeader, setAuthHeader]);

	if (isLoading) return <Loader />;

	if (isRefreshing) return null;

	return (
		<UserContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				user,
				setUser,
				token,
				setToken,
				isRefreshing,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
		.isRequired,
};
