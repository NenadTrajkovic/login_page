import React, { Component } from "react";
import "./loginPage.scss";
import Email from "../components/email/email";
import Password from "../components/password/password";
import Checkbox from "../components/checkbox/checkbox";
import Button from "../components/button/button";
import FormSuccess from "../components/formSuccess/formSuccess";


class LoginPage extends Component {

  state = {      
    email: "",      
    password: "",      
    checked: false,
    submited: false
  };

  emailFunc = (e) => {
    const input = e.target.value.trim();
    this.setState({
      email: input
    });
  }

  passwordFunc = (e) => {
    const input = e.target.value.trim();
    this.setState({
      password: input
    });
  }

  checkBoxFunc = (e) => {
    const check = e.target.checked;
    this.setState({
      checked: check
    });
  }
  
  validate = (email, password) => { 
    return {  
      email: email.length === 0, 
      password: password.length === 0 
    };
  }

  reset = () => {
    this.setState({
      email: "",
      password: "",
      checked: false
    });
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      checked: false,
      submited: true
    });
    console.log(` eMail: ${this.state.email} \n password: ${this.state.password} \n Remember me: ${this.state.checked}` );
  }

  render = () => {
  
    const errors = this.validate(this.state.email, this.state.password);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);

  return (
    <div className="wrapper">
      <form className="form" onSubmit={this.submit} name="form" noValidate>
        <h1 className="form__heading">Log into your account</h1>

          <Email  email_input={this.state.email}
                  emailFunc={this.emailFunc}
          /> 
                  
          <Password password_input={this.state.password}
                    passwordFunc={this.passwordFunc}
          />
                    
          <Checkbox checked={this.state.checked}
                    toggleChange={this.checkBoxFunc} />

          { this.state.submited ? <FormSuccess /> : false }

          <Button disabled={!isEnabled} />

          <p className="form__reset" onClick={this.reset}>Reset your login credentials</p>
      </form>
    </div>
  )}
};

export default LoginPage;