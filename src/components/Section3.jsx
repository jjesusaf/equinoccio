import React from 'react';
import Juve from '../assets/img/Juve.png'
import Javier from '../assets/img/Javier.png'
import Gerry from '../assets/img/Gerry.png'
import Image from '../assets/img/image.png'
const Section3 = () => {
    return (
        <div className='section4'>
            <svg width="453" height="684" viewBox="0 0 453 684" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg3'>
                <path d="M358.5 683C66.5 683 102.5 683 102.5 683L358.5 479.5L2.5 479.5L451 220.5L2.5 220.5L451 1" stroke="url(#paint0_radial_439_42)" />
                <defs>
                    <radialGradient id="paint0_radial_439_42" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-153.731 579.48) rotate(-17.8714) scale(773.858 41373.7)">
                        <stop stop-color="#F9CFA9" />
                        <stop offset="0.564592" stop-color="#F08D93" stop-opacity="0.543403" />
                        <stop offset="1" stop-color="#A597C1" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="section4-a">
                <div className='section4-a-1'>
                    <h2>
                        NUESTRO TRABAJO
                    </h2>
                    <h1>
                        Construyendo soluciones <br />
                        creativas para el nuevo <br />
                        internet
                    </h1>
                    <p>
                        Equinoccio ha construido diversas soluciones <br />
                        basadas en blockchain que redefinen la nueva <br />
                        forma de transmitir valor.
                    </p>
                    <button>
                        Conoce más
                    </button>
                </div>
                <div className='section4-a-2'>
                    <h1>
                        10+
                    </h1>
                    <p>
                        Proyectos lanzados
                    </p>
                    <h1>
                        1M+
                    </h1>
                    <p>
                        Gestión de activos
                    </p>
                </div>
            </div>
            <div className="section4-b">
                <h2>
                    NUESTRO EQUIPO
                </h2>
                <h1>
                    Conoce a las personas <br />
                    que impulsan tu negocio
                </h1>
                <div className="section4-b-1">
                    <div className="section4-b-1a">
                        <img src={Juve} alt="" id='juve' />
                        <p>
                            Juvenal Campos
                        </p>
                        <img src={Image} alt="" id='lin' />
                    </div>
                    <div className="section4-b-1a">
                        <img src= {Gerry} alt="" id='gerry' />
                        <p>
                            Gerardo Godfrey
                        </p>
                        <img src={Image} alt="" id='lin' />

                    </div>
                    <div className="section4-b-1a">
                        <img src={Javier} alt="" id='javier' />
                        <p>
                            Javier Hernández
                        </p>
                        <img src={Image} alt="" id='lin' />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Section3;