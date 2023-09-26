import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {FaMoon, FaRegMoon} from 'react-icons/fa'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(styles.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <FaRegMoon/> : <FaMoon/>}
        </Button>
    );
};