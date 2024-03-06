import React, {memo, useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {LoginModal} from "features/Auth/byUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserRole, getUserUsername, userActions} from "entities/User";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {UserInfo} from "widgets/UserInfo";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(getUserUsername);
    const role = useSelector(getUserRole);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        navigate(RoutePath.login);
    }, [dispatch])

    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher />

            <UserInfo username={username} role={role} />
            <Button theme={ThemeButton.BACKGROUND}  onClick={onLogout}>Выйти</Button>
        </nav>
    )
});