import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfilePageHeader.module.scss';
import {Text} from "shared/ui/Text/Text";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={'Профиль'} />
            <Button theme={ThemeButton.OUTLINE}>Редактировать</Button>
        </div>
    );
};