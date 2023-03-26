import React from 'react';
import PropTypes from 'prop-types';

import { LinkStyled } from './Link.styled';

const Link = ({ path, text, icon, className }) => (
	<LinkStyled to={path} className={className}>
		{icon}
		{text}
	</LinkStyled>
);

export default Link;

Link.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.element,
	className: PropTypes.string,
};
