import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Mission from '../components/MissionSection/Mission'
import Reglement from '../components/Reglement/Reglement'
import Famille from '../components/Famille /Famille'
import Traditions from '../components/Traditions/Traditions'

const  Village = () => {
  return (
    <>
    <HeroSection page="Village" cName="hero-mid" />
    <Mission />
    <Reglement />
    <Famille />
    <Traditions />
    </>
  )
}

export default Village