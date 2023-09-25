import React, {Suspense, useContext, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className='app' data-theme={theme}>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <AppRouter />
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    );
};

export default App;
