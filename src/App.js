import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Navbar from "./components/navbar";
import Home from "./components/home";
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import ForgotForm from './components/forgotForm';
import ResetForm from './components/resetForm';
import Logout from './components/logout';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';



class App extends Component {

  state = {};

  componentDidMount(){
    try{
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    this.setState({ user });
    }
    catch(ex) {}

  }

  render(){
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar user={this.state.user} />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/forgot_password" component={ForgotForm} />
          <Route path="/reset_password" component={ResetForm} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
     </React.Fragment>
  );
  }
}

export default App;
