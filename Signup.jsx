import React, { useState } from 'react';
import './SignUp.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log(`Username: ${username}, Password: ${password}, Email: ${email},Phone:${phone},Address:${address}`);
  };

  return (
    <div>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
      <h1 className = "center"> Signup </h1>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="email" value={email} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="email" value={email} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type = "submit"><b>Signup</b></button>    
        <br/>
        </form>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default Signup;