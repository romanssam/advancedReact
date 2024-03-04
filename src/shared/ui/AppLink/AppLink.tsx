import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import React, {FC, memo, PropsWithChildren} from "react";

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> =  memo((props) => {
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
});