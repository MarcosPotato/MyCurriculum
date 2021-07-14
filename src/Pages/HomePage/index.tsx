import React from 'react'
import { useState, useEffect } from 'react'

import ProfileModel from '../../Models/ProfileModels'
import HabilityModel from '../../Models/HabilityModel'
import CertificateModel from '../../Models/CertificateModel'
import ContatcModel from '../../Models/ContatctModel'

import ProfileData from '../../Data/Profile.json'

import { 
  Header, 
  Profile, 
  InfoProfile, 
  Certificates,
  Footer
} from './style'

import Carousel from 'react-elastic-carousel'

import Avatar from '../../Assets/img/profile.png'
import BackgroundHeader from '../../Assets/img/initial-background.png'

import Github from '../../Assets/logos/github.svg'
import Facebook from '../../Assets/logos/facebook.svg'
import Linkedin from '../../Assets/logos/linkedin.svg'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import MailRoundedIcon from '@material-ui/icons/MailRounded'

import CertificatesCard from '../../Components/CertificatesCard'

const App: React.FC = () =>  {

  const [profileData, setProfileData] = useState<ProfileModel>({
    name: "",
    age: 0,
    address: "",
    description: ""
  })
  
  const [contatcs, setContatcs] = useState<ContatcModel>({
    gitHub: "",
    linkedin: "",
    facebook: "",
    email: "",
  })

  const [habilities, setHabilities] = useState<Array<HabilityModel>>([])
  const [certificates, setCertificates] = useState<Array<CertificateModel>>([])

  useEffect(() => {
    const response = JSON.parse(JSON.stringify(ProfileData))

    setProfileData({
      name: response.data.name,
      address: response.data.address,
      age: response.data.age,
      description: response.data.description
    })

    setContatcs({
      ...response.data.contacts
    })

    setHabilities(response.data.habilities)
    setCertificates(response.data.certificates)
  },[])

  return (
    <>
      <Header>
        <img src={ BackgroundHeader } alt="Background" />
        <h1>Resumo Interativo</h1>
      </Header>  
      <Profile>
        <img src={ Avatar } alt="avatar"/>
        <h1>{ profileData.name }</h1>
        <div className="profile-info">
          <InfoProfile>
            <p>Idade</p>
            <p>{ profileData.age } anos</p>
          </InfoProfile>
          <InfoProfile>
            <p>Localidade</p>
            <p>{profileData.address}</p>
          </InfoProfile>
        </div>
        <fieldset>
          <legend>Sobre mim</legend>
          <p>{ profileData.description }</p>
        </fieldset>
      </Profile>
      <Certificates>
        <div className="certificates-section">
          <header>
            <img src={ Avatar } alt="Profile" />
            <p>Certificados</p>
          </header>
          <hr />
          <section>
            <Carousel 
              itemsToShow={1} 
              isRTL={ false } 
              disableArrowsOnEnd={ false } 
              enableAutoPlay={ true }
              enableSwipe={ true }
              pagination={ false }
              autoPlaySpeed={ 10000 }
              renderArrow={({type, onClick, isEdge}) => (
                  <button className="change-certificate-button" onClick={onClick} disabled={isEdge}>
                    {
                      (type === "PREV")? <ArrowBackIosRoundedIcon /> : <ArrowForwardIosRoundedIcon />
                    }
                  </button>
                )
              }
            >
            {
              certificates.map((certificate: CertificateModel, index: number) => (
                <CertificatesCard certificateInfo={ certificate } key={ index }/>
              ))
            }
            </Carousel>
          </section>
        </div>
      </Certificates>
      <Footer>
        <div className="link-tree">
          <a href={ contatcs.gitHub } target="_blank" rel="noreferrer">
            <img src={ Github } width="50px" height="50px" alt="github" />
          </a>
          <a href={ contatcs.linkedin} target="_blank" rel="noreferrer">
            <img src={ Linkedin } width="80px" height="80px" alt="linkedin" />
          </a>
          <a href="https://outlook.live.com/" target="_blank" rel="noreferrer">
            <MailRoundedIcon/>
          </a>
          <a href={ contatcs.facebook } target="_blank" rel="noreferrer">
            <img src={ Facebook } width="80px" height="80px" alt="facebook" />
          </a>
        </div>
      </Footer>
    </>
  )
}

export default App;
