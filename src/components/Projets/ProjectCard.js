import React from 'react';
import "./projets.css"
import ImageSlider from './ImageSlider';


const ProjectCard = ({ image, heading, text }) => {
    return (
        <div className='p-card'>
            <div className='project-image'>
                {/* <img alt='visite' src={image} /> */}
                <ImageSlider slides={image} />
            </div>

            <h4>{heading}</h4>
            <p>{text}</p>

        </div>
    )
}

export default ProjectCard