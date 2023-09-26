import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <>
            <nav className={classNames(styles.Navbar, {}, [className])}>
                <ThemeSwitcher />
                <AppLink to={'/'}>Main page</AppLink>
                <AppLink to={'/about'}>About page</AppLink>
            </nav>
        </>
    );
};