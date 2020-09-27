import React from "react";
import { getRating } from "../utils/getRating";

function Avatar(props) {
	return (
		<div>
			<img className='circle-avatar' src={props.imageURL} alt='avatar_img' />
			<div>
				<p className='profile-name'>
					<h2>
						{props.fName} {props.lName}
					</h2>
					Rating: {getRating(props.rating)}
				</p>
			</div>
		</div>
	);
}

export default Avatar;
