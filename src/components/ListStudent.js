import React, {useEffect, useState}from "react";
import GrabRequestID from "./GrabRequestID";



function ListStudent(props) {

    const arrayOfObjRequestReceived = props.userTutorRequestsReceived;
    console.log(arrayOfObjRequestReceived);
    // const arrayOfRequestIDs = arrayOfObjRequestReceived && arrayOfObjRequestReceived.map(tutorRequest => tutorRequest.id);
    // console.log(arrayOfRequestIDs);
    
    return (
        <div>
            <table>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Course</th>
                    <th>Email</th>
                </tr>
                {arrayOfObjRequestReceived && arrayOfObjRequestReceived.map( tutorRequest => (
                    <GrabRequestID
                        key={tutorRequest.id}
                        tutorRequestID={tutorRequest.id}
                    />
                ))}
            </table>
        </div>
    );
}

export default ListStudent;