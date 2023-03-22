import React from 'react';
import PropTypes from 'prop-types';

import { NavLinkStyled } from './NavLink.styled';

const NavLink = ({ path, text }) => (
	<NavLinkStyled to={path}> {text}</NavLinkStyled>
);

export default NavLink;

NavLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
