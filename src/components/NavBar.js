import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function NavBar() {
	const { loggedIn } = useContext(UserContext);

	return (
		<div className='nav flex flex-row justify-content-between'>
			<div className='nav-left d-flex'>
				{loggedIn ? (
					<Link to='/profile' className='logo-font'>
						<a href='/#'>Profile</a>
					</Link>
				) : (
					<Link to='/' className='logo-font'>
						<a href='/#'>Home</a>
					</Link>
				)}
			</div>
			<div className='nav-right d-flex'>
				<Link to='/teaching'>
					<a href='/#' className='logo-font'>
						Teaching
					</a>
				</Link>
				<Link to='/learning'>
					<a href='/#' className='logo-font'>
						Learning
					</a>
				</Link>
				<Link to='/courses'>
					<a href='/#' className='logo-font'>
						Courses
					</a>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
