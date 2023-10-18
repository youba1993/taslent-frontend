import React from 'react'
import './nosvaleur.css'

function NosValeur({ valeur }) {
    return (

        <div className='v-card'>
            <div className='valeur-image'>
                <img alt='valeur' src={valeur.image} />
            </div>
            <h4>{valeur.title}</h4>
            <p>"{valeur.quote}"</p>
            <h6>---{valeur.person}</h6>
        </div>

    )
}

export default NosValeur

