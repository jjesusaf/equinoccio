import React from 'react';
import { useState } from 'react';
import Equinoccio from '../assets/img/Equinoccio.png'
const Navbar = () => {

    const [visible, setVisible] = useState("ulBar")
    const [visibleB, setVisibleB] = useState("buttomNavBar")

    const navVisible = () => {
        if (visible == "ulBar") {
            setVisible("ulBar visibility")
        } else {
            setVisible("ulBar")
        }
    }

    return (
        <div className='compNav'>
            <nav className='Nav-bar'>
                <img src={Equinoccio} alt="logo-eq" id='logoEqui' onClick={navVisible} />
                <ul className={visible}>
                    <li>Acerca</li>
                    <li>Servicios</li>
                    <li>Reportes</li>
                    <li>Experiencia</li>
                    <button className='buttomNavBar'>Contactanos</button>
                </ul>   
            </nav>
        </div>
    );
};

export default Navbar;