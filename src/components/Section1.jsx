import React from 'react';

const Section1 = () => {
    return (
        <div className='section1'>
            <div className='section1-a'>
                <div className='s1-a-1'>
                    <h2>
                        DESCUBR3 3QUINOCCIO
                    </h2>
                    <h1>
                        Impulsamos la adopción de <br />
                        nuevas tecnologías
                    </h1>
                    <p>
                        La tecnología blockchain brinda mayor seguridad, transparencia y <br /> rapidez en las transferencias de valores e información, lo cual, permite <br />simplificar procesos y reducir costos para empresas, gobiernos y <br /> personas.
                    </p>
                </div>
                <svg width="448.5" height="682" viewBox="0 0 453 684" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg2'>
                    <path d="M94.5 1C386.5 1 350.5 1 350.5 1L94.5 204.5H450.5L2 463.5H450.5L2 683" stroke="url(#paint0_radial_303_535)" />
                    <defs>
                        <radialGradient id="paint0_radial_303_535" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(606.731 104.52) rotate(162.129) scale(773.858 41373.7)">
                            <stop stop-color="#F9CFA9" />
                            <stop offset="0.564592" stop-color="#F08D93" stop-opacity="0.543403" />
                            <stop offset="1" stop-color="#A597C1" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className='section1-b'>
                <h2>
                    NUESTROS SERVICIOS
                </h2>
                <div className='section1-b1'>
                    <div className='section1-b1-a'>
                        <h1>
                            Consultoria Web 3
                        </h1>
                        <p>
                            Analizamos problemas, generamos <br />
                            soluciones aplicando tecnología blockchain y <br /> vinculamos a los profesionales necesarios <br />
                            para su desarrollo e implementación.

                        </p>
                        <button>
                            Conoce más
                        </button>
                    </div>
                    <div className='section1-b1-a'>
                        <h1>
                            Gestión Activos Digitales
                        </h1>
                        <p>
                            Evaluamos el perfil de inversionistas, <br /> generamos portafolios de acuerdo a sus <br /> necesidades y emitimos reportes sobre la <br /> evolución del valor de los activos.
                        </p>
                        <button>
                            Conoce más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;