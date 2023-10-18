import React from 'react'
import './projets.css'
import { pcards } from '../../data/projectCard'
import ProjectCard from './ProjectCard'

function Projets() {
    return (
        <div className='projets'>
            <h1>Nos Projets</h1>
            <div className='projectcard'>
                {pcards.map((card, index) =>
                    <ProjectCard key={index} image={card.image} heading={card.heading} text={card.text}
                    />)}

            </div>
        </div>
    )
}

export default Projets