import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { myConfig } from "./config";
import HomeHeader from "./HomeHeader";
import { useTranslation } from "react-i18next"

export default function ForgetPass() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState(false);
  const [value, setValue] = useState('email');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value)
  };
  const {t}=useTranslation();
  const HandlesignupPhone = (event) => {
    event.preventDefault();
    axios.post(myConfig.Baseurl + '/forgotPassword/otp', {

      phonenumber: phone


    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setMsg(true)
      console.log(res.data)
      navigate('/OtpVerify')
    })
      .catch((err) => {
        console.log(err)
      })
  }

  const Handlesignup = event => {
    event.preventDefault();
    axios.post(myConfig.Baseurl + '/forgotPassword', {

      email: email,


    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setShow(true)
      console.log(res.data)
      setShow(true)
    })
      .catch((err) => {
        console.log(err)

      })
  }

  return (
    <>
      <HomeHeader />
      <div className='fpassbox'>
        <Row >
          <Col xs={6}>
            <ToastContainer position='top-center' className="p-3">
              <Toast onClose={() => setMsg(false)} show={msg} delay={3000} autohide>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Info</strong>
                </Toast.Header>
                <Toast.Body>Please check your phone  </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col xs={6}>
         </Col>
        </Row>
      </div>

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
                <Toast.Body>Please Check your email  </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col xs={6}>
          </Col>
        </Row>
      </div>

      <div className="radioBtn">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">{t('verify')}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="email" control={<Radio />} label={t('email')} />
            <FormControlLabel value="phone" control={<Radio />} label={t('phone')} />
          </RadioGroup>
        </FormControl>
      </div>
      {(value === 'email') ?
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={Handlesignup}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">{t('forget')}</h3>
              <div className="form-group mt-3">
                <label>{t('email')}</label>
                <input
                  name="email"
                  type="email"
                  className="form-control mt-1"
                  placeholder={t('email')}
                  value={email}
                  onChange={ev => { setEmail(ev.target.value) }}
                />
                <div className="signint">
                  <button type="submit" className="btn btn-primary">
                  {t('forget')}
                  </button>
                </div>
                <div className="signint">
                  <a href="/">{t('signin')}</a>
                </div>
              </div>
            </div>
          </form>
        </div>
        :
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={HandlesignupPhone}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">{t('forget')}</h3>
              <div className="form-group mt-3">
                <label>{t('phone')}</label>
                <input
                  name="phone"
                  type="number"
                  className="form-control mt-1"
                  placeholder={t('phone')}
                  value={phone}
                  onChange={ev => { setPhone(ev.target.value) }}
                />
                <div className="signint">
                  <button type="submit" className="btn btn-primary">
                  {t('forget')}
                  </button>
                </div>
                <div className="signint">
                  <a href="/">{t('signin')}</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      }
    </>
  )
}