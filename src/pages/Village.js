import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Mission from '../components/MissionSection/Mission'
import Reglement from '../components/Reglement/Reglement'
import Famille from '../components/Famille /Famille'
import NosValeur from '../components/valeurSection/NosValeur'
import Histoire from '../components/Histoire/Histoire'

const  Village = () => {
  return (
    <>
    <HeroSection page="Village" cName="hero-mid" />
    <NosValeur />
    <Mission />
    <Histoire />
    <Reglement />
    <Famille />
    </>
  )
}

export default Village