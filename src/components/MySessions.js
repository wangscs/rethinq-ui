import React, { useEffect, useState } from "react";
import MySessionsDetails from "./MySessionsDetails"

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

function MySessions(props) {

	const tutoringRequested = props.userTutorRequestReceived;
	console.log(tutoringRequested);

	return (
		<div className='bottom-profile-components'>
			<h3>My Sessions</h3>
			{tutoringRequested && tutoringRequested.map(tutoringRequestedItem => (
                <MySessionsDetails 
                    key={tutoringRequestedItem.id}
                    tutoringRequestedID={tutoringRequestedItem.id}
                />
            ))}
		</div>
	);
}

export default MySessions;
