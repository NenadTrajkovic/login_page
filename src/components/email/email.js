
import React from "react";
import "./email.scss";


const Email = ({email_input, emailFunc}) => {
  return (
    <span>
      <label  htmlFor="userName"></label>
        <input  className="email"
                type="email" 
                id="userName" 
                value={email_input}
                onChange={emailFunc}
                required
                placeholder="Email address" 
          />
    </span>
  )
};

export default Email;