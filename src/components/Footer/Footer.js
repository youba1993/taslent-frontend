import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='top'> 
            <div>
                <h1>ⵜⴰⵙⵍⴻⵏⵜ</h1>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'> 
            <div>
                <h4>Village</h4>
                <a href='/village'>Règlement</a>
                <a href='/village'>Familles</a>
                <a href='/village'>Tradition</a>
            </div>

            <div>
                <h4>Vie Locale</h4>
                <a href='/vielocale'>Assemblées</a>
                <a href='/vielocale'>Festivités</a>
                <a href='/vielocale'>Projets</a>
            </div>

            <div>
                <h4>Actualités</h4>
                <a href='/acctualite'>Magazine</a>
                <a href='/acctualite'>Culture & Environnement</a>
                <a href='/acctualite'>Sports</a>
            </div>

            <div>
                <h4>Autres</h4>
                <a href='/clubs'>Clubs</a>
                <a href='/contact'>Contacts</a>
                <a href='/'>Terms of Service</a>
                <a href='/'>Privacy Policy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer