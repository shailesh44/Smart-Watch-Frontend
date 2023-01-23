import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import axios from "axios";
import { myConfig } from "./config";
export default function ConfirmPass() {

    const [npassword, setNpassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [show, setShow] = useState(false);
    const [warn, setWarn] = useState(false);
const [searchParams]=useSearchParams()
const token =searchParams.get('token')
console.log(token)
const navigate = useNavigate();

    const handlePass = event => {
        event.preventDefault();

        if (npassword !== cpassword) {
            setShow(true)
        }else {
            const url =`${myConfig.Baseurl+'/password/reset?token='}${token}`
        axios.post(url, {
            password:npassword,
            confirmpassword :cpassword
    
        }, {
          headers: {
            'Authorization':token,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
            setWarn(true)
            
          console.log(res.data)
          navigate('/')
        })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    return (
        <>
        <div className='fpassbox'>
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
                <Toast.Body>Password Change Successfully </Toast.Body>
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
                            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Info</strong>
                                </Toast.Header>
                                <Toast.Body>New Password and Confirm Password Didnt amatch </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </Col>
                    <Col xs={6}>
                    </Col>
                </Row>
            </div>

            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handlePass}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Change Password</h3>
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

                            <div className="d-grid gap-2 mt-3">

                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )


}