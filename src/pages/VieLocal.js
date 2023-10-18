import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Traditions from '../components/Traditions/Traditions'
import Assemble from '../components/Assemble/Assemble'
import Projets from '../components/Projets/Projets'
const  VieLocal = () => {
  return (
    <>
    <HeroSection page="VieLocal" cName="hero-mid"/>
    <Assemble />
    <Projets />
    <Traditions />
    </>
  )
}

export default VieLocal