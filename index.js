import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Doctor,
  Login,
  Signup,
  Appointment,
  Payment,
  Membership,
} from "./components/Pages";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctors" element={<Doctor/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/appointment" element={<Appointment />}>
      </Route>
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById("root")
);

