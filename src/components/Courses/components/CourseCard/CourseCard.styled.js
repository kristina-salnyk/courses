import styled from 'styled-components';

export const CourseCardStyled = styled.div`
	padding: ${({ theme }) => theme.spacing[3]};
	background-color: ${({ theme }) => theme.colors.background.card};
	box-shadow: ${({ theme }) => theme.shadows[0]};
	border-radius: ${({ theme }) => theme.shape.borderRadius.m};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[3]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: ${({ theme }) => theme.spacing[2]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		grid-gap: ${({ theme }) => theme.spacing[3]};
	}
`;

export const CourseTitle = styled.h2`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: ${({ theme }) => theme.typography.size.xxl};
	margin-bottom: ${({ theme }) => theme.spacing[2]};
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
	grid-template-columns: 80px auto;
	gap: ${({ theme }) => theme.spacing[1]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		align-self: flex-start;
	}
`;

export const CourseDetailsTitle = styled.span`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const CourseCardButtons = styled.div`
	display: flex;
	flex-wrap: nowrap;
	gap: ${({ theme }) => theme.spacing[1]};
`;
