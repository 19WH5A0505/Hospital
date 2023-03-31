import React from "react";
import { Outlet } from "react-router-dom";
function Doctor() {
  return (
    <div className="doctors">
      <div class="container">
        <br/>
        <h1 className="text-center mt-6">List of Doctors</h1>
        <br/>
        &emsp;&emsp; &emsp;
        <img src="https://www.independent.ie/irish-news/education/671f1/40328133.ece/AUTOCROP/w620/A%20young%20caring%20doctor" alt="Loading"
        width={230} height={230}/>
              &emsp;&emsp;
              <img src="https://www.demo.unitemplates.com/medico/images/hospital/doctor_001.jpg" alt="Loading"
              width={230} height={230}/>
              &emsp;&emsp;
              <img src="https://st3.depositphotos.com/4431055/16127/i/600/depositphotos_161277812-stock-photo-handsome-doctor-portrait.jpg" alt="Loading"
              width={230} height={230}/>
              &emsp;&emsp;
              <img src="https://st3.depositphotos.com/3332767/18889/i/600/depositphotos_188896398-stock-photo-close-young-doctor-looking-camera.jpg" alt="Loading"
              width={230} height={230}/>
              <br/>
              <br/>
              <h6>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Nandini Kushwaha&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Ajay Kushwaha
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Rahul Sharma
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Devsingh
              </h6>
              <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Pediatrician&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Ent&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;General Physician&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Ophthalmologist</p>
              &emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button> 
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button> 
              <br/>
              <br/>

              &emsp;&emsp; &emsp;
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aR2BE0ce5DmNX80QTKrlNLh0aBirtubnQQ&usqp=CAU" alt="Loading"
        width={230} height={230}/>
              &emsp;&emsp;
              <img src="https://thumbs.dreamstime.com/b/happy-young-male-doctor-man-smile-handsome-15357662.jpg" alt="Loading"
              width={230} height={230}/>
              &emsp;&emsp;
              <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000" alt="Loading"
              width={230} height={230}/>
              &emsp;&emsp;
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OyehNDRvchHAp1mgIpoOTWZ8MfTFss7yXQ&usqp=CAU" alt="Loading"
              width={230} height={230}/>
              <br/>
              <br/>
              <h6>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Pavan Sharma&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Surya Gupta
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Yashaswini
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dr. Sandhya
              </h6>
              <p>&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;Cardiologist&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dermatologist&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Neurologist&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;General Physician</p>
              &emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button> 
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button name="button" type="button"><a href="Appointment">Book an Appointment</a></button> 
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
        <Outlet/>
      </div>
    </div>
  );
}
 
export default Doctor;
