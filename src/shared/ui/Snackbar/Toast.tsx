import {classNames} from "shared/lib/classNames/classNames";
import styles from './Snackbar.module.scss';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import {SyntheticEvent, useCallback, useRef, useState} from "react";

interface SnackbarProps extends SnackbarOrigin {
    className?: string;
    open: boolean;
    message: string;
    autoHideDuration: number;
    onClose?: () => void;
}

export const Toast = (props: SnackbarProps) => {
    const [close, setIsClose] = useState(false)
    const timeRef =  useRef<ReturnType<typeof setTimeout>>();
    const {
            open,
            horizontal,
            vertical,
            message,
            autoHideDuration,
            onClose
        } = props;
    const handleClose =  useCallback((event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        if (onClose) {
            setIsClose(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClose(false);
            }, 300)
        }
    }, [setIsClose]);

    return (
        <Snackbar onClose={handleClose} autoHideDuration={autoHideDuration} open={open} anchorOrigin={{vertical, horizontal}} message={message} />
    );
};