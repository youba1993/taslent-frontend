import React, { useState } from 'react'
import { links } from '../../data/navLinks';
import './navbarStyles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='navbarItems'>
            <Link className='navbar-logo' to='/'><h1>ⵜⴰⵙⵍⴻⵏⵜ</h1></Link>
            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? 'fas  fa-times' : 'fas  fa-bars'}></i>
            </div>

            <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
                {links.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navbar