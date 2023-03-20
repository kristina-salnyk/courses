import styled from 'styled-components';

export const InputWrap = styled.div`
	position: relative;
`;

export const InputStyled = styled.input`
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

	&::-webkit-search-cancel-button {
		-webkit-appearance: none;
		background-color: ${({ theme }) => theme.colors.accent};
		-webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
		background-size: ${({ theme }) => theme.spacing[2]}
			${({ theme }) => theme.spacing[2]};
		height: ${({ theme }) => theme.spacing[2]};
		width: ${({ theme }) => theme.spacing[2]};
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	& {
		-moz-appearance: textfield;
	}
`;
