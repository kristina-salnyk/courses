import styled from 'styled-components';

export const LoaderWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.overlay};
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
