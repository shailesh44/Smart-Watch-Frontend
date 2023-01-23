import { useTranslation } from "react-i18next"
import i18next from "i18next";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";

export default function HomePage() {

    const { t } = useTranslation();

    const navigate = useNavigate();
    useEffect(() => {
        const v = localStorage.getItem('isAuth')

        if (v === "true") {

        } else { navigate("/") }
    }

    )

    return (
        <>
            <div><HomeHeader /></div>

            <div className="d-flex justify-content-start">
                <Sidebar />
                <div className="map">
                </div>
            </div>



        </>
    )
}