
import React from "react";
import "./password.scss";


const Password = ({password_input, passwordFunc}) => {
  return (
    <span>
      <label  htmlFor="pass"></label>
      <input  className="password"
              type="password" 
              id="pass"
              value={password_input}
              onChange={passwordFunc}
              required 
              placeholder="Password" 
        />
    </span>
  )
};

export default Password;

