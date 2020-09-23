import React from 'react'
import { useState, useEffect } from 'react'

import ImageTest from '../../Assets/images/initial-background.png'
import './style.css'

export default function Certificates(props){

    const [timeNow, setTimeNow] = useState()

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
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                    <div className="certificates-style">
                        <img src={ ImageTest } alt="certificate-image" />
                        <div>
                            <p>ScrumMaster</p>
                            <p>Dia 15/02/2010</p>
                            <p>Este é um certificado tirado na scrumorg sobre metodologias agéis</p>
                            <a href="https://www.scrum.org" target="_blank">Veja mais...</a>
                        </div>
                    </div>
                </nav>
                <div className="celphone-bottom">
                    <button/>
                </div>
            </div>
        </>
    )
}