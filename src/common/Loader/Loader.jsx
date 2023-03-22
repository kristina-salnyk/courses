import React from 'react';
import { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

const Loader = () => {
	const theme = useTheme();

	return (
		<LoaderWrap>
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
