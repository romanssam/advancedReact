import {classNames} from "shared/lib/classNames/classNames";
import styles from './Input.module.scss';
import {ChangeEvent, InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, placeholder, type = 'text', ...other } = props
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }
    return (
        <input type={type} className={className} placeholder={placeholder} onChange={onChangeHandler} {...other} />
    );
});