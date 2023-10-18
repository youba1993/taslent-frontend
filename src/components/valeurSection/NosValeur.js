import React from 'react'
import './nosvaleur.css'
import { ourValues } from '../../data/OurValues'

function NosValeur() {
    
    return (

        <div className='valeur'>
            <h1>Nos Valeurs</h1>
            <div className='valeurcard'>
                {ourValues.map((valeur, index) =>
                    <div key={index} className='va-card'>
                        <div className='valeur-image'>
                            <img alt='valeur' src={valeur.image} />
                        </div>
                        <h4>{valeur.title}</h4>
                        <p>"{valeur.quote}"</p>
                        <h6>---{valeur.person}</h6>
                    </div>
                )}
            </div>
        </div>


    )
}

export default NosValeur

