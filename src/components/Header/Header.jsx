import React, { useState } from 'react';

import { Logo } from './components/Logo';
import { Button } from '../../common/Button';
import { Container } from '../../common/Container';
import { NavLink } from '../../common/NavLink';
import { Loader } from '../../common/Loader';
import { useUser } from '../../contexts/UserContext';
import { logout } from '../../utils/api/auth';
import { LOGIN_BTN, LOGOUT_BTN, REGISTER_BTN, ROUTES } from '../../constants';

import { Controls, HeaderContent, HeaderStyled } from './Header.styled';

const Header = () => {
	const { isLoggedIn, setIsLoggedIn, user, setUser, setToken } = useUser();
	const [isLoading, setIsLoading] = useState(false);

	const logoutClickHandler = async () => {
		setIsLoading(true);

		try {
			await logout();
		} catch (error) {
		} finally {
			setIsLoggedIn(false);
			setToken(null);
			setUser({ name: null, email: null });

			setIsLoading(false);
		}
	};

	return (
		<>
			{isLoading && <Loader />}
			<HeaderStyled>
				<Container>
					<HeaderContent>
						<Logo />
						<Controls>
							{isLoggedIn ? (
								<>
									<span>{user.name}</span>
									<Button
										type={LOGOUT_BTN.type}
										text={LOGOUT_BTN.text}
										onClick={logoutClickHandler}
									/>
								</>
							) : (
								<>
									<NavLink path={ROUTES.LOGIN} text={LOGIN_BTN.text} />
									<NavLink
										path={ROUTES.REGISTRATION}
										text={REGISTER_BTN.text}
									/>
								</>
							)}
						</Controls>
					</HeaderContent>
				</Container>
			</HeaderStyled>
		</>
	);
};

export default Header;
