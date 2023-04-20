import React from 'react';
import PropTypes from 'prop-types';

import { LabelStyled } from './Label.styled';

const Label = ({ id, label, error, required = false }) => (
	<LabelStyled htmlFor={id} isRequired={required} error={error}>
		{label}
	</LabelStyled>
);

export default Label;

Label.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool,
	error: PropTypes.bool.isRequired,
};
