import styles from './LoginForm.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {Input} from "shared/ui/Input/Input";
import {classNames} from "shared/lib/classNames/classNames";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "features/Auth/byUsername/model/services/loginByUsername/loginByUsername";
import {Portal} from "shared/ui/Portal/Portal";
import {Toast} from "shared/ui/Snackbar/Toast";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password])

    return (
        <>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <Text title={'Войти'} />

                <Input value={username} onChange={onChangeUsername} className={'p'} placeholder={'Логин'} />
                <Input value={password} onChange={onChangePassword} className={'ps'} placeholder={'Пароль'} />

                <Button disabled={isLoading} onClick={onLoginClick} className={'s'} theme={ThemeButton.BACKGROUND} >Войти епта</Button>
            </div>
           <Portal>
               {error && <Toast autoHideDuration={3000} open={true} horizontal={'right'} vertical={'top'} message={<Text text={error} theme={TextTheme.ERROR} />}/>}
           </Portal>
        </>
    );
});