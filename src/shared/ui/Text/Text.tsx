import {classNames} from "shared/lib/classNames/classNames";
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    textAlign?: TextAlign;
}
export const Text = (props: TextProps) => {
    const { className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        textAlign = TextAlign.LEFT
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
    }

    return (
        <div className={classNames(styles.Text, mods, [className])}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};