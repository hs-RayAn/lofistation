import React from 'react';
import Hero from './components/Screens/IntroScreen'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path='/music' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
