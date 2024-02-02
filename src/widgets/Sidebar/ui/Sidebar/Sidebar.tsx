import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <div>Язык: Русский</div>
            <Button theme={ThemeButton.BACKGROUND} onClick={onToggle} className={styles.collapsedBtn}>
                {collapsed ? ">" : "<"}
            </Button>
        </div>
    );
};