import PropTypes from 'prop-types';

import { LimitedLineContent, LimitedLineStyled } from './LimitedLine.styled';

const LimitedLine = ({ children }) => (
	<LimitedLineStyled>
		<LimitedLineContent>{children}</LimitedLineContent>
	</LimitedLineStyled>
);

export default LimitedLine;

LimitedLine.propTypes = {
	children: PropTypes.element.isRequired,
};
