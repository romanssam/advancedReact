import React, {useEffect, useState} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        if (theme) {
            document.body.setAttribute('data-theme', `${theme}`)
        }
    }, [theme])

    return (
        <div className='app'>
            <Navbar />
            <div className={'content-page'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;