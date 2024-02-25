import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfileCard.module.scss';
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";
import {Text, TextAlign} from 'shared/ui/Text/Text'
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <PageLoader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    title={'Произошла ошибка'}
                    text={'Попробуйте обновить страницу'}
                    textAlign={TextAlign.CENTER}
                />
            </div>
        )
    }

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.items}>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Имя</span>
                    <Input value={data?.firstname} placeholder={'Ваше имя'} readonly={true} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Фамилия</span>
                    <Input value={data?.lastname} placeholder={'Ваша фамилия'} readonly={true} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Ник</span>
                    <Input value={data?.username} placeholder={'Ваш ник'} readonly={true} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Валюта</span>
                    <Input value={data?.currency} placeholder={'Ваша валюта'} readonly={true} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Возраст</span>
                    <Input value={data?.age} placeholder={'Ваша возраст'} readonly={true} />
                </div>
            </div>
        </div>
    );
};