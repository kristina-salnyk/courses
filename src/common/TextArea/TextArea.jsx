import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { Label } from '../Label';

import { TextAreaStyled, TextAreaWrap } from './TextArea.styled';

const TextArea = ({
	label,
	required,
	rows,
	value,
	error = false,
	placeholder,
	onChange,
	className,
}) => {
	const id = uuid();

	return (
		<TextAreaWrap className={className}>
			<TextAreaStyled
				id={id}
				rows={rows}
				value={value}
				error={error}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{label && (
				<Label id={id} label={label} required={required} error={error} />
			)}
		</TextAreaWrap>
	);
};

export default TextArea;

TextArea.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	rows: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	error: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
};
