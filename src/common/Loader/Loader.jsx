import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

const Loader = () => {
	const theme = useTheme();

	return (
		<RotatingLines
			strokeColor={theme.colors.accent}
			strokeWidth='5'
			animationDuration='0.75'
			width='30%'
			visible={true}
		/>
	);
};

export default Loader;
