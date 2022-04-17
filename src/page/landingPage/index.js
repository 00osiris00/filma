import React from 'react'

//import component for landing page
import NavBar from '../../component/navBar';
import Accueil from '../../component/accueil';
import Serie from '../../component/serie';
import Film from '../../component/film';
import Anime from '../../component/anime';

const LandingPage = () => {
  return (
    <div className='container-fluid'>
      <NavBar/>
      <Accueil/>
      <Film/>
      <Serie/>
      <Anime/>
    </div>
  )
}

export default LandingPage