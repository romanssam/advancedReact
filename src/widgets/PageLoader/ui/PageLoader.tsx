import {classNames} from "shared/lib/classNames/classNames";
import './PageLoader.scss'
import {Spinner} from "shared/ui/Spinner/Spinner";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className='PageLoader'>
            <Spinner/>
        </div>
    );
};