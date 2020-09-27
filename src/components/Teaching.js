import React, {useEffect, useState}from "react";
import Avatar from "./Avatar";
import ListStudent from "./ListStudent"
import {API_ENDPOINT} from "../constants";

const testing = [
    {
        id: 1,
        imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/001/505/717/49b.jpg",
        rating: 5,
    }
]

function Teaching() {

    /** Magic stuff that connects to backend */
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `${API_ENDPOINT}/users/1`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.log(error))
    }, []);
    console.log(user);

    return (
        <div className="">
            <div>
                <Avatar 
                    imageURL={testing[0].imageURL}
                    fName={user.firstName}
                    lName={user.lastName}
                    rating={user.gpa}
                />
            </div>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Next Session</th>
                        <th>Session Length</th>
                        <th>Sessions Left</th>
                    </tr>
                    <ListStudent 
                        myStudent={user.myCourses}
                    />
                </table>
            </div>
        </div>
    );
}

export default Teaching;