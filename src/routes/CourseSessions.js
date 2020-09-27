import React, { useEffect, useState } from "react";
import TutoringOption from "../components/TutoringOption";
import { API_ENDPOINT } from "../constants";

const CourseSessions = (props) => {
	const { courseId } = props.match.params;
	const [course, setCourse] = useState({});

	useEffect(() => {
		const url = `${API_ENDPOINT}/courses/${courseId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCourse(data))
			.catch((err) => console.error(err));
	});
	return (
		<div className='container explore-container'>
			<h1 className='text-center display-1 logo-font header-medium'>
				Book a Tutoring Session
			</h1>

			<h2 className='text-left display-4 logo-font header-small mg-top-md'>
				<strong className='header-bold'>{course.code}</strong>: {course.name}
			</h2>

			<h1 className='text-center display-5 logo-font mg-top-lg'>
				Available Tutors
			</h1>
			<div className='tutoring-session-titles'>
				<span className='tutoring-session-title'>Name</span>
				<span className='tutoring-session-title'>Rating</span>
				<span className='tutoring-session-title'>Course Grade</span>
				<span className='tutoring-session-title'>Hourly Rate</span>
				<span className='tutoring-session-title session-title--lg'>Availability</span>
				<span className='tutoring-session-title'></span>
			</div>
			{course?.tutoringOptions?.map((tutoringOption) => (
				<TutoringOption
					tutoringOption={tutoringOption}
					key={tutoringOption.id}
				/>
			))}
		</div>
	);
};

export default CourseSessions;
