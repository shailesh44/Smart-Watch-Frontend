import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import { useTranslation } from "react-i18next"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function Addlifeline() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();


    return (
        <>
            <HomeHeader />
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Add lifeline</h3>

                        <Stack direction="row" spacing={2}>
                            <Avatar>H</Avatar>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                        </Stack>
                        <div className="form-group mt-3">
                            <label>lifeline nickname</label>
                            <input
                                type="text"
                                name="nickname"
                                className="form-control mt-1"
                                placeholder="Enter nickname"
                                value={email}
                                onChange={ev => { setEmail(ev.target.value) }}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>lifeline phone number</label>
                            <input
                                name="text"
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter phone number"
                                value={password}
                                onChange={ev => { setPassword(ev.target.value) }}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3 ">
                            <div className="loginbtn">
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>

                            </div>
                            <div className="loginbtn">
                                <button type="submit" className="btn btn-primary">
                                    Cancel
                                </button></div>
                        </div>


                    </div>
                </form>
            </div>
        </>
    )
}