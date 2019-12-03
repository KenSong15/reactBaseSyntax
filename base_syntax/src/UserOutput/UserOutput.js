import React from "react";
import "./UserOutput.css";

const userOutput = props => {
    return (
        <>
            <div className="UserOutput">
                <p>some random text</p>
                <p>I will be overwritten</p>
                <p>{props.username}</p>
            </div>
        </>
    );
};

export default userOutput;
