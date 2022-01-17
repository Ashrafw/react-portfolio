// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import MainLanding from './components/MainLanding';
import EndFooter from './components/EndFooter';
import { useTheme } from './hooks/useTheme';
function App() {
    const { mode } = useTheme();
    return (
        <div className={`App ${mode}`}>
            <NavBar />
            <MainLanding />
            <Projects />
            <About />
            <EndFooter />
        </div>
    );
}

export default App;
