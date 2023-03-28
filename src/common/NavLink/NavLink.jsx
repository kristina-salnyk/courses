import React from 'react';
import PropTypes from 'prop-types';

import { NavLinkStyled } from './NavLink.styled';

const NavLink = ({ path, text, className }) => (
	<NavLinkStyled to={path} className={className}>
		{text}
	</NavLinkStyled>
);

export default NavLink;

NavLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};
