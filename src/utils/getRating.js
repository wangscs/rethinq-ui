export function getRating(rate) {
	if (rate < 1 || rate === null) {
		return "☆☆☆☆☆";
	} else if (rate >= 1 && rate < 2) {
		return "⭐☆☆☆☆";
	} else if (rate >= 2 && rate < 3) {
		return "⭐⭐☆☆☆";
	} else if (rate >= 3 && rate < 4) {
		return "⭐⭐⭐☆☆";
	} else if (rate >= 4 && rate < 5) {
		return "⭐⭐⭐⭐☆";
	} else {
		return "⭐⭐⭐⭐⭐";
	}
}
