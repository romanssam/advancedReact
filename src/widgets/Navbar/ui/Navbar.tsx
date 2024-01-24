import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {LoginModal} from "features/Auth/byUsername";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [])
    const closeModal = useCallback(() => {
        setIsAuthModal(false);
    }, [])
    return (
        <>
            <nav className={classNames(styles.Navbar, {}, [className])}>
                <ThemeSwitcher />

                <Button theme={ThemeButton.BACKGROUND}  onClick={toggleModal}>Открыть модалку</Button>

                <LoginModal isOpen={isAuthModal} onClose={closeModal} />
            </nav>
        </>
    );
};