import React, {useEffect, useState} from "react";
import {API_ENDPOINT} from "../constants"



function MySessionsDetails(props) {

    console.log(props.tutoringRequestedID);
    /** Magic stuff that connects to backend */
    const [tutoringRequested, tutoringRequestedDetails] = useState({});
    useEffect(() => {
        const url = `${API_ENDPOINT}/tutor-request/${props.tutoringRequestedID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                tutoringRequestedDetails(data)
            })
            .catch(error => console.log(error))
    }, []);
    console.log(tutoringRequested.course);
    console.log(tutoringRequested.tutorCourse);

    const courseName = tutoringRequested.course;


    return <p>{courseName && courseName.code} | {courseName && courseName.name}</p>;
}
export default MySessionsDetails;