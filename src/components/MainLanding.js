import React from 'react';
import './MainLanding.css';

const webImages = [
    { src: '../../img/ProjWebM/projWebGym.png', ani: 'active', list: 'que' },
    { src: '../../img/ProjWebM/projWebMovie.png', ani: '', list: 'que' },
    { src: '../../img/ProjWebM/projWebReal.png', ani: '', list: 'que' },
    { src: '../../img/ProjWebM/projWebRes.png', ani: '', list: 'que' },
    { src: '../../img/ProjWebM/projWebNews.png', ani: '', list: 'que' },
];

export default function MainLanding() {
    return (
        <div className='main-landing'>
            <div className='container'>
                <div className='landing-info'>
                    <h1>Hi, I'm Ashraf</h1>
                    <h3>I'm a front-end web developer based in London, UK.</h3>
                    <p>
                        I strive to develop pixel-perfect, user-focused and seamless
                        websites. I use HTML, CSS, JavaScript, React and many more stacks
                        to develop responsive websites and web apps that provide users
                        with the best experience.
                    </p>
                    {/* <div className='links'>
                        <a href='https://github.com/Ashrafw'>
                            <i className='fab fa-github'></i>
                        </a>
                        <a href='mailto: ashrafweheliye25@gmail.com'>
                            <i className='fas fa-envelope'></i>
                        </a>
                    </div> */}
                    {/* <p>My development knowledge include the following:</p>
                    <div className='skills'>
                        <i className='fab fa-html5'></i>
                        <i className='fab fa-css3-alt'></i>
                        <i className='fab fa-react'></i>
                        <i className='fab fa-js-square'></i>
                        <i className='fab fa-sass'></i>
                    </div> */}
                    {/* <div className='info-2'>
                         <p>
                            I strive to develop pixel-perfect, user-focused and seamless
                            websites. I use HTML, CSS, JavaScript and React to develop
                            responsive websites and web apps that can provide users with
                            the best experience.
                        </p>
                        <p>
                            In my web development journey, I focus on the users by
                            developing well-designed interfaces that are both advanced and
                            simple to navigate. Front-end web development is a true
                            passion of mine. I truly enjoy the ever-changing landscape
                            that requires constant learning and application.
                        </p> 

                         <div className='links landing'>
                            <a href='https://github.com/Ashrafw'>
                                <i className='fab fa-github'></i>
                            </a>
                            <a href='mailto: ashrafweheliye25@gmail.com'>
                                <i className='fas fa-envelope'></i>
                            </a>
                        </div> 
                    </div> */}
                </div>
                <div className='landing-img col-2'>
                    <img
                        className='img-laptop'
                        src='../../img/mac2.png'
                        alt=''
                        srcSet=''
                    />
                    <div className='img-abs img-1'>
                        {webImages.map((imgweb) => (
                            <img key={imgweb.src} src={imgweb.src} alt='' srcSet='' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
