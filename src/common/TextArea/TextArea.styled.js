import styled from 'styled-components';

export const TextAreaWrap = styled.div`
	position: relative;
`;

export const TextAreaStyled = styled.textarea`
	padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
	width: 100%;
	font-size: ${({ theme }) => theme.typography.size.s};
	font-family: ${({ theme }) => theme.typography.font.primary};
	border: ${({ theme }) => theme.shape.borderWidth} solid
		${({ theme, error }) => (error ? theme.colors.error : theme.colors.black)};
	border-radius: ${({ theme }) => theme.shape.borderRadius.s};
	outline: none;
	background-color: transparent;
	transition: border-color ${({ theme }) => theme.animation.cubicBezier};

	&:focus {
		border-color: ${({ theme, error }) =>
			error ? theme.colors.error : theme.colors.accent};
	}

	&:focus + label {
		color: ${({ theme, error }) =>
			error ? theme.colors.error : theme.colors.accent};
	}
`;
