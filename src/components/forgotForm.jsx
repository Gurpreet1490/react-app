import React  from 'react';
import Form from "./commons/form";
import Joi from 'joi-browser';
import * as forgotService from '../service/forgotService';


class ForgotForm extends Form {

    state = {
        data: { emailId: ''},
        errors: {}
    };

    schema = {
        emailId: Joi.string().required().label('EmailId'),
    };

    doSubmit = async () => {
      try{
        const { data } = this.state;
         await forgotService.forgot(data.emailId);
        //localStorage.setItem("token", jwt);
        //window.location = "/";
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
             <h1>Forgot Password</h1>
             <form onSubmit={this.handleSubmit}>
                {this.renderInput('emailId', 'emailId')}
                {this.renderButton("Submit")}
             </form>
         </div>
         );
        }
}

export default ForgotForm;