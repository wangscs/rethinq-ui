import React from "react";

function rating(rate) {
    
    if(rate < 1){
        return "☆☆☆☆☆";
    } else if(rate >= 1 && rate < 2) {
        return "⭐☆☆☆☆";
    } else if(rate >= 2 && rate < 3) {
        return "⭐⭐☆☆☆";
    } else if(rate >= 3 && rate < 4) {
        return "⭐⭐⭐☆☆";
    } else if(rate >= 4 && rate < 5) { 
        return "⭐⭐⭐⭐☆";
    } else {
        return "⭐⭐⭐⭐⭐"
    }
}

function Avatar(props) {
    return (
        <div>
            <img className="circle-avatar" src={props.imageURL} alt="avatar_img" />
            <div>
                <p className="profile-name">
                    <h2>{props.fName} {props.lName}</h2>
                    Rating: {rating(props.rating)}
                </p>
                
            </div>
        </div>
    );
}

export default Avatar;
