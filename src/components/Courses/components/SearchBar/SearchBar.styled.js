import styled from 'styled-components';

import { Input } from '../../../../common/Input';

export const SearchBarStyled = styled.form`
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1]};
`;

export const InputStyled = styled(Input)`
	flex-grow: 1;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
		max-width: 500px;
	}
`;
