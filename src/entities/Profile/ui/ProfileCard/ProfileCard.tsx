import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfileCard.module.scss';
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";
import {Text} from 'shared/ui/Text/Text'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    if (isLoading) return <PageLoader/>
    if (error) return <div>{error}</div>

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
              <Text title={'Профиль'} />
              <Button theme={ThemeButton.OUTLINE}>Редактировать</Button>
            </div>
            <div className={styles.items}>
                <Input value={data?.firstname} placeholder={'Ваше имя'} readonly={true} />
                <Input value={data?.lastname} placeholder={'Ваша фамилия'} readonly={true} />
                <Input value={data?.username} placeholder={'Ваш ник'} readonly={true} />
                <Input value={data?.currency} placeholder={'Ваша валюта'} readonly={true} />
                <Input value={data?.age} placeholder={'Ваша возраст'} readonly={true} />
            </div>
        </div>
    );
};