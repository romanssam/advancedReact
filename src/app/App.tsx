import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className='app' data-theme={theme}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    );
};

export default App;
