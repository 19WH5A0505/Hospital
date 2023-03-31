import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
function Appointment() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log(`Username: ${username}, Email: ${email},Phone:${phone},Address:${address},Gender:${gender}`);
  };

  return (
    <div>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
      <h2 className = "center"> Make an Appointment </h2>
        <label>
          First Name:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="email" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="email" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="email" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          DOB:
          <br/>
        <TextField
        id="date"
        type="date"
        defaultValue="2023-03-31"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </label>
        <button type = "submit" className = "login-button">Book Now<a href="Payment">...</a></button>
        <br/>
        </form>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default Appointment;