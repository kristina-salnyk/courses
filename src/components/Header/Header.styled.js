import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	color: ${({ theme }) => theme.colors.text.secondary};
	background-color: ${({ theme }) => theme.colors.background.secondary};
	box-shadow: ${({ theme }) => theme.shadows[0]};

	& button:hover {
		color: ${({ theme }) => theme.colors.text.secondary};
	}
`;

export const HeaderContent = styled.div`
	padding: ${({ theme }) => theme.spacing[2]} 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Controls = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[2]};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		gap: ${({ theme }) => theme.spacing[3]};
	}
`;
