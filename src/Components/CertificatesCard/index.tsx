import React from "react"

import { Certificate } from './style'

import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded'

export default function CertificatesCard(){
    return(
        <Certificate>
            <img className="background-image" src="https://fmeducadora.com.br/wp-content/uploads/2020/06/a-microcamp.jpg" alt="Microcamp"/>
            <section className="certificates-info">
                <img src="https://microcamp.com.br/wp-content/uploads/2020/10/logo_microcamp.png" alt="Microcamp" />
                <div>
                    <h1>Designer de Games</h1>
                    <p><b>Instiuição:</b> <a href="https://microcamp.com.br/" rel="microcamp" target="_blank">Microcamp</a></p>
                    <p><b>Data:</b> 05/10/2016</p>
                    <p><b>Duração:</b> 264 horas</p>
                </div>
                <div className="certificate-link">
                    <a href="" >Veja mais <ArrowRightAltRoundedIcon /></a>
                </div>
            </section>
        </Certificate>
    )
}