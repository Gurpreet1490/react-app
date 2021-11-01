import React from "react";
import Form from "./commons/form";
import Joi from 'joi-browser';
import * as resetService from '../service/resetService';


class ResetForm extends Form {

   state = {
       data: { password: '', confirmPassword: ''},
       errors: {}
   };

   schema = {
       password: Joi.string().required().label('Password'),
       confirmPassword: Joi.string().required().label('Confirm Password')
   };

   doSubmit = async () => {
     try{
       const { data } = this.state;
       //const { data: jwt } =
        await resetService.reset(data.password, data.confirmPassword);
       //localStorage.setItem("token", jwt);
       
    } catch (ex) {
         if (ex.response && ex.response.status === 400){
             const errors = { ...this.state.errors};
             errors.password = ex.response.data;
             this.setState({ errors });
         }
      }
   };

    render() {
        return (<div>
            <h1>Reset Password</h1>
            <form onSubmit={this.handleSubmit}>
               {this.renderInput('password', 'Password')}
               {this.renderInput('confirmPassword', 'Confirm Password')}
               {this.renderButton("Submit")}
               
            </form>
        </div>
        );
    }
}

export default ResetForm;