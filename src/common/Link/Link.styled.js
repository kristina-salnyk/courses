import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.accent};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	white-space: nowrap;
	transition: color ${({ theme }) => theme.animation.cubicBezier};

	&:hover {
		color: ${({ theme }) => theme.colors.lightAccent};
	}
`;
