import React, { useState, useContext } from "react";
import {
	isAvailable,
	weekdayToNumber,
	days,
	timesByTimeframe,
} from "../utils/isAvailable";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { UserContext } from "../context/UserContext";
import { API_ENDPOINT } from "../constants";

const BookTutorModal = (props) => {
	const { availability, tutoringOptions } = props.bookingData;
	const [selectedDay, setDay] = useState(null);
	const [bookedDate, setBookedDate] = useState(null);
	const [timeframe, setTimeframe] = useState(null);
	const [bookTutorData, setBookTutorData] = useState({});
	const { loggedInUser } = useContext(UserContext);
	const history = useHistory();

	const selectDay = (day) => {
		console.log("Selected", day);
		setDay(day);
	};

	const getNextThreeAvailableDays = () => {
		const bookingDay = weekdayToNumber[selectedDay];
		const today = moment().isoWeekday();
		let availability1;
		if (today <= bookingDay) {
			availability1 = moment().isoWeekday(bookingDay);
			// console.log("this week", availability1.format("MM/DD/YYYY"));
		} else {
			availability1 = moment().isoWeekday(bookingDay).add("days", 7);
			// console.log("next week", availability1.format("MM/DD/YYYY"));
		}
		const availability2 = moment(availability1).add("days", 7);
		const availability3 = moment(availability1).add("days", 14);
		return [availability1, availability2, availability3];
	};

	const getAvailableTimes = () => {
		const day = availability.find(
			(available) => available.weekday === days[selectedDay]
		);
		return {
			morning: day.morning,
			afternoon: day.afternoon,
			evening: day.evening,
		};
	};
	const availableTimes = bookedDate ? getAvailableTimes() : null;

	const handleChange = (e) => {
		setBookTutorData({ ...bookTutorData, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${API_ENDPOINT}/tutor-request/${tutoringOptions.id}/for=${loggedInUser.id}`;
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(bookTutorData),
		};
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				history.push("/profile");
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className='book-tutor-modal'>
			<h1 className='text-center display-5 logo-font'>Book your session</h1>
			<h3 className='text-center display-5 booking-header'>
				Select preferred weekday
			</h3>
			<div className='booking-availability'>
				<button
					className={
						isAvailable("U", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("U", availability) ? selectDay("U") : null
					}>
					U
				</button>

				<button
					className={
						isAvailable("M", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("M", availability) ? selectDay("M") : null
					}>
					M
				</button>
				<button
					className={
						isAvailable("T", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("T", availability) ? selectDay("T") : null
					}>
					T
				</button>
				<button
					className={
						isAvailable("W", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("W", availability) ? selectDay("W") : null
					}>
					W
				</button>
				<button
					className={
						isAvailable("TH", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("TH", availability) ? selectDay("TH") : null
					}>
					TH
				</button>
				<button
					className={
						isAvailable("F", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("F", availability) ? selectDay("F") : null
					}>
					F
				</button>
				<button
					className={
						isAvailable("S", availability)
							? "availability-open"
							: "availability-closed"
					}
					onClick={() =>
						isAvailable("S", availability) ? selectDay("S") : null
					}>
					S
				</button>
			</div>
			{selectedDay ? (
				<div className='next-three-days'>
					<h3 className='text-center display-6 booking-header header-xsmall'>
						Here are the next 3 available dates on{" "}
						{days[selectedDay].charAt(0) +
							days[selectedDay].slice(1).toLowerCase()}
					</h3>
					<div className='date-display'>
						{getNextThreeAvailableDays().map((date) => (
							<button
								className='available-day'
								onClick={() => setBookedDate(date.format("MM/DD/YYYY"))}>
								{date.format("MM/DD/YYYY")}
							</button>
						))}
					</div>
				</div>
			) : null}

			{availableTimes && (
				<div>
					<h3 className='text-center display-5 booking-header'>
						Which time of day would you prefer?
					</h3>
					<div className='available-times'>
						<button
							className={
								availableTimes.morning
									? "availability-open"
									: "availability-closed"
							}
							disabled={!availableTimes.morning}
							onClick={() => setTimeframe("morning")}>
							Morning
						</button>
						<button
							className={
								availableTimes.afternoon
									? "availability-open"
									: "availability-closed"
							}
							disabled={!availableTimes.afternoon}
							onClick={() => setTimeframe("afternoon")}>
							Afternoon
						</button>
						<button
							className={
								availableTimes.evening
									? "availability-open"
									: "availability-closed"
							}
							disabled={!availableTimes.evening}
							onClick={() => setTimeframe("evening")}>
							Evening
						</button>
					</div>
				</div>
			)}
			{timeframe ? (
				<div className='session-time'>
					<select
						id='time'
						className='select-session-time'
						onChange={handleChange}>
						{timesByTimeframe[timeframe].map((hour) => (
							<option value={hour}>
								{hour === 12
									? "12pm"
									: hour <= 12
									? `${hour}am`
									: `${hour - 12}pm`}
							</option>
						))}
					</select>
					<input
						id='hours'
						type='number'
						placeholder='How many hours'
						className='select-session-hours'
						onChange={handleChange}
					/>
				</div>
			) : null}
			{bookTutorData.time && bookTutorData.hours && (
				<button className='btn btn-primary text-white' onClick={handleSubmit}>
					Submit
				</button>
			)}
		</div>
	);
};

export default BookTutorModal;
