import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {useMemo, useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {SidebarItemsList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

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
            <div className={styles.list}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem collapsed={collapsed} item={item} key={item.path}/>
                ))}
            </div>
            <Button theme={ThemeButton.BACKGROUND} onClick={onToggle} className={styles.collapsedBtn}>
                {collapsed ? ">" : "<"}
            </Button>
            <div className={styles.language}>Язык: Русский</div>
        </div>
    );
};