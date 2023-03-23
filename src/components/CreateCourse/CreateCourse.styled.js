import styled from 'styled-components';

export const CreateCourseStyled = styled.section`
	padding: ${({ theme }) => theme.spacing[2]} 0;
`;

export const CreateCourseForm = styled.form`
	padding: ${({ theme }) => theme.spacing[3]};
	background-color: ${({ theme }) => theme.colors.background.card};
	box-shadow: ${({ theme }) => theme.shadows[0]};
	border-radius: ${({ theme }) => theme.shape.borderRadius.m};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
`;

export const TopGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[2]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		gap: ${({ theme }) => theme.spacing[3]};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column-reverse;
		align-items: stretch;

		& > button {
			align-self: flex-end;
		}
	}
`;

export const CourseDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[3]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: ${({ theme }) => theme.spacing[3]};
	}
`;

export const GroupTitle = styled.h2`
	font-size: ${({ theme }) => theme.typography.size.m};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	text-align: center;
`;

export const CourseDetailsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};

	& > button {
		align-self: center;
	}
`;

export const DurationGroup = styled(CourseDetailsGroup)`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		order: 4;
	}
`;

export const AuthorsStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[1]};
	max-height: 170px;
	overflow-y: auto;
`;

export const Author = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Duration = styled.span`
	font-size: ${({ theme }) => theme.typography.size.l};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const FieldWrap = styled.div`
	margin-bottom: ${({ theme }) => theme.spacing[2]};
	position: relative;
`;

export const FieldWrapStyled = styled(FieldWrap)`
	flex-grow: 1;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		max-width: 500px;
	}
`;

export const InfoMessage = styled.p`
	padding: ${({ theme }) => theme.spacing[1]} 0;
	font-size: ${({ theme }) => theme.typography.size.s};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.accent};
	text-align: center;
`;
