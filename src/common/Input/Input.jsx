import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { Label } from '../Label';

import { InputStyled, InputWrap } from './Input.styled';

const Input = ({
	label,
	required,
	type,
	min,
	value,
	error = false,
	placeholder,
	onChange,
	className,
}) => {
	const id = uuid();

	return (
		<InputWrap className={className}>
			<InputStyled
				id={id}
				type={type}
				min={min}
				value={value}
				error={error}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{label && (
				<Label id={id} label={label} required={required} error={error} />
			)}
		</InputWrap>
	);
};

export default Input;

Input.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	type: PropTypes.string.isRequired,
	min: PropTypes.number,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	error: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
};
