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
        const setTime = value => {
            if(value < 10)
                return '0' + value
            else
                return value
        }
        setInterval(() => {
            setTimeNow(`${setTime(new Date().getHours())} : ${setTime(new Date().getMinutes())}`)
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
                    <h1>Certificates</h1>
                </header>
                <nav>
                    {
                        certificates.map(certificate => (
                            <div className="certificates-style">
                                <img src={ certificate.img } alt="certificate-image" />
                                <div>
                                    <p>{ certificate.cf_name }</p>
                                    <p>Emission: { certificate.cf_date }</p>
                                    <p>About: { certificate.cf_desc }</p>
                                    <a href={ certificate.cf_url } target="_blank">See more...</a>
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