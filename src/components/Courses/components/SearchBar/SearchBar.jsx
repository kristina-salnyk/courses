import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Button } from '../../../../common/Button';
import { SEARCH_BAR_INPUT, SEARCH_BTN } from '../../../../constants';

import { InputStyled, SearchBarStyled } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value) return;
		onSubmit(value);
	}, [value, onSubmit]);

	return (
		<SearchBarStyled
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit(value);
			}}
		>
			<InputStyled
				type={SEARCH_BAR_INPUT.type}
				value={value}
				placeholder={SEARCH_BAR_INPUT.placeholder}
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
			<Button type={SEARCH_BTN.type} text={SEARCH_BTN.text} />
		</SearchBarStyled>
	);
};

export default SearchBar;

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
