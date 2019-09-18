
import React from "react";
import "./checkbox.scss";


const Checkbox = ({checked, toggleChange}) => {
  return (
    <span className="checkbox">   
      <input  type="checkbox"
              id="rememberMe"
              name="form"
              checked={checked}
              onChange={toggleChange}
        />
      <label  htmlFor="rememberMe">
        Remember me
      </label>
    </span>
  )
};

export default Checkbox;

