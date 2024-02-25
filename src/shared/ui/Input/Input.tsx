import {classNames} from "shared/lib/classNames/classNames";
import styles from './Input.module.scss';
import {ChangeEvent, InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'type'>
interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, placeholder, type = 'text', readonly = false, ...other } = props
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }
    return (
        <input type={type} readOnly={readonly} value={value} className={classNames(styles.Input, {}, [className])} placeholder={placeholder} onChange={onChangeHandler} {...other} />
    );
});