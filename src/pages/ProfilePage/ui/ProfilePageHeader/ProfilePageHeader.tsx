import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfilePageHeader.module.scss';
import {Text} from "shared/ui/Text/Text";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getProfileReadonly, profileActions} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {memo, useCallback} from "react";
import {updateProfileData} from "entities/Profile/model/services/updateProfileData/updateProfileData";
import {ButtonAlign, ButtonsGroup} from "shared/ui/ButtonsGroup/ButtonsGroup";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (({className}: ProfilePageHeaderProps) => {
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch]);

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={'Профиль'} />
            {readonly ?
                (<Button onClick={onEdit} theme={ThemeButton.OUTLINE}>Редактировать</Button>)
                    :
                (
                    <ButtonsGroup align={ButtonAlign.RIGHT}>
                        <Button onClick={onCancelEdit} theme={ThemeButton.BACKGROUND}>Отменить</Button>
                        <Button onClick={onSave} theme={ThemeButton.BACKGROUND}>Сохранить</Button>
                    </ButtonsGroup>
                )
            }
        </div>
    );
});