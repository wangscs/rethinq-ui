import React, {useEffect, useState} from "react";
import {API_ENDPOINT} from "../constants";

function CourseOffDetails(props) {

   /** Magic stuff that connects to backend */
	const [courseDetails, setCourseDetails] = useState({});
	useEffect(() => {
	    const url = `${API_ENDPOINT}/courses/${props.courseID}`;
	    fetch(url)
	        .then(res => res.json())
	        .then(data => setCourseDetails(data))
	        .catch(error => console.log(error))
    }, []);

    return <p>{courseDetails && courseDetails.code} | {courseDetails && courseDetails.name}</p>;

}

export default CourseOffDetails;