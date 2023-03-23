import React from 'react';
import PropTypes from 'prop-types';

import { NavLinkStyled } from './NavLink.styled';

const NavLink = ({ path, text, state, className }) => (
	<NavLinkStyled to={path} state={state} className={className}>
		{text}
	</NavLinkStyled>
);

export default NavLink;

NavLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	state: PropTypes.object,
	className: PropTypes.string,
};
