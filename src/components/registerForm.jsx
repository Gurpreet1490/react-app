import React from "react";
 import Form from "./commons/form";
 import Joi from 'joi-browser';
 import * as userService from '../service/userService';

 class RegisterForm extends Form {

    state = {
        data: { firstName: '', lastName: '', emailId: '', password: ''},
        errors: {}
    };

    schema = {
        firstName: Joi.string().required().label('FirstName'),
        lastName: Joi.string().required().label('LastName'),
        emailId: Joi.string().required().label('EmailId'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = async () => {
        //call the server
        await userService.register(this.state.data)
        //console.log("Submitted");

        try{
            const { data } = this.state;
            const { data: jwt } = await userService.register(data.emailId, data.password);
            localStorage.setItem("token", jwt);
            window.location = "/";
         } catch (ex) {
              if (ex.response && ex.response.status === 400){
                  const errors = { ...this.state.errors};
                  errors.emailId = ex.response.data;
                  this.setState({ errors });
              }
           }
    }

     render() {
         return (<div>
             <h1>Register</h1>
             <form onSubmit={this.handleSubmit}>
                {this.renderInput('firstName', 'FirstName')}
                {this.renderInput('lastName', 'LastName')}
                {this.renderInput('emailId', 'EmailId')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton("Register")}
                <p className="forgot-password text-left">
                    Already registered <a href="/login">login?</a>
                </p>
             </form>
         </div>
         );
     }
 }

 export default RegisterForm;