import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ProjectCard from '../components/Projets/ProjectCard'
import { ascards, clcards } from '../data/Association'
import "../components/Projets/projets.css"
const Clubs = () => {
  return (
    <>
      <HeroSection page="Clubs" cName="hero-mid" />
      <div className='projets'>
        <h1>Clubs</h1>
        <div className='projectcard'>
          {clcards.map((card, index) =>
            <ProjectCard key={index} image={card.image} heading={card.heading} text={card.text}  />
          )}

        </div>
      </div>
      <div className='projets'>
        <h1>Associations</h1>
        <div className='projectcard'>
          {ascards.map((card, index) =>
            <ProjectCard key={index} image={card.image} heading={card.heading} text={card.text}
            />)}

        </div>
      </div>
    </>
  )
}

export default Clubs