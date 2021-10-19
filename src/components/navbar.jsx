import React from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = ({ user }) => {
  return( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand " to="/"> GK </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collaose navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav"> 
      <NavLink className="nav-item nav-link" to ="/">Home</NavLink>
      {!user && (
        <React.Fragment> 
          <NavLink className="nav-item nav-link text-right" to ="/login">Login</NavLink> 
          <NavLink className="nav-item nav-link text-right" to ="/register">Register</NavLink> 
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <NavLink className="nav-item nav-link" to ="/account">My Account</NavLink>
          <NavLink className="nav-item nav-link" to ="/logout">Logout</NavLink>
        </React.Fragment>
        )}
      </div>
      </div>
    </nav>

  );
}

export default Navbar;