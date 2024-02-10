import styles from './LoginForm.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {Input} from "shared/ui/Input/Input";
import {classNames} from "shared/lib/classNames/classNames";
import {Portal} from "shared/ui/Portal/Portal";
import {Toast} from "shared/ui/Snackbar/Toast";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
    const dispatch =  useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);


    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}));

        if (result.meta.requestStatus === 'fulfilled')  {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password])

    return (
        <>
            <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
                <div className={classNames(styles.LoginForm, {}, [className])}>
                    <Text title={'Войти'} />

                    <Input value={username} onChange={onChangeUsername} className={'p'} placeholder={'Логин'} />
                    <Input value={password} onChange={onChangePassword} className={'ps'} placeholder={'Пароль'} />

                    <Button disabled={isLoading} onClick={onLoginClick} className={'s'} theme={ThemeButton.BACKGROUND} >Войти епта</Button>
                </div>
                <Portal>
                    {error && <Toast autoHideDuration={3000} open={true} horizontal={'right'} vertical={'top'} message={<Text text={error} theme={TextTheme.ERROR} />}/>}
                </Portal>
            </DynamicModuleLoader>
        </>
    );
});

export default LoginForm;