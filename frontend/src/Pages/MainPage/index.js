import React from 'react' 
import { useState, useEffect } from 'react'

import api from '../../Services/api.js'

import Profile from '../Profile'
import Certificates from '../Certificates'
import Contact from '../Contact'

import backgroundImg from '../../Assets/images/initial-background.png'
import "./style.css"

export default function MainPage (){

    const [name, setName] = useState()

    useEffect(() => {
        localStorage.setItem('id-profile', '2115b08d-353f-4f39-90ec-5c8ba8f25c69')
        api.get(`/profile/${localStorage.getItem('id-profile')}`)
            .then(response => setName(response.data.pf_name))
            .catch(err => alert(err))
    },[])

    return (
        <>
            <header className="header-main-page">
                <img src={ backgroundImg } alt="background-img"/>
                <h1>{ name }</h1>
                <p>Interactive resume</p>
            </header>
            <nav className="navigation-page">
                <div className="profile">
                    <Profile idProfile={ localStorage.getItem('id-profile') } />
                </div>
                <div className="certificates">
                    <Certificates idProfile={ localStorage.getItem('id-profile') } />
                </div>
            </nav>
            <footer style={{ backgroundColor: 'white', width: '100%'}}>
                {/* <Contact idProfile={ localStorage.getItem('id-profile') } /> */}
            </footer>
        </>
    )
}