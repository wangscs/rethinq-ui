export function isAvailable(day, availability) {
	return availability?.find((available) => available.weekday === days[day]);
}

export const days = {
	U: "SUNDAY",
	M: "MONDAY",
	T: "TUESDAY",
	W: "WEDNESDAY",
	TH: "THURSDAY",
	F: "FRIDAY",
	S: "SATURDAY",
};

export const weekdayToNumber = {
	U: 0,
	M: 1,
	T: 2,
	W: 3,
	TH: 4,
	F: 5,
	S: 6,
};

export const timesByTimeframe = {
	morning: [8, 9, 10, 11],
	afternoon: [12, 13, 14, 15],
	evening: [16, 17, 18, 19],
};
