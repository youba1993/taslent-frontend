import React from 'react'
import './tradition.css'
import { tcards } from '../../data/Traditioncard'
import ProjectCard from '../Projets/ProjectCard'

const Traditions = () => {
  return (
    <div className='tradition'>
      <h1>Nos Traditions et Festivités</h1>
      <div className='projectcard'>
                {tcards.map((card, index) =>
                    <ProjectCard key={index} image={card.image} heading={card.heading} text={card.text}
                    />)}

            </div>
    </div>
  )
}

export default Traditions