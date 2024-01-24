import {classNames} from "shared/lib/classNames/classNames";
import styles from './Input.module.scss';

interface InputProps {
    className?: string;
    placeholder?: string;
}

export const Input = (props: InputProps) => {
    const { className, placeholder } = props
    return (
        <input type="text" className={className} placeholder={placeholder} />
    );
};