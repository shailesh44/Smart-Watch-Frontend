import React, { useState } from "react";
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";
import { useTranslation } from "react-i18next"

export default function ChangePass() {

    const [cpassword, setCpassword] = useState("");
    const [npassword, setNpassword] = useState("");
    const {t}=useTranslation();

 
    return (
        <>
        <HomeHeader/>
         <div className="d-flex justify-content-start">
            <Sidebar />
            <div className="Auth-form-container">

                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">{t('changepass')}</h3>
                        <div className="form-group mt-3">
                            <label>{t('currentpass')}</label>
                            <input
                                name="cpassword"

                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Current password"
                                value={cpassword}
                                onChange={ev => { setCpassword(ev.target.value) }}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>{t('newpass')}</label>
                            <input
                                name="npassword"
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter new password"
                                value={npassword}
                                onChange={ev => { setNpassword(ev.target.value) }}

                            />
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                {t('changepass')}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
    )

}