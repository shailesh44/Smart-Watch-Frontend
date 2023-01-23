import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdownq from './dropdown';
import { useTranslation } from "react-i18next"
import logo from '../image/logo.png'
import i18next from "i18next";
export default function HomeHeader(props) {
    const logout = () => {
        localStorage.clear()
    };
    const { t } = useTranslation();
    const handleClick = (e) => {
     
        i18next.changeLanguage(e.target.value)
    }
    return (
        <>
        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src={logo} height={60}></img>
                 
                </Container>
                <div className='dropD'>
                    <Dropdownq onChange={(e) => handleClick(e)} />
                </div>
                {localStorage.getItem("isAuth")==="true"?
                <div className='logoutbtn' >
                    <Link to="/">
                        <div style={{ border: '1px solid white' }}>
                            <button type="button" onClick={logout} className="btn btn-dark">{t('logout')}</button>
                        </div></Link>
                </div>:''}
            </Navbar>
        </>
    );
}

