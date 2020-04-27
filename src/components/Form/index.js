import React from "react";
import {Link} from "react-router-dom"



export function NameInput(props) {
    return (
        <div className = "form-group" {...props}>
            <label for="namefield" >Please Enter Your Name</label>
            <input type="text" className= "form-control" id="namefield" placeholder="Full Name" />
        </div>
    )
};

export function EmailInput(props) {
    return (
        <div className = "form-group" {...props}>
            <label for="emailfield" >Email Address</label>
            <input type="email" className= "form-control" id="emailfield" placeholder="Your Email" />
        </div>
    )
};

export function TextArea(props) {
    return (
        <div className = "form-group" {...props}>
            <label for="messagefield" >Please enter your message below</label>
            <textarea className= "form-control" id="messagefield" rows="5" placeholder="Your Message" />
        </div>
    )
};

export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success" type="submit">
        <Link to = "/" style={{color: "white"}} >
        {props.children}
        </Link> 
      </button>
    );
  };
