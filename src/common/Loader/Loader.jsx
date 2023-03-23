import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

const Loader = ({ className }) => {
	const theme = useTheme();

	return (
		<LoaderWrap className={className}>
			<RotatingLines
				strokeColor={theme.colors.accent}
				strokeWidth='5'
				animationDuration='0.75'
				width='100'
				visible={true}
			/>
		</LoaderWrap>
	);
};

export default Loader;

Loader.propTypes = {
	className: PropTypes.string,
};
