import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
import {Link} from 'react-router-dom'


const Login = () => {
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8090/authenticate', 
      {username,password});
      localStorage.setItem('token', response.data.token);
       window.location.href = '/';
      }
      catch (error){
         setError('Invalid username or password');
        }
       };

       return (
       <div className = "login-container">
        <form onSubmit = {handleSubmit} className = "login-form">
          <h1 className = "login-title"> Login</h1>
          <label htmlFor = "username" className = "login-label"><b>Username</b></label>
          <input type = "text" placeholder = "Username" value = {username} 
          onChange={(e) => setUsername(e.target.value) } className = "login-input"/>
          <label htmlFor = "password" className = "login-label"><b>Password</b></label>
          <input type = "password" placeholder = "Password" value = {password} 
           onChange = {(e) => setPassword(e.target.value)} className = "login-input"/>
           <button type = "submit" className = "login-button"><b><a href="Membership">Login</a></b></button>
           {error && <div>{error}</div>}
           <br></br>
           <p>Don't have an account?<Link to ="/Signup"> SIGNUP</Link></p>
           </form>
           </div>
           );
}

export default Login;

