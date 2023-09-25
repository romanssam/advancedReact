import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import React, {FC, PropsWithChildren} from "react";

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {to, className, children, ...otherProps} = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};