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
                        navigate.
                    </p>
                    <p className='info-p'>
                        I’ve graduated with a Masters in Mechanical Engineering from
                        King’s College London. I’ve always been fascinated with computer
                        programming and design, and I’m a bit of a math nerd. I’ve taught
                        over 80 students GCSE and A-level Maths privately in the past few
                        years.
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
