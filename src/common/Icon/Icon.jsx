import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

const Icon = ({ component: Component, size = 20 }) => {
	const theme = useTheme();

	return <Component size={size} color={theme.colors.accent} />;
};

export default Icon;

Icon.propTypes = {
	component: PropTypes.elementType.isRequired,
	size: PropTypes.number,
};
