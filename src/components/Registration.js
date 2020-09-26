import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { useHistory } from 'react-router-dom';

function Registration(props) {

	const authContext = useContext(AuthContext);
	let history = useHistory();

    const [ user, setUser ] = useState({
        username: '',
		email: '',
        fname:'',
        lname:'',
		password: '',
		confirmPassword: ''
    });

    
	const { email, username, password, fname, lname } = user;
	const { register, error, isAuthenticated } = authContext;
    
    useEffect(
		() => {
			if (isAuthenticated) {
				history.push('/courses');
			}

			if (error === 'User already exists') {
			}
		},[ error, isAuthenticated, props.history ]// eslint-disable-line react-hooks/exhaustive-deps
    );

    const handleChange = (event) => {
		event.persist();
		setUser((user) => ({
			...user,
			[event.target.id]: event.target.value
		}));
    };
    
    const handleSubmit = (event) => {
		event.preventDefault();
		register({ email, username, password, fname, lname });
	};
    
    return (
        <div>
            {/* <img src=""/> */}
        <div className=" pt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>
        
                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}" onSubmit={handleSubmit}>
                                
                            <div className="form-group row">
                                    <label for="email" className="col-md-4 col-form-label text-md-right">Username</label>
        
                                    <div className="col-md-6">
                                        <input id="username" type="username" className="form-control" name="username" required autocomplete="username" value={user.username} onChange={handleChange} autofocus/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="name" className="col-md-4 col-form-label text-md-right">Email</label>
        
                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" required autocomplete="email" value={user.email} onChange={handleChange} autofocus/>
        
                                    </div>
                                </div>
        
                            <div className="form-group row">
                                    <label for="name" className="col-md-4 col-form-label text-md-right">First Name</label>
        
                                    <div className="col-md-6">
                                        <input id="fname" type="fname" className="form-control" name="fname" required autocomplete="given-name" value={user.fname} onChange={handleChange} autofocus/>
        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="lname" className="col-md-4 col-form-label text-md-right">Last Name</label>
        
                                    <div className="col-md-6">
                                        <input id="lname" type="lname" className="form-control" name="lname" required autocomplete="family-name" value={user.lname} onChange={handleChange} autofocus/>
        
                                    </div>
                                </div>
        
                                <div className="form-group row">
                                    <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
        
                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control" name="password" required autocomplete="current-password" value={user.password} onChange={handleChange} autofocus/>
        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="confirmPassword" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
        
                                    <div className="col-md-6">
                                        <input id="confirmPassword" type="confirmPassword" className="form-control" name="confirmPassword" required autocomplete="current-password" value={user.confirmPassword} onChange={handleChange} autofocus/>
        
                                    </div>
                                </div>
        
        
                                <div className="form-group">
                                </div>
        
                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-outline-primary float-right">
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