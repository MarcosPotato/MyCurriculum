import React from "react"

import CertificateModel from "../../Models/CertificateModel"

import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded'

import { Certificate } from './style'

interface Props {
    certificateInfo: CertificateModel
}

const CertificatesCard: React.FC<Props> = ({ certificateInfo } : Props) => {
    return(
        <Certificate>
            <div className="card-header">
                <img className="background-image" src={ certificateInfo.backgorundImage } alt={ certificateInfo.university }/>
                <img className="certificate-logo-image" src={ certificateInfo.logoImage } alt={ `${certificateInfo.university}-Logo` }/>
            </div>
            <section className="certificates-info">
                <div>
                    <h1>{ certificateInfo.name }</h1>
                    <p><b>Instiuição:</b>{ certificateInfo.university }</p>
                    <p><b>Data:</b> { certificateInfo.date }</p>
                    <p><b>Duração:</b> { certificateInfo.duration } horas</p>
                </div>
            </section>
            <footer className="certificate-card-footer">
                <div className="certificate-link">
                    <a href={ certificateInfo.certificateLink } >Veja mais <ArrowRightAltRoundedIcon /></a>
                </div>
            </footer>
        </Certificate>
    )
}

export default CertificatesCard