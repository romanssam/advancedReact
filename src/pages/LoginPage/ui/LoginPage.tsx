import {classNames} from "shared/lib/classNames/classNames";
import styles from './LoginPage.module.scss';
import {LoginForm} from "features/Auth/byUsername";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    const navigate = useNavigate();

    const handleSuccess = useCallback(() => {
        navigate(RoutePath.main);
    }, [navigate])

    return (
        <div className={classNames(styles.LoginPage, {}, [className])}>
            <LoginForm onSuccess={handleSuccess} />
        </div>
    );
};

export default LoginPage;