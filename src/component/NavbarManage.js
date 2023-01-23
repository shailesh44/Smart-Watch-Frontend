import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"
import i18next from "i18next";

export default function NavbarManage() {
    const {t}=useTranslation();
    return (

        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid><Link to="/HomePage" style={{ color: 'white' }}>
                <Navbar.Brand >Dashboard </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-1 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                     
                        <Link to="/Manage/Alarms" style={{ color: 'white', paddingLeft: "10px" }}> {t('alarm')}</Link>
                        <Link to="/Manage/Sos" style={{ color: 'white', paddingLeft: "10px" }}>{t('sos')}</Link>
                        <Link to="/Manage/Notification" style={{ color: 'white', paddingLeft: "10px" }}>{t('notification')}</Link>
                        <Link to="/Manage/Alerts" style={{ color: 'white', paddingLeft: "10px" }}>{t('alerts')}</Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
