const dateGenerator = () => {
	const date = new Date();
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export default dateGenerator;
