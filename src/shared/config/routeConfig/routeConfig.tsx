import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";
import {LoginPage} from "pages/LoginPage";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    LOGIN = 'login',
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    //last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',


    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
        authOnly: true
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
        authOnly: true
    }
}