import React, {memo, Suspense, useCallback, useMemo} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {AppRouteProps, routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {RequireAuth} from "app/providers/router/ui/RequireAuth";

const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className={'page-wrapper'}>{route.element}</div>
        </Suspense>
        )

        return (
            <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});

export {AppRouter};