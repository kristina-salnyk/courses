import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../../common/Button';

export const LoginStyled = styled.section`
	padding: ${({ theme }) => theme.spacing[2]} 0;
`;

export const LoginForm = styled.form`
	position: relative;
	padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
	background-color: ${({ theme }) => theme.colors.background.card};
	box-shadow: ${({ theme }) => theme.shadows[0]};
	border-radius: ${({ theme }) => theme.shape.borderRadius.m};
`;

export const LoginContent = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
	max-width: 350px;
`;

export const FieldWrap = styled.div`
	margin-bottom: ${({ theme }) => theme.spacing[2]};
	position: relative;
`;

export const FieldWrapStyled = styled(FieldWrap)`
	flex-grow: 1;
`;

export const ButtonStyled = styled(Button)`
	width: 130px;
	align-self: center;
`;

export const InfoMessage = styled.p`
	margin-top: ${({ theme }) => theme.spacing[2]};
	padding: ${({ theme }) => theme.spacing[1]} 0;
	font-size: ${({ theme }) => theme.typography.size.xs};
	text-align: center;
`;

export const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.colors.accent};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
