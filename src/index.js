import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./css/homepage.css";
import "./css/explore.css";
import "./css/coursecard.css";
import "./css/profile.css";
import { ContextProvider } from "./context/UserContext";

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
