import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ProjectCard from '../components/Projets/ProjectCard'
import { ascards, clcards } from '../data/Association'

const Clubs = () => {
  return (
    <>
      <HeroSection page="Clubs" cName="hero-mid" />
      <div className='tradition'>
        <h1>Clubs</h1>
        <div className='projectcard'>
          {clcards.map((card, index) =>
            <ProjectCard key={index} image={card.image} heading={card.heading} text={card.text}
            />)}

        </div> 
      </div>
      <div className='tradition'>
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