import React from "react";
import {Link} from 'react-router-dom'
import "./style.css";

function Nav()  {
    return (
        <div className = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <a className="navbar-brand" href="/">
                Moses Palacios
            </a>   
            
            <div className="navbar-collapse collapse dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Home">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Projects">Projects</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Contact">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="line"></hr>
        </div>
        
    )
};

export default Nav