
import Container from 'react-bootstrap/Container';

import { useTranslation } from "react-i18next"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function NavbarMonitor() {
  const {t}=useTranslation();
  return (

    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid><Link to="/HomePage" style={{ color: 'white' }}>
        <Navbar.Brand >Logo </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-1 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/Monitor/HeartRate" style={{ color: 'white', paddingLeft: "10px" }}> {t('heart')}</Link>
            <Link to="/Monitor/BloodPressure" style={{ color: 'white', paddingLeft: "10px" }}>{t('blood')}</Link>
            <Link to="/Monitor/Steps" style={{ color: 'white', paddingLeft: "10px" }}>{t('step')}</Link>
            <Link to="/Monitor/Sleep" style={{ color: 'white', paddingLeft: "10px" }}>{t('sleep')}</Link>
            <Link to="/Monitor/Temperature" style={{ color: 'white', paddingLeft: "10px" }}>{t('temperature')}</Link>
            <Link to="/Monitor/Devices" style={{ color: 'white', paddingLeft: "10px" }}>{t('device')}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
