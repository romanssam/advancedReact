import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {LoginModal} from "features/Auth/byUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [])
    const closeModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <nav className={classNames(styles.Navbar, {}, [className])}>
                <ThemeSwitcher />

                <Button theme={ThemeButton.BACKGROUND}  onClick={onLogout}>Выйти</Button>
            </nav>
        )
    }

    return (
        <>
            <nav className={classNames(styles.Navbar, {}, [className])}>
                <ThemeSwitcher />

                <Button theme={ThemeButton.BACKGROUND}  onClick={toggleModal}>Войти</Button>

                <LoginModal isOpen={isAuthModal} onClose={closeModal} />
            </nav>
        </>
    );
};