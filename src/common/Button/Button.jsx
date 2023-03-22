import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styled';

const Button = ({ type, text, onClick, className }) => (
	<ButtonStyled
		type={type}
		onClick={onClick && (() => onClick())}
		className={className}
	>
		{text}
	</ButtonStyled>
);

export default Button;

Button.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string,
};
