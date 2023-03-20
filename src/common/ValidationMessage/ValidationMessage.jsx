import PropTypes from 'prop-types';

import { ValidationMessageStyled } from './ValidatiionMessage.styled';

const ValidationMessage = ({ message }) => {
	return (
		<ValidationMessageStyled lines={2}>
			<span title={message}>{message}</span>
		</ValidationMessageStyled>
	);
};

export default ValidationMessage;

ValidationMessage.propTypes = {
	message: PropTypes.string.isRequired,
};
