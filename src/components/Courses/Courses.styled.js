import styled from 'styled-components';

export const CoursesStyled = styled.section`
	padding: ${({ theme }) => theme.spacing[3]} 0;
`;

export const CoursesHeader = styled.div`
	margin-bottom: ${({ theme }) => theme.spacing[3]};
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[2]};

	@media (max-width: 767px) {
		flex-direction: column;
		align-items: flex-end;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		gap: ${({ theme }) => theme.spacing[3]};
	}
`;

export const CoursesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[3]};
`;

export const CoursesMessage = styled.div`
	padding: ${({ theme }) => theme.spacing[1]} 0;
	font-size: ${({ theme }) => theme.typography.size.ь};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.accent};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[2]};
`;
