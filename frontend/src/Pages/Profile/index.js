import React from 'react'
import { useState, useEffect } from 'react'

import profileImage from '../../Assets/images/my-image.jpg'

import api from '../../Services/api.js'

import './style.css'

export default function Profile(props) {
    
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [jobRole, setJobRole] = useState()
    const [desc, setDesc] = useState()
    const [age, setAge] = useState()

    const convertDateToYear = date => {
        return Math.trunc((Date.now() - (new Date(date))) / (31557600000))
    }

    useEffect(() => {
        api.get(`/profile/${props.idProfile}`)
            .then(response => {
                setName(response.data[0].pf_name)
                setAddress(response.data[0].pf_address)
                setJobRole(response.data[0].pf_jobRole)
                setDesc(response.data[0].pf_desc)
                setAge(convertDateToYear(response.data[0].pf_age))
            })
            .catch(err => alert(err))
    },[props.idProfile])

    return (
        <div className="profile-location">
            <div className="profile-header">
                <h1>Profile</h1>
                {
                    (jobRole !== null) && <p>I'm { jobRole }</p>
                }
            </div>
            <div className="profile-content">
                <img className="profile-location-img" src={ profileImage } alt="profile-img" />
                <div className="grid-profile-content">
                    <div className="Name">
                        <h1>Name:</h1>
                        <p>{ name }</p>
                    </div>
                    <div className="Age">
                        <h1>Age:</h1>
                        <p>{ age } years</p>
                    </div>
                    <div className="Location">
                        <h1>Location:</h1>
                        <p>{ address }</p>
                    </div>
                </div>
            </div>
            <fieldset className="about-me">
                <legend>About Me</legend>
                <p>{ desc }</p>
            </fieldset>
        </div>
    )
}
                    