const pipeDuration = (totalMinutes) => {
	if (totalMinutes <= 0 || !Number.isInteger(totalMinutes)) return '00:00';

	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}`;
};

export default pipeDuration;
