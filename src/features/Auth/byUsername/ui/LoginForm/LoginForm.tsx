import styles from './LoginForm.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {Input} from "shared/ui/Input/Input";
import {classNames} from "shared/lib/classNames/classNames";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback(() => {
    //
    }, [])

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input value={username} onChange={onChangeUsername} className={'p'} placeholder={'Логин'} />
            <Input value={password} onChange={onChangePassword} className={'ps'} placeholder={'Пароль'} />

            <Button onClick={onLoginClick} className={'s'} theme={ThemeButton.BACKGROUND} >Войти епта</Button>
        </div>
    );
});