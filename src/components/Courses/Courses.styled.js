import styled from 'styled-components';

export const CoursesStyled = styled.section`
	padding: ${({ theme }) => theme.spacing[3]} 0;
`;

export const ToolBar = styled.div`
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
