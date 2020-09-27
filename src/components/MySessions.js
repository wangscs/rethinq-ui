import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../constants";

/**
 * My Sessions should be a list of all the tutoring sessions you have made with
 * another student
 *
 * @param {*} props
 */
function listSession(course) {
	return (
		<p>
			<a href={"/course/"}>
				{course.code}
				{course.name}
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
			.then((data) => setCourse(data))
			.catch((err) => console.log(err));
	}, []);
	// console.log(course);

	return (
		<div className='bottom-profile-components'>
			<h3>My Sessions</h3>
			{/* {course.map(listSession(course => course))} */}
			{/* {course && course.map(course => listSession(course))} */}
		</div>
	);
}

export default MySessions;
