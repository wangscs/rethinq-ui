import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { API_ENDPOINT } from "../constants";
import { UserContext } from "../context/UserContext";

function Registration() {
	const { login } = useContext(UserContext);
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
		collegeYear: "",
		gpa: null,
	});
	const history = useHistory();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${API_ENDPOINT}/users/create`;
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		};
		console.log(user);
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				login(data);
				history.push("/profile");
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div className=' pt-5 '>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<div className='card'>
							<div className='card-header'>Register</div>

							<div className='card-body'>
								<form onSubmit={handleSubmit}>
									<div className='form-group row'>
										<label
											for='email'
											className='col-md-4 col-form-label text-md-right'>
											Username
										</label>

										<div className='col-md-6'>
											<input
												id='username'
												type='text'
												className='form-control'
												required
												autofocus
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='form-group row'>
										<label
											for='name'
											className='col-md-4 col-form-label text-md-right'>
											Email
										</label>

										<div className='col-md-6'>
											<input
												id='email'
												type='email'
												className='form-control'
												required
												autofocus
												onChange={handleChange}
											/>
										</div>
									</div>

									<div className='form-group row'>
										<label
											for='firstName'
											className='col-md-4 col-form-label text-md-right'>
											First Name
										</label>

										<div className='col-md-6'>
											<input
												id='firstName'
												type='text'
												className='form-control'
												required
												autofocus
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='form-group row'>
										<label
											for='lastName'
											className='col-md-4 col-form-label text-md-right'>
											Last Name
										</label>

										<div className='col-md-6'>
											<input
												id='lastName'
												type='text'
												className='form-control'
												required
												autofocus
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='form-group row'>
										<label
											for='collegeYear'
											className='col-md-4 col-form-label text-md-right'>
											College Year
										</label>
										<div className='col-md-6'>
											<select
												id='collegeYear'
												className='form-control'
												placeholder='College Year'
												onChange={handleChange}>
												<option value='FRESHMAN'>Freshman</option>
												<option value='SOPHOMORE'>Sophomore</option>
												<option value='JUNIOR'>Junior</option>
												<option value='SENIOR'>Senior</option>
											</select>
										</div>
									</div>

									<div className='form-group row'>
										<label
											for='gpa'
											className='col-md-4 col-form-label text-md-right'>
											GPA
										</label>
										<div className='col-md-6'>
											<input
												id='gpa'
												type='number'
												className='form-control'
												required
												autofocus
												onChange={handleChange}
											/>
										</div>
									</div>

									<div className='form-group row'>
										<label
											for='password'
											className='col-md-4 col-form-label text-md-right'>
											Password
										</label>

										<div className='col-md-6'>
											<input
												id='password'
												type='password'
												className='form-control'
												required
												autofocus
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='form-group row'>
										<label
											for='confirmPassword'
											className='col-md-4 col-form-label text-md-right'>
											Confirm Password
										</label>

										<div className='col-md-6'>
											<input
												id='confirmPassword'
												type='password'
												className='form-control'
												name='confirmPassword'
												required
												autofocus
											/>
										</div>
									</div>

									<div className='form-group'></div>

									<div className='form-group row mb-0'>
										<div className='col-md-8 offset-md-4'>
											<button
												type='submit'
												className='btn btn-outline-primary float-right'>
												rethinq
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registration;
