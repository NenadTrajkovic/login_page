
import React from "react";
import "./formSuccess.scss";

const FormSuccess = () => {
  return (
    <div className="form__success">
      <h1 className="form__success--heading">Thank you for filling out your information</h1>
      <h2 className="form__success--subHeading">Form is now successfully validated</h2>
      <button className="button" onClick={() => window.location.reload(false)}>ENTER</button>
    </div>
  )
}

export default FormSuccess;