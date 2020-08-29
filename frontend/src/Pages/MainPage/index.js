import React from 'react' 
import { useState, useEffect } from 'react'

import backgroundImg from '../../Assets/images/initial-background.png'
import Profile from '../Profile'

import api from '../../Services/api.js'

import "./style.css"

export default function MainPage (){

    const [name, setName] = useState()

    useEffect(() => {
        localStorage.setItem('id-profile', '80584ce0-1650-4566-8a52-f9cfd9c57c55')
        api.get(`/profile/${localStorage.getItem('id-profile')}`)
            .then(response => setName(response.data[0].pf_name))
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
                <div className="profile-location">
                    <Profile idProfile={ localStorage.getItem('id-profile') }/>
                </div>
            </nav>
        </>
    )
}