import React, {useEffect, useState}from "react";
import {API_ENDPOINT} from "../constants";



function GrabRequestID(props) {

    /** pass each id into the API_ENDPOINT */
    const [tutorRequestDetails, setTutorRequestDetails] = useState({});
    useEffect(() => {
        const url = `${API_ENDPOINT}/tutor-request/${props.tutorRequestID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTutorRequestDetails(data)
                const url = `${API_ENDPOINT}/users/${idOfStudent}`;
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setStudentDetails(data)
                        console.log('student deta')
                        console.log(studentDetails);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        }, []);

    const courseDetails = tutorRequestDetails.course;
    const tuteeDetails = tutorRequestDetails.tutorCourse;
    // console.log(tuteeDetails);


    const idOfStudent = tuteeDetails && tuteeDetails.id;
    console.log('hey')
    console.log(idOfStudent);
    const [studentDetails, setStudentDetails] = useState({});
    

    return (
            <tr>
                <td>{studentDetails && studentDetails.lastName} </td>
                <td>{studentDetails && studentDetails.firstName}</td>
                <td>{courseDetails && courseDetails.code}</td>
                <td>{studentDetails && studentDetails.email} </td>
            </tr>
    );
}

export default GrabRequestID;