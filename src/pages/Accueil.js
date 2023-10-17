import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Description from '../components/Description.js/Description'
import Visiter from '../components/Visiter/Visiter'

const  Accueil = () => {
  return (
    <>
    <HeroSection page="Accueil" cName="hero"/>
    <Description />
    <Visiter />
    </>
  )
}

export default Accueil