import {classNames} from "shared/lib/classNames/classNames";
import styles from './Modal.module.scss';
import React, {ReactNode, useRef, useState} from "react";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const handleBodyClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }
    const handleClose = () => {
        if (onClose) {
            onClose();
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.bodyIsOpened]: isOpen,
        [styles.isClosing]: isClosing,
    }
    return (
        <div className={classNames(styles.Modal, mods, [className])}>
            <div className={styles.overlay}  onClick={handleClose}>
                <div className={classNames(styles.body, {}, [])} onClick={handleBodyClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};