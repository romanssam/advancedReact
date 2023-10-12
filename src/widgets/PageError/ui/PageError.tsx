import {classNames} from "shared/lib/classNames/classNames";
import './PageError.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames('PageError', {}, [className])}>
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="terminal">
                <h1>Произошла непредвиденная ошибка <span className="errorcode">404</span></h1>
                <p className="output">
                    <button onClick={reloadPage}>Обновить страницу</button>
                </p>
            </div>
        </div>
    );
};