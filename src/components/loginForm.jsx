 import React from "react";
 import Form from "./commons/form";
 import Joi from 'joi-browser';
 import * as loginService from '../service/loginService';
 
 
 class LoginForm extends Form {

    state = {
        data: { emailId: '', password: ''},
        errors: {}
    };

    schema = {
        emailId: Joi.string().required().label('EmailId'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = async () => {
      try{
        const { data } = this.state;
        const { data: jwt } = await loginService.login(data.emailId, data.password);
        localStorage.setItem("token", jwt);
        window.location = "/";
     } catch (ex) {
          if (ex.response && ex.response.status === 400){
              const errors = { ...this.state.errors};
              errors.emailId = ex.response.data;
              this.setState({ errors });
          }
       }
    };

     render() {
         return (<div>
             <h1>Login</h1>
             <form onSubmit={this.handleSubmit}>
                {this.renderInput('emailId', 'EmailId')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton("Login")}
                
                <p className="forgot-password text-left">
                    Forgot <a href="/forgot_password">password?</a>
                </p>
                
             </form>
         </div>
         );
     }
 }

 export default LoginForm;