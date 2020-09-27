import React, { useState } from "react";
const UserContext = React.createContext();

function ContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loggedInUser, logInUser] = useState({});

	const login = (user) => {
		setLoggedIn(true);
		logInUser(user);
	};

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
