import React, {useEffect, useState, useContext} from "react";
import Avatar from "./Avatar";
import CoursesOffered from "./CoursesOffered";
import MySessions from "./MySessions";
import NowTaking from "./NowTaking";
import {API_ENDPOINT} from "../constants";
import { UserContext } from "../context/UserContext";

/** Hardcoded stuff that needs to be retrieved from db */
const imageURL = "https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";

function Profile() {

    // /** Magic stuff that connects to backend */
    // const [user, setUser] = useState({});
    // useEffect(() => {
    //     const url = `${API_ENDPOINT}/users/2`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //         .catch(error => console.log(error))
    // }, []);
    // console.log(user);
    
    const { loggedIn, loggedInUser } = useContext(UserContext);
    // console.log("ajnsdkjanskdjnaskdjnasd")
    // console.log(loggedInUser);

    return (
        <div className="profile">
            <div className="top-profile">
                <Avatar 
                    imageURL={imageURL}
                    fName={loggedInUser.firstName}
                    lName={loggedInUser.lastName}
                    rating={loggedInUser.gpa}
                />
            </div>
            <div className="bottom-profile">
                <CoursesOffered 
                    myCourses={loggedInUser.myCourses}
                />
                <MySessions />
                <NowTaking />
            </div>
        </div>
    )
}

export default Profile;