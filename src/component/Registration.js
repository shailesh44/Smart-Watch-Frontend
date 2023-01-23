import axios from 'axios'
import { myConfig } from './config';
import React, { useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Dropdownq from './dropdown';
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next"
import i18next from "i18next";
import HomeHeader from './HomeHeader';

export default function Registration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [warn, setWarn] = useState(false);
  const [msg,setMsg] = useState("");
  const {t}=useTranslation();

  const Handlesignup = event => {
    event.preventDefault();
    axios.post(myConfig.Baseurl +'/signup', {
      phonenumber: Phone,
      email: email,
      password: password,

    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setShow(true)
      setEmail("")
      setPassword("")
      setPhone("")
      console.log(res.data)
      setShow(true)
    

    })
      .catch((err) => {
        setMsg(err.data.message)
        setWarn(true)
        console.log(err)

      })
  }

  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }

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
                <Toast.Body>User created Successfully </Toast.Body>
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
        <form className="Auth-form" onSubmit={Handlesignup}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">{t('registration')}</h3>
            <div className="form-group mt-3">
              <label>{t('phone')}</label>
              <input
                type="number"
                name="phone"
                className="form-control mt-1"
                placeholder="Enter Phone No"
               value={Phone}
                onChange={ev => { setPhone(ev.target.value) }}
              />
            </div>

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
              <small>{t('pcon')}</small>

            </div>

            <div className="d-grid gap-2 mt-3">
              <div className="loginbtn">
                <button type="submit" className="btn btn-primary">
                {t('submitt')}
                </button>
              </div>
              <div className='signint'>
             
              <Link to="/">
              {t('signin')}
              </Link>
              </div>
            </div>

          </div>
        </form>
      </div>

    </>
  )
}