import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next"
import i18next from "i18next";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import { myConfig } from './config';

import { useNavigate } from "react-router-dom";

const Usertabley = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [dataall, setDataall] = useState([]);
    const [filterdata, setFilterdata] = useState([]);
    const [show, setShow] = useState(false);
    const { t } = useTranslation();
    const dataapi = async () => {
        try {
            const res = await axios.post(myConfig.Apiurl + '/mobile/findAllUser')
            setDataall(res.data.user.data)
            console.log(res.data.user.data)
            setFilterdata(res.data.user.data)
           
        } catch (error) {

        }
    }
    const handleClickview = (event, row) => {


        localStorage.setItem("iduser", row._id)
        if (row) {
            navigate("/Users/View")

        }
    }

    const handleClickstatus = (event, row) => {

        event.preventDefault();
        const status = row.status == "ACTIVE" ? "INACTIVE" : "ACTIVE"
        const phone = row.phonenumber
        console.log("row", row)
        axios.post(myConfig.Apiurl + '/mobile/statusUser', {

            phonenumber: phone,
            status: status

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setShow(true)
            setTimeout(() => {
                window.location.reload()
            }, 3000);

        })
    }

    useEffect(() => {
        dataapi()
    }, [])
    useEffect(() => {
        const result = dataall.filter((e) => {

            return e.name.toLowerCase().match(search.toLowerCase());
        });
        setFilterdata(result)
    }, [search]);

    const handleClickedit = (event, row) => {

        console.log("row", row)
        localStorage.setItem("firstname", row.name)
        localStorage.setItem("lastname", row.lastname)
        localStorage.setItem("phone", row.phonenumber)
        if (row) {
            navigate("/Users/Edit")
            console.log(row)

        }
    }


    const columns = [

        {
            name: t('name'),
            selector: (row) => row.name +" "+ row.lastname,
            width: "10vw",
            sortable: true
        },

        {
            name: t('device'),
            selector: (row) => row.devices,
            width: "8vw",
        },
        {
            name: t('phone'),
            selector: (row) => row.phonenumber,
            width: "10vw",
        },

        {
            name: t('registration'),

            selector: (row) => row.registeredOn,
            width: "15vw",
        },

        {
            name: "Status",
            selector: (row) => row.status,
            width: "7vw",
        },

        {
            name: t('action'),
            style:{maxWidth:"100px"},
            cell: (row) => (
                <button className="btn btn-outline-primary"
                    onClick={(event) => {
                        handleClickview(event, row)

                    }}>
                    View</button>

            ),
        }, {
            name: t('action'),
            style:{maxWidth:"100px"},
            cell: (row) => (
                <button className="btn btn-outline-warning"
                    onClick={(event) => {
                        console.log("row", row)
                        handleClickedit(event, row)


                    }}>
                    Edit</button>

            ),
        }, {
            name: t('action'),
            style:{maxWidth:"150px"},
            cell: (row) => (
                <button className="btn btn-outline-primary"
                    onClick={(event) => {
                        handleClickstatus(event, row)

                    }}>
                    {row.status == "ACTIVE" ? "DEACTIVATE" : "ACTIVATE"}
                </button>

            ),
        },

    ];

    return (
        <>


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
                                <Toast.Body>User Status updated Successfully </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </Col>
                    <Col xs={6}>
                    </Col>
                </Row>
            </div>


            <div style={{ textAlign: "center" }}>
                <h1>{t('userlist')}</h1>
            </div>
            <DataTable

                columns={columns}

                data={filterdata}
                pagina
                pageLength={10}
                pagination

                paginationRowsPerPageOptions={[5, 7, 10, 15]}


                subHeader
                subHeaderComponent={
                    
                    <input type="text"
                        className="w-25 rounded form control"
                     
                        placeholder={t('search')}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                }
            />
        </>
    )
};
export default Usertabley;


