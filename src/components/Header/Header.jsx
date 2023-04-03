import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from './components/Logo';
import { Button } from '../../common/Button';
import { Container } from '../../common/Container';
import { NavLink } from '../../common/NavLink';
import { Loader } from '../../common/Loader';
import { selectUser } from '../../store/user/selectors';
import { fetchLogout } from '../../store/user/thunk';
import { LOGIN_BTN, LOGOUT_BTN, REGISTER_BTN, ROUTES } from '../../constants';

import { Controls, HeaderContent, HeaderStyled } from './Header.styled';

const Header = () => {
	const dispatch = useDispatch();
	const { isAuth, isLoading, name } = useSelector(selectUser);

	const logoutClickHandler = async () => {
		dispatch(fetchLogout);
	};

	return (
		<>
			{isLoading && <Loader />}
			<HeaderStyled>
				<Container>
					<HeaderContent>
						<Logo />
						<Controls>
							{isAuth ? (
								<>
									<span>{name}</span>
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
