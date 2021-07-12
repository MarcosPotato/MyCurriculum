import React from 'react'

import { 
  Header, 
  Profile, 
  InfoProfile, 
  Certificates,
  Footer
} from './style'

import Avatar from '../../Assets/img/profile.png'
import BackgroundHeader from '../../Assets/img/initial-background.png'

import Github from '../../Assets/logos/github.svg'
import Facebook from '../../Assets/logos/facebook.svg'
import Linkedin from '../../Assets/logos/linkedin.svg'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import MailRoundedIcon from '@material-ui/icons/MailRounded'

import CertificatesCard from '../../Components/CertificatesCard'

function App() {
  return (
    <>
      <Header>
        <img src={ BackgroundHeader } alt="Background" />
        <h1>Resumo Interativo</h1>
      </Header>  
      <Profile>
        <img src={ Avatar } alt="Profile Photo" />
        <h1>Marcos Moreira</h1>
        <div className="profile-info">
          <InfoProfile>
            <p>Idade</p>
            <p>20 anos</p>
          </InfoProfile>
          <InfoProfile>
            <p>Localidade</p>
            <p>Salto - SP, Brasil</p>
          </InfoProfile>
        </div>
        <fieldset>
          <legend>Sobre mim</legend>
          <p>Sou analista de suporte jr. mas nas horas vagas sou Desenvolvedor Web.<br/>
          Me familiarizei bastante com javascript devido ao poder de fogo que ele te dá, bastando apenas a sua criatividade ser o seu limitador.<br/>
          Desde pequeno gosto da área de tecnologia e estou caminhando para aprimorar meus conhecimento e me tornar um bom Dev.</p>
        </fieldset>
      </Profile>
      <Certificates>
        <div className="certificates-section">
          <header>
            <img src={ Avatar } alt="Profile Photo" />
            <p>Certificados</p>
          </header>
          <hr />
          <section>
            <button>
              <ArrowBackIosRoundedIcon/>
            </button>
            <CertificatesCard/>
            <button>
              <ArrowForwardIosRoundedIcon />
            </button>
          </section>
        </div>
      </Certificates>
      <Footer>
        <div className="link-tree">
          <a href="https://github.com/MarcosPotato" target="_blank">
            <img src={ Github } width="50px" height="50px" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/mrbatata/" target="_blank">
            <img src={ Linkedin } width="80px" height="80px" alt="linkedin" />
          </a>
          <a>
            <MailRoundedIcon/>
          </a>
          <a href="https://www.facebook.com/marcos.moreira.102977/" target="_blank">
            <img src={ Facebook } width="80px" height="80px" alt="facebook" />
          </a>
        </div>
      </Footer>
    </>
  )
}

export default App;
