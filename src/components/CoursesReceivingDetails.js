import React, {useEffect, useState} from "react";
import {API_ENDPOINT} from "../constants";

function CoursesReceivingDetails(props) {

    // console.log(props.tutoringSentID);
    /** Magic stuff that connects to backend */
    const [tutoringSent, tutoringSentDetails] = useState({});
    useEffect(() => {
        const url = `${API_ENDPOINT}/tutor-request/${props.tutoringSentID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                tutoringSentDetails(data)
            })
            .catch(error => console.log(error))
    }, []);
    // console.log(tutoringSent.course);
    // console.log(tutoringSent.tutorCourse);

    const courseName = tutoringSent.course;

    return <p>{courseName && courseName.code} | {courseName && courseName.name}</p>;

}

export default CoursesReceivingDetails;