import React from 'react';

function Registration() {
    return (
        <div>
            {/* <img src=""/> */}
        <div className=" pt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>
        
                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                
                            <div className="form-group row">
                                    <label for="email" className="col-md-4 col-form-label text-md-right">Username</label>
        
                                    <div className="col-md-6">
                                        <input id="username" type="username" className="form-control" name="username" required autocomplete="username" autofocus/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="name" className="col-md-4 col-form-label text-md-right">Email</label>
        
                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" required autocomplete="email" autofocus/>
        
                                    </div>
                                </div>
        
                            <div className="form-group row">
                                    <label for="name" className="col-md-4 col-form-label text-md-right">First Name</label>
        
                                    <div className="col-md-6">
                                        <input id="fname" type="fname" className="form-control" name="fname" required autocomplete="given-name" autofocus/>
        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="lname" className="col-md-4 col-form-label text-md-right">Last Name</label>
        
                                    <div className="col-md-6">
                                        <input id="lname" type="lname" className="form-control" name="lname" required autocomplete="family-name" autofocus/>
        
                                    </div>
                                </div>
        
                                <div className="form-group row">
                                    <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
        
                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control" name="password" required autocomplete="current-password" autofocus/>
        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="confirmPassword" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
        
                                    <div className="col-md-6">
                                        <input id="confirmPassword" type="confirmPassword" className="form-control" name="confirmPassword" required autocomplete="current-password" autofocus/>
        
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