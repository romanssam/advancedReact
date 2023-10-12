import {classNames} from "shared/lib/classNames/classNames";
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            Такая страница не найдена, либо ее не существует
        </div>
    );
};