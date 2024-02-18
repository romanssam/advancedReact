import {classNames} from "shared/lib/classNames/classNames";
import styles from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

export interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = ({className}: ProfilePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(styles.ProfilePage, {}, [className])}>
                Profile
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;