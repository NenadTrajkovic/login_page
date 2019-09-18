
import React from "react";
import "./password.scss";


const Password = ({passwordFunc}) => {
  return (
    <span>
      <label  htmlFor="pass"></label>
      <input  className="password"
              type="password" 
              id="pass"
              name="password"
              onChange={passwordFunc}
              minLength="8" required 
              placeholder="Password" 
        />
    </span>
  )
};

export default Password;

