import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { API_ENDPOINT } from "../constants";
import Semicircle from "../img/img1.jpg";

const Login = () => {
	const { login } = useContext(UserContext);

	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const history = useHistory();

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${API_ENDPOINT}/users/login`;
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(credentials),
		};
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				login(data);
				history.push("/profile");
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div className='home-container d-flex flex-row justify-content-between'>
				<div className='home-content-left'>
					<h1 className='display-2'>rethinq</h1>
					<h1 className='display-4'>A new way to find your next tutor.</h1>
					<div className='d-flex flex-column home-button-container'>
						<div className='d-flex flex-row justify-content-around home-button-top-row'>
							<form className='homepage-form' onSubmit={handleSubmit}>
								<div className='form-group'>
									<label>Username</label>
									<input
										type='username'
										id='username'
										className='form-control'
										onChange={handleChange}
									/>
								</div>
								<div className='form-group'>
									<label>Password</label>
									<input
										type='password'
										id='password'
										className='form-control'
										onChange={handleChange}
									/>
								</div>
								<button type='submit' className='btn btn-outline-dark'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='home-content-right'>
					<div className='circle-cont'>
						<img className='semicircle' src={Semicircle} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
