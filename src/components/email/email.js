
import React from "react";
import "./email.scss";


const Email = ({emailFunc}) => {
  return (
    <span>
      <label  htmlFor="userName"></label>
        <input  className="email"
                type="email" 
                id="userName" 
                name="email"
                onChange={emailFunc}
                minLength="8" required
                placeholder="Email address" 
          />
    </span>
  )
};

export default Email;