import React from 'react'

const VisiteCard = ({ image, heading, text }) => {
    return (
        <div className='v-card'>
            <div className='visite-image'>
                <img alt='visite image' src={image} />
            </div>

            <h4>{heading}</h4>
            <p>{text}</p>

        </div>
    )
}

export default VisiteCard