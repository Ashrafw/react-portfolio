import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='about-content'>
                    <h1>About me</h1>
                    {/* <p>
                        In my web development journey, I focus on the users by developing
                        well-designed interfaces that are both advanced and simple to
                        navigate. Front-end web development is a true passion of mine. I
                        truly enjoy the ever-changing landscape that requires constant
                        learning and application.
                    </p>
                    <p className='info-p'>
                        I have graduated with a Masters in Mechanical Engineering from
                        King’s College London. I have a deep passion for computer
                        programming and design. I'm a bit of a math nerd and successfully
                        taught GCSE and A-level Maths to over 80 students privately in the
                        past few years.
                    </p> */}
                    <p className='info-p'>
                        After discovering how web development combines design elements and
                        technical complexity to produce a product that can be moulded into
                        anything a user/customer wishes, I became a web developer. I love
                        the freedom it provides, where an idea becomes a design, and from
                        a design to implementing coding stacks that develop a
                        pixel-perfect product.
                    </p>
                    <p className='info-p'>
                        Front-end web development has become a true passion of mine. I
                        have been fortunate to have a wide range of experiences that I can
                        call on during this journey, experiences and skills acquired from
                        working in research, education, engineering, and sales.
                    </p>
                    <p className='info-p'>
                        <span>
                            I am looking for the right opportunity to launch my web
                            development career and a working culture that will allow me to
                            progress my knowledge and skills in this field.
                        </span>
                    </p>
                    <p>My development knowledge include the following:</p>
                    <div className='skills'>
                        <i className='fab fa-html5'></i>
                        <i className='fab fa-css3-alt'></i>
                        <i className='fab fa-react'></i>
                        <i className='fab fa-js-square'></i>
                        <i className='fab fa-sass'></i>
                        <i className='fab fa-bootstrap'></i>
                        {/* <i className='fab fa-figma'></i> */}
                        {/* <i className='fab fa-node-js'></i> */}
                        <i>
                            <img src='../../img/Git-Icon.png' alt='' srcset='' />
                        </i>
                        <i>
                            <img
                                className='figma-img'
                                src='../../img/figma-logo.png'
                                alt=''
                                srcset=''
                            />
                        </i>
                        <i>
                            <img src='../../img/logo-vertical.png' alt='' srcset='' />
                        </i>
                    </div>
                    {/* <h4>Contact me</h4>
                    <div className='links'>
                        <a href='https://github.com/Ashrafw'>
                            <i className='fab fa-github'></i>
                        </a>
                        <a href='mailto: ashrafweheliye25@gmail.com'>
                            <i className='fas fa-envelope'></i>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
