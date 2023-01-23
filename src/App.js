import Login from './component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ForgetPass from './component/ForgetPass';
import HomePage from './component/HomePage';
import Manage from './component/Manage';
import Monitor from './component/Monitor';
import Help from './component/Help';
import ChangePass from './component/ChangePass';
import ConfirmPass from './component/ConfirmPass';
import PhoneVerify from './component/PhoneVerify';
import Registration from './component/Registration';
import Suggestion from './component/Suggestion';

import HeartRate from './component/Monitor/HeartRate';
import BloodPressure from './component/Monitor/BloodPressure';
import Sleep from './component/Monitor/Sleep';
import Steps from './component/Monitor/Steps';
import Temperature from './component/Monitor/Temperature';
import OtpVerify from './component/OtpVerify';
import Alarms from './component/Manage/Alarms';
import Alerts from './component/Manage/Alerts';
import Sos from './component/Manage/Sos';
import Notification from './component/Manage/Notification';
import Devices from './component/Monitor/Devices';
import Addlifeline from './component/Addlifeline';
import Users from './component/Users';
import Broadcast from './component/Broadcast';
import Viewtable from './component/Viewtable.js';
import Useredit from './component/Useredit';
import Viewdevice from './component/Viewdevice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/ForgetPass" element={<ForgetPass/>}/>
      <Route exact path="/OtpVerify" element={<OtpVerify/>}/>
      <Route exact path="/Addlifeline" element={<Addlifeline/>}/>
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Manage" element={<Manage/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Users/View" element={<Viewtable/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Users/View/device" element={<Viewdevice/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Users/Edit" element={<Useredit/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Homepage" element={<Users/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Monitor" element={<Monitor/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Help" element={<Help/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/ChangePass" element={<ChangePass/>}/>)}
     <Route exact path="/ConfirmPass" element={<ConfirmPass/>}/>
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/PhoneVerify" element={<PhoneVerify/>}/>)}
      <Route exact path="/Registration" element={<Registration/>}/>
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Suggestion" element={<Suggestion/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Broadcast" element={<Broadcast/>}/>)}
      {localStorage.getItem("isAuth")==="true" && (<Route exact path="/Users" element={<Users/>}/>)}
     
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Monitor/HeartRate" element={<HeartRate/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Monitor/BloodPressure" element={<BloodPressure/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Monitor/Sleep" element={<Sleep/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Monitor/Devices" element={<Devices/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Monitor/Temperature" element={<Temperature/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Monitor/Steps" element={<Steps/>}/>)}
           {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Manage/Alarms" element={<Alarms/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Manage/Alerts" element={<Alerts/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Manage/Sos" element={<Sos/>}/>)}
      {localStorage.getItem("isAuth")==="true" && ( <Route exact path="/Manage/Notification" element={<Notification/>}/>)}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
