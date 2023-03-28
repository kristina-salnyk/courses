import React from 'react';
import PropTypes from 'prop-types';

import { ContainerStyled } from './Container.styled';

const Container = ({ children }) => (
	<ContainerStyled>{children}</ContainerStyled>
);

export default Container;

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
		.isRequired,
};
