import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, FC, memo} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
}

export const Button:FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});