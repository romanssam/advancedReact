import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const { theme } = useTheme()

    return (
        <div className='app' data-theme={theme}>
            <Navbar />
            <div className={'content-page'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
