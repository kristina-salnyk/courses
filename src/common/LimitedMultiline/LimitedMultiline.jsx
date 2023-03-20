import PropTypes from 'prop-types';

import {
	LimitedLineContent,
	LimitedMultilineStyled,
} from './LimitedMultiline.styled';

const LimitedMultiline = ({ lines, children, className }) => (
	<LimitedMultilineStyled className={className}>
		<LimitedLineContent lines={lines}>{children}</LimitedLineContent>
	</LimitedMultilineStyled>
);

export default LimitedMultiline;

LimitedMultiline.propTypes = {
	lines: PropTypes.number.isRequired,
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
};
