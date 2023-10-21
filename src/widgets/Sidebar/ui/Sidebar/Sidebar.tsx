import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTheme} from "app/providers/ThemeProvider";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { theme } = useTheme();

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <div>Язык: Русский</div>
            <Button onClick={onToggle} theme={theme === "light" ?
                ThemeButton.BACKGROUND :
                ThemeButton.BACKGROUND_INVERTED}
                className={styles.collapsedBtn}
            >
                {collapsed ? ">" : "<"}
            </Button>
        </div>
    );
};