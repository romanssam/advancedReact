import {classNames} from "shared/lib/classNames/classNames";
import styles from './Modal.module.scss';
import React, {KeyboardEvent, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 200;
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
    const handleClose = useCallback( () => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [])
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        const { key } = e;
        if (key === 'Escape') {
            handleClose();
        }
    }, [handleClose])

    useEffect(() => {
        if (isOpen) {
            // @ts-ignore
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            // @ts-ignore
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }
    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay}  onClick={handleClose}>
                    <div className={styles.body} onClick={handleBodyClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};