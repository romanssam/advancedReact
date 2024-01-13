import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";

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

                <Modal isOpen={isAuthModal} onClose={closeModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consequatur debitis doloremque eius eveniet, ipsam ipsum laborum, libero, nemo officiis optio quasi soluta veniam vero. Ipsam maxime neque temporibus!
                </Modal>
            </nav>
        </>
    );
};