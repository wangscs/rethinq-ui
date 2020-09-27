import React, { useEffect, useState } from "react";

import { API_ENDPOINT } from "../constants";

/** This be hard coded, make it pull from db */
const myStudentDatabase = [
	{
		key: 1,
		tutorName: "Griffin P",
		courseCode: "MAD",
		courseNumber: "101",
	},
	{
		key: 2,
		tutorName: "Griffin P",
		courseCode: "CAS",
		courseNumber: "4802",
	},
	{
		key: 3,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
	{
		key: 4,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
	{
		key: 5,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
	{
		key: 6,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
	{
		key: 7,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
	{
		key: 8,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
	{
		key: 9,
		tutorName: "Griffin P",
		courseCode: "COT",
		courseNumber: "2833",
	},
];

function createMySession(props) {
	return (
		<p>
			<a href={"/course/" + props.courseCode + props.courseNumber}>
				{props.tutorName}. - {props.courseCode}
				{props.courseNumber}
			</a>
		</p>
	);
}

function MySessions() {
	const [course, setCourse] = useState({});
	useEffect(() => {
		const url = `${API_ENDPOINT}/courses/2`;
		fetch(url)
			.then((res) => res.json())
			.then((data2) => setCourse(data2))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='bottom-profile-components'>
			<h3>My Sessions</h3>
			<p>{myStudentDatabase.map(createMySession)}</p>
		</div>
	);
}

export default MySessions;
