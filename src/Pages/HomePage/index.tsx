import React from 'react'

import { 
  Header, 
  Profile, 
  InfoProfile, 
  Certificates
} from './style'

import Avatar from '../../Assets/img/profile.png'
import BackgroundHeader from '../../Assets/img/initial-background.png'

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
        <header>
          <img src={ Avatar } alt="Profile Photo" />
          <p>Certificados</p>
        </header>
        <hr />
        <section>
          <button>-</button>
          <CertificatesCard />
          <button>+</button>
        </section>
      </Certificates>
    </>
  )
}

export default App;
