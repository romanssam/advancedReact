import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import React from "react";
import {useLocation, Navigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let isAuth = useSelector(getUserAuthData);
    let location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
    }

    return children;
}