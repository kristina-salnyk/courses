import { Logo } from './components/Logo';
import { Button } from '../../common/Button';
import { Container } from '../../common/Container';

import { LOGOUT_BTN, MOCKED_USER_NAME } from '../../constants';

import { Controls, HeaderContent, HeaderStyled } from './Header.styled';

const Header = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContent>
					<Logo />
					<Controls>
						<span>{MOCKED_USER_NAME}</span>
						<Button
							type={LOGOUT_BTN.type}
							text={LOGOUT_BTN.text}
							onClick={() => {}}
						/>
					</Controls>
				</HeaderContent>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
