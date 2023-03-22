import styled from 'styled-components';

export const ContainerStyled = styled.div`
	margin: 0 auto;
	padding: 0 ${({ theme }) => theme.spacing[2]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		padding: 0 ${({ theme }) => theme.spacing[3]};
		max-width: ${({ theme }) => theme.breakpoints.tablet[0]};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		max-width: ${({ theme }) => theme.breakpoints.desktop};
	}
`;
