import {classNames} from "shared/lib/classNames/classNames";
import styles from './LoginModal.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import {Suspense} from "react";
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";
import {LoginFormLazy} from "../LoginForm/LoginForm.lazy";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(styles.LoginModal, {}, [className])}>
            <Suspense fallback={<PageLoader/>}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};