import gif from "../content/ralph.gif";
import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Hello developer</h1>
            <img src={gif} />
        </header>
    )
};

export default Header;