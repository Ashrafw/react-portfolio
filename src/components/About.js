import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='about-content'>
                    <h1>About me</h1>
                    <p>
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
                    </p>

                    <div className='links'>
                        <a href='https://github.com/Ashrafw'>
                            <i className='fab fa-github'></i>
                        </a>

                        {/* <a className='cv' href='/AshrafCV.pdf'>
                            CV
                        </a> */}
                        <a href='mailto: ashrafweheliye25@gmail.com'>
                            <i className='fas fa-envelope'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
