import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid bg-white">
            <div className="container text-center">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on cards to filter by heading or use the search box to narrow your result</p>
            </div>
        </div>
    );
}

export default Header;