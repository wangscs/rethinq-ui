import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../constants";
import { getRating } from "../utils/getRating";

const TutoringOption = (props) => {
	const [tutor, setTutor] = useState({});
	const { id, grade, hourlyRate, rating, ratingCount } = props.tutoringOption;
	const { firstName, lastName } = tutor;
	useEffect(() => {
		const url = `${API_ENDPOINT}/tutor-course/${id}/tutor`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setTutor(data))
			.catch((err) => console.error(err));
	}, []);
	//     grade: "A"
	// hourlyRate: 20
	// id: 2
	// rating: null
	// ratingCount: null
	return (
		<div className='tutoring-session-fields'>
			<span className='tutoring-session-field'>
				{firstName} {lastName}
			</span>
			<span className='tutoring-session-field'>
				{getRating(rating)} ({ratingCount ? ratingCount : 0})
			</span>
			<span className='tutoring-session-field'>{grade}</span>
			<span className='tutoring-session-field'>${hourlyRate}</span>
			<span className='tutoring-session-field'>
				<button class='btn btn-primary text-white'>Book Tutor</button>
			</span>
		</div>
	);
};

export default TutoringOption;
