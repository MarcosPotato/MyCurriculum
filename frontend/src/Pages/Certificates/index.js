import React from 'react'
import { useState, useEffect } from 'react'

import api from '../../Services/api.js'

import './style.css'

export default function Certificates(props){

    const [timeNow, setTimeNow] = useState()
    const [certificates, setCertificates] = useState([])

    useEffect(() => {
        api.get(`/certificates/${props.idProfile}`)
            .then(response => setCertificates(response.data))
            .catch(err => alert(err))

    },[props.idProfile])

    useEffect(() => {
        setInterval(() => {
            setTimeNow(`${new Date().getHours()} : ${new Date().getMinutes()}`)
        },1000)
    },[])

    return (
        <>
            <div className="certificates-cell">
                <div className="celphone-top">
                    <i/>
                </div>
                <header>
                    <div>
                        <p>{ timeNow }</p>
                        <p>10%</p><i class="fas fa-battery-quarter" style={{ color: 'black' }}></i>
                    </div>
                    <h1>Certificados</h1>
                </header>
                <nav>
                    {
                        certificates.map(certificate => (
                            <div className="certificates-style">
                                <img src={ certificate.cf_img } alt="certificate-image" />
                                <div>
                                    <p>{ certificate.cf_name }</p>
                                    <p>Data Emissão: { certificate.cf_date }</p>
                                    <p>{ certificate.cf_desc }</p>
                                    <a href={ certificate.cf_url } target="_blank">Veja mais...</a>
                                </div>
                            </div>
                        ))
                    }
                </nav>
                <div className="celphone-bottom">
                    <button/>
                </div>
            </div>
        </>
    )
}