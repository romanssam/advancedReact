
import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from './Avatar.module.scss';
import {CSSProperties, useMemo} from "react";

interface AvatarProps {
    className?: string;
    src: string;
    alt: string;
    size?: number;
    objectFit?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, alt, size, objectFit } = props;

    const mods: Mods = {};
    const style = useMemo(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size])

    return (
        <img src={src} style={style} className={classNames(styles.Avatar, mods, [className])} alt={alt}/>
    );
};