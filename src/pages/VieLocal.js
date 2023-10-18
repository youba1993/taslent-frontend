import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Traditions from '../components/Traditions/Traditions'
import Assemble from '../components/Assemble/Assemble'
import Projets from '../components/Projets/Projets'
import Festivite from '../components/Festivite/Festivite'
const  VieLocal = () => {
  return (
    <>
    <HeroSection page="VieLocal" cName="hero-mid"/>
    <Assemble />
    <Projets />
    <Festivite />
    <Traditions />
    </>
  )
}

export default VieLocal