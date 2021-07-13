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
            <img className="background-image" src={ certificateInfo.backgorundImage } alt={ certificateInfo.university }/>
            <section className="certificates-info">
                <img src={ certificateInfo.logoImage } alt={ `${certificateInfo.university}-Logo` } />
                <div>
                    <h1>{ certificateInfo.name }</h1>
                    <p><b>Instiuição:</b>{ certificateInfo.university }</p>
                    <p><b>Data:</b> { certificateInfo.date }</p>
                    <p><b>Duração:</b> { certificateInfo.duration } horas</p>
                </div>
                <div className="certificate-link">
                    <a href={ certificateInfo.certificateLink } >Veja mais <ArrowRightAltRoundedIcon /></a>
                </div>
            </section>
        </Certificate>
    )
}

export default CertificatesCard