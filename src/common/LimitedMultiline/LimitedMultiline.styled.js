import styled from 'styled-components';

export const LimitedMultilineStyled = styled.div`
	overflow: hidden;
`;

export const LimitedLineContent = styled.div`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: ${({ lines }) => lines};
	white-space: pre-wrap;
`;
