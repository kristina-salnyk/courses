import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

const Loader = ({ className, width = '100' }) => {
	const theme = useTheme();

	return (
		<LoaderWrap className={className}>
			<RotatingLines
				strokeColor={theme.colors.accent}
				strokeWidth='5'
				animationDuration='0.75'
				width={width}
				visible={true}
			/>
		</LoaderWrap>
	);
};

export default Loader;

Loader.propTypes = {
	width: PropTypes.string,
	className: PropTypes.string,
};
