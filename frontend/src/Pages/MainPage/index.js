import React from 'react' 

import "./style.css"
import backgroundImg from '../../Assets/images/initial-background.png'
import profileImage from '../../Assets/images/my-image.jpg'

export default function MainPage (){
    return (
        <>
            <header className="header-main-page">
                <img src={ backgroundImg } alt="background-img"/>
                <h1>Marcos Moreira</h1>
                <p>Interactive resume</p>
            </header>
            <nav className="navigation-page">
                <div className="profile-location">
                    <div className="profile-header">
                        <h1 className="profile-title">Profile</h1>
                        <p className="profile-text">I'm web developer</p>
                    </div>
                    <div className="profile-content">
                        <img className="profile-location-img" src={ profileImage } alt="profile-img" />
                        <div className="grid-profile-content">
                            <div className="Name">
                                <h1>Name:</h1>
                                <p>Marcos Moreira</p>
                            </div>
                            <div className="Age">
                                <h1>Age:</h1>
                                <p>19 years</p>
                            </div>
                            <div className="Location">
                                <h1>Location:</h1>
                                <p>Salto, São Paulo, Brazil</p>
                            </div>
                        </div>
                    </div>
                    <fieldset className="about-me">
                        <legend>About Me</legend>
                        <p>I am currently an IT intern working with helpdesk but in my spare time I am a Web Developer.
                        I became very familiar with javascript due to the firepower it gives you, just your creativity being your limiter.
                        Since I was a little fond of the technology area and I am on my way to improve my knowledge and become a good Dev.</p>
                    </fieldset>
                </div>
            </nav>
        </>
    )
}