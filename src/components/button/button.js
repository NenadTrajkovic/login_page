import React from "react";
import "./button.scss";


const Button = ({disabled}) => {
  return (
    <button className="button" 
            disabled={disabled}
            >Login</button>
  )
};

export default Button;