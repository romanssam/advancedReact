import React, {Suspense, useContext, useState} from 'react';
import Counter from "./components/Counter";
import { Routes, Route, Link } from "react-router-dom";
import './styles/index.scss'
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className='app' data-theme={theme}>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy />} />
                    <Route path='/about' element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    );
};

export default App;
