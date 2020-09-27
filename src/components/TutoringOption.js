import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../constants";
import BookTutorModal from "../modals/BookTutorModal";
import { getRating } from "../utils/getRating";
import { isAvailable } from "../utils/isAvailable";

const TutoringOption = (props) => {
	const [tutor, setTutor] = useState({});
	const [modal, setModal] = useState(null);

	const { id, grade, hourlyRate, rating, ratingCount } = props.tutoringOption;
	const { firstName, lastName, availability } = tutor;
	useEffect(() => {
		const url = `${API_ENDPOINT}/tutor-course/${id}/tutor`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setTutor(data))
			.catch((err) => console.error(err));
	}, []);

	const openBookingModal = (tutoringOptions, availability) => {
		setModal({ tutoringOptions, availability });
	};

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
			<span className='tutoring-session-field session-title--lg'>
				<span
					className={
						isAvailable("U", availability)
							? "availability-open"
							: "availability-closed"
					}>
					U
				</span>
				<span
					className={
						isAvailable("M", availability)
							? "availability-open"
							: "availability-closed"
					}>
					M
				</span>
				<span
					className={
						isAvailable("T", availability)
							? "availability-open"
							: "availability-closed"
					}>
					T
				</span>
				<span
					className={
						isAvailable("W", availability)
							? "availability-open"
							: "availability-closed"
					}>
					W
				</span>
				<span
					className={
						isAvailable("TH", availability)
							? "availability-open"
							: "availability-closed"
					}>
					TH
				</span>
				<span
					className={
						isAvailable("F", availability)
							? "availability-open"
							: "availability-closed"
					}>
					F
				</span>
				<span
					className={
						isAvailable("S", availability)
							? "availability-open"
							: "availability-closed"
					}>
					S
				</span>
			</span>
			<span className='tutoring-session-field'>
				<button
					disabled={modal}
					onClick={() => openBookingModal(props.tutoringOption, availability)}
					className='btn btn-primary text-white'>
					Book Tutor
				</button>
			</span>
			{modal ? <BookTutorModal bookingData={modal} /> : null}
		</div>
	);
};

export default TutoringOption;
