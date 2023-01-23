import * as React from 'react';
import HomeHeader from "./HomeHeader";
import { useState,useEffect } from 'react';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { myConfig } from './config';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function Useredit() {
 
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [phone,setPhone]=useState("")
    const [show, setShow] = useState(false);
  


      useEffect(() => {
        const firstname = localStorage.getItem('firstname')
        const lastname = localStorage.getItem('lastname')
        const phone = localStorage.getItem('phone')
        setFirstname(firstname)
        setLastname(lastname)
        setPhone(phone)
    },[])

   const Handleedit = event => {
      event.preventDefault();
      axios.post(myConfig.Apiurl +'/mobile/updateUser', {
      
          phonenumber:phone,
          name:firstname,
          lastname:lastname 
      
  
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        setShow(true)
  
      })
        .catch((err) => {
        
          console.log(err)
  
        })
    }
  

      const handleChangefirst = (e) => {
        setFirstname( e.target.value );
     
       
      };
      
      const handleChangelast = (e) => {
        setLastname( e.target.value );
       
      };
      
    return (
    <>
    <HomeHeader/>

    <div className='fpassbox'>
        <Row >
          <Col xs={6}>
            <ToastContainer position='top-center' className="p-3">
              <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Info</strong>
                </Toast.Header>
                <Toast.Body>User updated Successfully </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col xs={6}>
         </Col>
        </Row>
      </div>


     <div className="d-flex justify-content-start">
        <Sidebar />
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={Handleedit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Edit User</h3>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="text" 
                name="firstname"
                className="form-control mt-1"
          
              onChange={handleChangefirst}
             value={firstname}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                className="form-control mt-1"
               
                onChange={handleChangelast}
                value={lastname}
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                name="phone"
                type="text"
                disabled={true}
                className="form-control mt-1"
                value={phone}
             
              />
            </div>
            <div className="d-grid gap-2 mt-3 ">
              <div className="loginbtn">
                <button type="submit" className="btn btn-primary">
                Submitt
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
</div>
    </>
  );
}
