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
  NameProfile, 
  InfoProfile, 
  Certificates,
  Habilities,
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
import Experiences from '../../Components/Experiences'

const App: React.FC = () =>  {

  const [profileData, setProfileData] = useState<ProfileModel>({
    title: "",
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
      title: response.data.title,
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
        <img className="backgorund-image" src={ BackgroundHeader } alt="Background" />
        <div className="header-info">
          <div className="header-title">
            <p className="show-only-browser">Marcos Moreira</p>
            <h1>Resumo Interativo</h1>
          </div>
          <img className="profile-image" src={ Avatar } alt="avatar"/>
        </div>
      </Header>  
      <Profile>
        <h1 className="show-only-mobile">{ profileData.name }</h1>
        <div className="profile-header">
          <h1>Perfil</h1>
          <p>{ profileData.title }</p>
        </div>
        <div className="profile-info">
          <NameProfile>
            <p>Nome</p>
            <p>{ profileData.name }</p>
          </NameProfile>
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
      <Habilities>
        <Experiences habilities={ habilities } />
      </Habilities>
      <Footer>
        <div className="link-tree">
          <a href={ contatcs.gitHub } target="_blank" rel="noreferrer">
            <img src={ Github } width="50px" height="50px" alt="github" />
          </a>
          <a href={ contatcs.linkedin} target="_blank" rel="noreferrer">
            <img src={ Linkedin } width="80px" height="80px" alt="linkedin" />
          </a>
          <a href={`mailto:${ contatcs.email }?subject=Email%20para%20contato`} target="_blank" rel="noreferrer">
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
