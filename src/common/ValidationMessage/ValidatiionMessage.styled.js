import styled from 'styled-components';

import { LimitedMultiline } from '../LimitedMultiline';

export const ValidationMessageStyled = styled(LimitedMultiline)`
	font-size: ${({ theme }) => theme.typography.size.xs};
	color: ${({ theme }) => theme.colors.error};
	position: absolute;
	left: 0;
	top: 100%;
	height: calc(
		${({ theme }) => theme.spacing[3]} - ${({ theme }) => theme.spacing[0]}
	);
	display: flex;
	align-items: center;
`;
