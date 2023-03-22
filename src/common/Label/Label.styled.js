import styled from 'styled-components';

export const LabelStyled = styled.label`
	padding: 0 ${({ theme }) => theme.spacing[0]};
	background-color: ${({ theme }) => theme.colors.background.card};
	color: ${({ theme, error }) =>
		error ? theme.colors.error : theme.colors.text.primary};
	font-size: ${({ theme }) => theme.typography.size.xs};
	position: absolute;
	top: -6px;
	left: ${({ theme }) => theme.spacing[2]};
	transition: color ${({ theme }) => theme.animation.cubicBezier};

	${({ theme, isRequired }) =>
		isRequired
			? `&:after {
		content: ' *';
		color: ${theme.colors.error};
	}`
			: ''}
`;
