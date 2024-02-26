import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfileCard.module.scss';
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";
import {Text, TextAlign} from 'shared/ui/Text/Text'
import {Input} from "shared/ui/Input/Input";
import {Profile} from "../../model/types/profile";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Currency} from "entities/CurrencySelect";
import {CurrencySelect} from "entities/CurrencySelect";
import {Country} from "entities/CountySelect";
import {CountrySelect} from "entities/CountySelect/ui/CountySelect";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        onChangeCity,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
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
                <div className={styles.avatarWrapper}>
                    {data?.avatar && <Avatar src={data.avatar} alt={'Аватар'}/>}
                </div>
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
                    <Input onChange={onChangeUsername} value={data?.username} placeholder={'Ваш ник'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Валюта</span>
                    <Input value={data?.currency} placeholder={'Ваша валюта'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Город</span>
                    <Input onChange={onChangeCity} value={data?.city} placeholder={'Город'} readonly={readonly} />
                </div>
                <div className={styles.inputWrapper}>
                    <span className={styles.label}>Аватар</span>
                    <Input onChange={onChangeAvatar} value={data?.avatar} placeholder={'Аватар'} readonly={readonly} />
                </div>

                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
                <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
            </div>
        </div>
    );
};