import {classNames} from "shared/lib/classNames/classNames";
import styles from './LoginForm.module.scss';
import {Input} from "shared/ui/Input/Input";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input className={'p'} placeholder={'Логин'} />
            <Input className={'ps'} placeholder={'Пароль'} />

            <Button className={'s'} theme={ThemeButton.BACKGROUND} >Войти епта</Button>
        </div>
    );
};