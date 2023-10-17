import React from 'react';
import VisiteCard from './VisiteCard';
import { cards } from '../../data/visiteCards';
import './visiter.css';
const Visiter = () => {
    return (
        <div className='visiter'>
            <h1>Thadarth</h1>
            <p>Découvrez la quiétude d'un village niché dans les montagnes kabyles,
                où le savoir et les traditions anciennes s'entrelacent harmonieusement.
                Chaque rue raconte une histoire, chaque coin dévoile un trésor de l'héritage kabyle.
                Bienvenue dans un lieu où la simplicité rencontre la richesse culturelle,
                et où chaque journée est une invitation à explorer la beauté de la tradition.</p>
            <div className='visitecard'>
                {cards.map((card, index) =>
                    <VisiteCard key={index} image={card.image} heading={card.heading} text={card.text}
                    />)}

            </div>
        </div>
    )
}

export default Visiter