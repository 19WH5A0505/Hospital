import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
function Navigation() {
  return (
    <div className="navigation">
      <nav style={{backgroundColor:'#00ccff'}}
       className="navbar navbar-expand navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="https://i.pinimg.com/originals/85/95/f4/8595f4b711e503bc72fe396e5043e0c2.png" alt="Loading.." 
            width={27} height={27}/>
             &nbsp; Health Care Medical Care
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navigation;
