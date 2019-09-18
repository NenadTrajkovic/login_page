import React, { Component } from "react";
import "./loginPage.scss";
import Email from "../components/email/email";
import Password from "../components/password/password";
import Checkbox from "../components/checkbox/checkbox";
import Button from "../components/button/button";


class LoginPage extends Component {

  state = {      
    email: "",      
    password: "",      
    checked: false
  };

  userInputData = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  checkBoxFunc = (e) => {
    const check = e.target.checked;
    this.setState({
      checked: check
    });
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      checked: false
    });
    console.log(` eMail: ${this.state.email} \n password: ${this.state.password} \n Remember me: ${this.state.checked}` );
  }

  render = () => {

    return (
      <div className="wrapper">
        <form className="wrapper__form" onSubmit={this.submit} name="form" >
          <h1 className="wrapper__form--heading">Log into your account</h1>

            <Email emailFunc={this.userInputData} /> 
                    
            <Password passwordFunc={this.userInputData} />
                      
            <Checkbox checked={this.state.checked}
                      toggleChange={this.checkBoxFunc} />

            <Button />

            <a className="wrapper__form--reset" href="#" >Reset your login credentials</a>
        </form>
      </div>
    )
  }
};

export default LoginPage;