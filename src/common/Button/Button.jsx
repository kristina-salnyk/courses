import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styled';

const Button = ({ type, icon, text, onClick, className }) => (
	<ButtonStyled
		type={type}
		onClick={onClick && (() => onClick())}
		className={className}
	>
		{icon}
		{text}
	</ButtonStyled>
);

export default Button;

Button.propTypes = {
	type: PropTypes.string.isRequired,
	icon: PropTypes.element,
	text: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};
