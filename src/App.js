// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import MainLanding from './components/MainLanding';
import EndFooter from './components/EndFooter';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <MainLanding />
            <About />
            <Projects />
            <EndFooter />
        </div>
    );
}

export default App;
