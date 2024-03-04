import React, {useEffect, useLayoutEffect} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar, sidebarActions} from "widgets/Sidebar";
import {getUserAuthData, getUserInited, userActions} from "entities/User";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getUserAuthData);
    const inited = useSelector(getUserInited);

    useLayoutEffect(() => {
        dispatch(sidebarActions.initCollapsed());
    }, [dispatch]);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    useEffect(() => {
        if (theme) {
            document.body.setAttribute('data-theme', `${theme}`)
        }
    }, [theme])

    return (
        <div className='app'>
            {isAuth && <Navbar />}
            <div className={'content-page'}>
                {isAuth && <Sidebar />}
                {inited && <AppRouter />}
            </div>
        </div>
    );
};

export default App;