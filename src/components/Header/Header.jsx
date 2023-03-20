import { Logo } from './components/Logo';
import { Button } from '../../common/Button';
import { Container } from '../../common/Container';
import { NavLink } from '../../common/NavLink';
import { useUser } from '../../contexts/UserContext';
import { LOGIN_BTN, LOGOUT_BTN, REGISTER_BTN, ROUTES } from '../../constants';

import { Controls, HeaderContent, HeaderStyled } from './Header.styled';

const Header = () => {
	const { isLoggedIn, setIsLoggedIn, name } = useUser();

	return (
		<HeaderStyled>
			<Container>
				<HeaderContent>
					<Logo />
					<Controls>
						{isLoggedIn ? (
							<>
								<span>{name}</span>
								<Button
									type={LOGOUT_BTN.type}
									text={LOGOUT_BTN.text}
									onClick={() => {
										setIsLoggedIn(false);
									}}
								/>
							</>
						) : (
							<>
								<NavLink path={ROUTES.LOGIN} text={LOGIN_BTN.text} />
								<NavLink path={ROUTES.REGISTRATION} text={REGISTER_BTN.text} />
							</>
						)}
					</Controls>
				</HeaderContent>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
