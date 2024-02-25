import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfileCard.module.scss';
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";
import {Text, TextAlign} from 'shared/ui/Text/Text'
import {Input} from "shared/ui/Input/Input";
import {Profile} from "../../model/types/profile";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname
    } = props;

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
                    <Input onChange={onChangeFirstname} value={data?.firstname} placeholder={'Ваше имя'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Фамилия</span>
                    <Input onChange={onChangeLastname} value={data?.lastname} placeholder={'Ваша фамилия'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Ник</span>
                    <Input value={data?.username} placeholder={'Ваш ник'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Валюта</span>
                    <Input value={data?.currency} placeholder={'Ваша валюта'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Возраст</span>
                    <Input value={data?.age} placeholder={'Ваша возраст'} readonly={readonly} />
                </div>
            </div>
        </div>
    );
};