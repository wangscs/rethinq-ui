import React, {useEffect, useState, useContext}from "react";
import Avatar from "./Avatar";
import ListStudent from "./ListStudent"
import {API_ENDPOINT} from "../constants";
import { UserContext } from "../context/UserContext";

const testing = [
    {
        id: 1,
        imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/001/505/717/49b.jpg",
        rating: 5,
    }
]

function Teaching() {

    // /** Magic stuff that connects to backend */
    // const [user, setUser] = useState({});
    // useEffect(() => {
    //     const url = `${API_ENDPOINT}/users/1`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //         .catch(error => console.log(error))
    // }, []);
    // console.log(user);
    const { loggedIn, loggedInUser } = useContext(UserContext);

    console.log(loggedInUser);
    return (
        <div className="">
            <div>
                <Avatar 
                    imageURL={testing[0].imageURL}
                    fName={loggedIn.firstName}
                    lName={loggedIn.lastName}
                    rating={loggedIn.gpa}
                />
            </div>
            <div>
                <ListStudent 
                    myStudent={loggedIn.tutorRequestsReceived}
                />
            </div>
        </div>
    );
}

export default Teaching;