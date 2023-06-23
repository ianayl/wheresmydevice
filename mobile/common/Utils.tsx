export type DateDiff = {
	sec: int,
	min: int,
	hour: int,
	day: int,
	week: int,
	year: int
};

export const getDateDiff = (d1: Date, d2: Date): DateDiff => {
	const diff = (d1 >= d2) ? d1 - d2 : d2 - d1;
	return {
		sec: Math.floor(diff / 1000),
		min: Math.floor(diff / (1000 * 60)),
		hour: Math.floor(diff / (1000 * 60 * 60)),
		day: Math.floor(diff / (1000 * 60 * 60 * 24)),
		week: Math.floor(diff / (1000 * 60 * 60 * 24 * 7)),
		year: Math.floor(diff / (1000 * 60 * 60 * 24 * 7 * 52))
	};
}

export const formatLastSeenShort = (lastSeen: Date): string => {
	if (!lastSeen) return "n/a";
	const diff: DateDiff = getDateDiff((new Date()), lastSeen);

	if (diff.year > 0) return `${diff.year}y`;
	else if (diff.week > 0) return `${diff.week}w`;
	else if (diff.day > 0) return `${diff.day}d`;
	else if (diff.hour > 0) return `${diff.hour}h`;
	else if (diff.min > 0) return `${diff.min}m`;
	else if (diff.sec > 0) return `${diff.sec}s`;
	else return "now";
}
