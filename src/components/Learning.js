import React, {useContext} from "react";
import Avatar from "./Avatar";
import ListLearning from "./ListLearning";
import { UserContext } from "../context/UserContext";

    
const imageURL = "https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";
    
function Learning() {
    
    const { loggedIn, loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="teachingPage">
            <div>
                <Avatar 
                    imageURL={imageURL}
                    fName={loggedInUser.firstName}
                    lName={loggedInUser.lastName}
                    rating={loggedInUser.gpa}
                />
            </div>
            <div className="myStudents-table">
                <h2>My Tutors</h2>
                <ListLearning 
                    userTutorRequestsSent={loggedInUser.tutorRequestsSent}
                />
            </div>
        </div>
    );
}

export default Learning;