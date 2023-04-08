import styled from 'styled-components';

import { Link } from '../../common/Link';
import { Loader } from '../../common/Loader';

export const CourseInfoStyled = styled.section`
	padding: ${({ theme }) => theme.spacing[2]} 0;
`;

export const CourseInfoWrap = styled.div`
	padding: ${({ theme }) => theme.spacing[3]};
	background-color: ${({ theme }) => theme.colors.background.card};
	box-shadow: ${({ theme }) => theme.shadows[0]};
	border-radius: ${({ theme }) => theme.shape.borderRadius.m};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
	position: relative;
`;

export const CourseTitle = styled.h1`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: ${({ theme }) => theme.typography.size.xxxl};
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing[4]};

	&::after {
		content: '';
		position: absolute;
		top: calc(
			100% + ${({ theme }) => theme.spacing[3]} -
				${({ theme }) => theme.spacing[1]}
		);
		left: -${({ theme }) => theme.spacing[3]};
		height: ${({ theme }) => theme.spacing[1]};
		width: 95%;
		border-top-right-radius: ${({ theme }) => theme.shape.borderRadius.s};
		border-bottom-right-radius: ${({ theme }) => theme.shape.borderRadius.s};
		background-color: ${({ theme }) => theme.colors.background.button};
		background-image: linear-gradient(
			-90deg,
			${({ theme }) => theme.colors.white},
			${({ theme }) => theme.colors.accent}
		);

		@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
			width: 90%;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		text-align: center;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		padding: 0 ${({ theme }) => theme.spacing[5]};
	}
`;

export const CourseInfoContent = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[3]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: ${({ theme }) => theme.spacing[3]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		grid-gap: ${({ theme }) => theme.spacing[4]};
	}
`;

export const CourseDetailsWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[3]};

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		gap: ${({ theme }) => theme.spacing[2]};
	}
`;

export const CourseDetails = styled.div`
	display: grid;
	grid-template-columns: ${({ theme }) => theme.spacing[3]} auto;
	gap: ${({ theme }) => theme.spacing[2]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		align-self: flex-start;
	}
`;

export const LinkStyled = styled(Link)`
	position: absolute;
	top: ${({ theme }) => theme.spacing[2]};
	left: ${({ theme }) => theme.spacing[2]};
	font-size: ${({ theme }) => theme.typography.size.s};
`;

export const CourseInfoMessage = styled.div`
	padding: ${({ theme }) => theme.spacing[1]} 0;
	font-size: ${({ theme }) => theme.typography.size.ь};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.accent};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[2]};
`;

export const LoaderStyled = styled(Loader)`
	position: static;
	padding-top: ${({ theme }) => theme.spacing[2]};
	background-color: transparent;
`;
