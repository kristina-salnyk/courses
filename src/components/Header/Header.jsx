import { Logo } from './components/Logo';
import { Button } from '../../common/Button';
import { Container } from '../../common/Container';
import { LOGOUT_BTN, USER_NAME } from '../../constants';

import { Controls, HeaderContent, HeaderStyled } from './Header.styled';

const Header = () => (
	<HeaderStyled>
		<Container>
			<HeaderContent>
				<Logo />
				<Controls>
					<span>{USER_NAME}</span>
					<Button type={LOGOUT_BTN.type} text={LOGOUT_BTN.text} />
				</Controls>
			</HeaderContent>
		</Container>
	</HeaderStyled>
);

export default Header;
