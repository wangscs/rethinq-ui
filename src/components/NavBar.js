import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';

function NavBar() {

    const authContext = useContext(AuthContext);
	const {isAuthenticated} = authContext;
    
    if(isAuthenticated){
        return(
            <div className="nav flex flex-row justify-content-between">
                <div className="nav-left d-flex" id="myprofilelink">
                    <Link to='/myprofile'><a href="/#" className="logo-font">My Profile</a></Link>
                </div>
                <div className="nav-right d-flex">
                    <Link to='/teaching'><a href="/#" className="logo-font">Teaching</a></Link>
                    <Link to='/learning'><a href="/#" className="logo-font">Learning</a></Link>
                    <Link to='/courses'><a href="/#" className="logo-font">Courses</a></Link>
                </div>
            </div>
        )
    }
    return (
        <div className="nav flex flex-row justify-content-between">
            <div className="nav-left d-flex">
                <Link to='/'><a href="/#" className="logo-font"
                >Home</a></Link>
            </div>
            <div className="nav-right d-flex">
                <Link to='/teaching'><a href="/#" className="logo-font">Teaching</a></Link>
                <Link to='/learning'><a href="/#" className="logo-font">Learning</a></Link>
                <Link to='/courses'><a href="/#" className="logo-font">Courses</a></Link>
            </div>
        </div>
    );
}

export default NavBar;