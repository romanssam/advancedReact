import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from './ButtonsGroup.module.scss';
import {memo, ReactNode} from "react";

export enum ButtonAlign {
    LEFT = 'left',
    RIGHT = 'right'
}

interface ButtonsGroupProps {
    className?: string;
    children?: ReactNode;
    align?: ButtonAlign;
}

export const ButtonsGroup = memo((props: ButtonsGroupProps) => {
    const { className, children, align = ButtonAlign.RIGHT } = props;

    const mods: Record<string, boolean> = {
        [styles[align]]: true,
    }

    return (
        <div className={classNames(styles.ButtonsGroup, mods, [className])}>
            {children}
        </div>
    );
});