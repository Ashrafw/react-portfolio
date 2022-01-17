import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import light from '../assets/light.svg';
import dark from '../assets/dark.svg';
import './NavBar.css';

import { useTheme } from '../hooks/useTheme';

export default function NavBar() {
    const { mode, changeMode } = useTheme();

    // const [mode, setMode] = useState('light');
    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light');
        // mode === 'light' ? setMode('dark') : setMode('light');
    };
    return (
        <div className={`navbar ${mode}`}>
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
                    <a className='nav-link' href='https://github.com/Ashrafw'>
                        Github
                    </a>
                    <a className='nav-link' href='mailto: ashrafweheliye25@gmail.com'>
                        Contact
                    </a>
                </div>
                <div className='mode' onClick={toggleMode}>
                    <img
                        src={light}
                        alt=''
                        srcset=''
                        className={
                            mode === 'light' ? 'light-mode icon' : 'light-mode icon move'
                        }
                    />
                    <img
                        src={dark}
                        alt=''
                        srcset=''
                        className={
                            mode === 'dark' ? 'dark-mode icon move' : 'dark-mode icon '
                        }
                    />
                </div>
            </div>
        </div>
    );
}
