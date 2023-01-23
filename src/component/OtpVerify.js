import React, { useEffect,useState } from "react";
import OtpInput from "react-otp-input";
import { myConfig } from "./config";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function OtpVerify() {
  
  const [npassword, setNpassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [show, setShow] = useState(false);
  const [msg,setMsg] = useState("");
  const [warn, setWarn] = useState(false);
  const handleChange = ev => {
    setOtp(ev)

  }
  const navigate = useNavigate();

  const handleopt = event => {
    event.preventDefault();
    axios.post(myConfig.Baseurl + '/resetPassword/otp', {

      otp: otp,
      password:npassword,
      confirmpassword :cpassword
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setMsg(res.data.message)
      setShow(true)
      console.log("h",res.data)
      setTimeout(() => {
        navigate("/")  
      }, 5000);
      
    })
      .catch((err) => {
        setMsg(err.response.data.message)
        setWarn(true)
        console.log(err)
      })
  }
  const [otp, setOtp] = useState();
  return (
    <>
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
                <Toast.Body>{msg} </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col xs={6}>
         </Col>
        </Row>
      </div>

      <div>
        <Row >
          <Col xs={6}>
            <ToastContainer position='top-center' className="p-3">
              <Toast onClose={() => setWarn(false)} show={warn} delay={3000} autohide>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Info</strong>
               </Toast.Header>
                <Toast.Body>{msg}
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col xs={6}>
          </Col>
        </Row>
      </div>

    
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleopt}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Otp Verification</h3>
            <div className="form-group mt-3">
              <label>Enter Otp</label>
              <div>
                <OtpInput
                  onChange={handleChange}
                  value={otp}
                  numInputs={6}
                  separator={<span>-</span>}
                  inputStyle={{ width: "50px" }} isInputNum
                />
                <strong>An otp has been send to your registered number</strong>
              </div>
              <div className="form-group mt-3">
                            <label>Enter new Password</label>
                            <input
                                name="npassword"
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter new password"
                                value={npassword}
                                onChange={ev => { setNpassword(ev.target.value) }}

                            />

                        </div>

                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <input
                                name="cpassword"

                                type="password"
                                className="form-control mt-1"
                                placeholder="Confirm password"
                                value={cpassword}
                                onChange={ev => { setCpassword(ev.target.value) }}

                            />
</div>
              <div className="d-grid gap-2 mt-3">
                <div className="loginbtn">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}