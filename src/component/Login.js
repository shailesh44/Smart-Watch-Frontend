import React, { useEffect, useState } from "react"
import Dropdownq from "./dropdown";
import { Link, useNavigate } from "react-router-dom";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import axios from "axios";
import {myConfig} from  './config';
import { useTranslation } from "react-i18next"
import i18next from "i18next";
import HomeHeader from "./HomeHeader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {t}=useTranslation();

  useEffect(() => {
    const v = localStorage.getItem('isAuth')
    if (v === "true") {
      navigate("/HomePage")
    }
  })
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }
  const Handlesignin = event => {
    event.preventDefault()
    axios.post(myConfig.Baseurl+ '/signin', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status == 200) {
        const token = response.data.user.token
        localStorage.setItem("token", token)
        localStorage.setItem("isAuth", "true")
        navigate("/Users")
        window.location.reload()
      }
      else {
        navigate("/")
      }
      console.log(response.data.user.message)
    }).catch(err => {
      setMsg(err.response.data.message)
     
      console.log(err)
       setShow(true)
    })
  }

  return (
    <>
    <HomeHeader/>
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
                <Toast.Body>{msg}  </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col xs={6}>
          </Col>
        </Row>
      </div>

      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={Handlesignin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">{t('admin')}</h3>
            <div className="form-group mt-3">
              <label>{t('email')}</label>
              <input
                type="email" 
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={ev => { setEmail(ev.target.value) }}
              />
            </div>
            <div className="form-group mt-3">
              <label>{t('password')}</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={ev => { setPassword(ev.target.value) }}
              />
            </div>
            <div className="d-grid gap-2 mt-3 ">
              <div className="loginbtn">
                <button type="submit" className="btn btn-primary">
                {t('login')}
                </button>
              </div>
            </div>
            <p className="forgot-password text-center mt-2">
              <Link to="/ForgetPass">
              {t('forget')}
              </Link>
            </p>
           {/* <p className="forgot-password text-center mt-2">
              <Link to="/Registration">
              {t('sign')}
              </Link>
            </p> */}
          </div>
        </form>
      </div>
    </>
  )
}