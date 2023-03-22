const formKeyPressHandler = (event) => {
	const key = event.charCode || event.keyCode || 0;
	if (key === 13) {
		event.preventDefault();
	}
};

export default formKeyPressHandler;
