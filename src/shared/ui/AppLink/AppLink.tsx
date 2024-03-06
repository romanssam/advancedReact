import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import {NavLinkProps, NavLink} from "react-router-dom";
import React, {FC, memo, PropsWithChildren} from "react";

interface AppLinkProps extends NavLinkProps {
    className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> =  memo((props) => {
    const {to, className, children, ...otherProps} = props

    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                [
                    isActive ? styles.active : "",
                    styles.AppLink,
                ].join(" ")}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});