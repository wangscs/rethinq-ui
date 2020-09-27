import React, { useState, useEffect } from "react";
const UserContext = React.createContext();

function ContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loggedInUser, setLogInUser] = useState({});

	const login = (user) => {
		setLoggedIn(true);
		setLogInUser(user);
	};

	useEffect(() => {
		//pull from local storage
		localStorage.getItem("currentUser") &&
			setLogInUser(JSON.parse(localStorage.getItem("currentUser")));
		localStorage.getItem("loggedIn") &&
			setLoggedIn({
				loggedInStatus: JSON.parse(localStorage.getItem("loggedIn")),
			});
		console.log(loggedIn);
	}, []);

	console.log("user", loggedInUser);
	useEffect(() => {
		//save to local storage
		localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
		localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
		localStorage.setItem("stateTime", Date.now()); //time-stamp
	}, [loggedIn, loggedInUser]);

	return (
		<UserContext.Provider
			value={{
				loggedIn,
				loggedInUser,
				login,
			}}>
			{children}
		</UserContext.Provider>
	);
}

export { ContextProvider, UserContext };
