import {classNames} from "shared/lib/classNames/classNames";
import styles from './UserInfo.module.scss';
import {useCallback} from "react";
import {Text} from "shared/ui/Text/Text";

interface UserInfoProps {
    className?: string;
    username?: string;
    role?: string;
}

export const UserInfo = (props: UserInfoProps) => {
    const { className, username, role} = props;

    const usernameTemplate = useCallback(() => {
        return (
            <div className={styles.wrapper}>
                <Text text={'username'} />
                <span>{username}</span>
            </div>
        )
    }, [username]);
    const roleTemplate = useCallback(() => {
        return (
            <div className={styles.wrapper}>
                <Text text={'role'} />
                <span>{role}</span>
            </div>
        )
    }, [role]);

    return (
        <div className={classNames(styles.UserInfo, {}, [className])}>
            {username && usernameTemplate()}
            {role && roleTemplate()}
        </div>
    );
};