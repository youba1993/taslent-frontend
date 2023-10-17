import React from 'react';
import './description.css';


const Description = () => {
    return (
        <div className='destination'>
            <h1>Taslent</h1>
            <p>Village kabyle, joyau des montagnes, berceau du savoir et des traditions ancestrales.</p>

            {/* First Descrition */}
            <div className='first-description'>
                <div className='text-description'>
                    <h2>Taslent et ses Ruelles</h2>
                    <p>Taslent est un village situé sur le versant sud-est du Mont Jurjura
                        en Kabylie, dans l'Atlas Tellien au nord de l'Algérie.
                        Il se situe à 870 métres d'altitude.
                        Taslent est le centre du groupe de villages  qui forment la Région Illulen.
                        Taslent est dans la commune de Ighram.  Le chef lieu régional est Akbou,
                        qui se situe dans la vallée de la Soummam dans la wilaya de Béjaia / Vgaith.
                    </p>
                </div>
                <div className='description-image'>
                    <img alt='image description one' src='https://ik.imagekit.io/nvnw6o7ew/Taslent/projects/taslent_xmO4SXCmR.jpg?updatedAt=1697519674832' />
                    <img alt='image description two' src='https://ik.imagekit.io/nvnw6o7ew/Taslent/Village_taslent_Rz9Yl2TN0.jpg?updatedAt=1679463074443' />
                </div>
            </div>

            {/* Second Descrition */}
            <div className='second-description'>
                <div className='text-description'>
                    <h2>Lorsque la brume rampe sur les cîmes ...</h2>
                    <p>... et que Lakhrif, la saison des figues fraîches, tire vers sa fin,
                        alors les gros nuages commencent à recouvrir les montagnes et la brume à ramper dans les canyons, dans la vallée, et sur les collines.
                        La saison des feuilles mortes arrive chez nous ...
                        L'automne est bien là
                        ... la saison des labours et des travaux champêtres nous arrive avec la fraîcheur de la terre humide et les feuilles voltigeant au vent du nord .
                        De nouvelles touffes d'herbe tendre font leur apparition ça et là le long des haies et en bordure des champs.
                        Des paquerêttes timides épanouissent leurs pétales au soleil doux d'octobre.
                    </p>
                </div>
                <div className='description-image'>
                    <img alt='image description one' src='https://ik.imagekit.io/nvnw6o7ew/Taslent/olive_-KgnwCHxG?updatedAt=1679204242151' />
                    <img alt='image description two' src='https://ik.imagekit.io/nvnw6o7ew/Taslent/projects/carroussel4_2lr8thORT.jpg?updatedAt=1679708571028' />
                </div>
            </div>
        </div>
    )
}

export default Description;