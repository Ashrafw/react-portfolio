import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav-logo'>
                    <a href='/'>
                        <h1>Ashraf</h1>
                    </a>
                </div>
                <div className='nav-links'>
                    <a className='nav-link' href='#about'>
                        About
                    </a>
                    <a className='nav-link' href='#projects'>
                        Projects
                    </a>
                    <a className='nav-link' href='mailto: ashrafweheliye25@gmail.com'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
