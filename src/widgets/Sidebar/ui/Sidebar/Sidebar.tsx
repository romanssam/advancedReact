import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {SidebarItemsList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getCollapsed} from "../../model/selectors/getCollapsed/getCollapsed";
import {useCallback} from "react";
import {sidebarActions} from "widgets/Sidebar";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const collapsed = useSelector(getCollapsed);
    const dispatch = useAppDispatch();

    const onToggle = useCallback(() => {
        dispatch(sidebarActions.setCollapsed(!collapsed));
    }, [collapsed, dispatch]);

    console.log(collapsed);

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <div className={styles.list}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem collapsed={collapsed} item={item} key={item.path} />
                ))}
            </div>
            <Button theme={ThemeButton.BACKGROUND} onClick={onToggle} className={styles.collapsedBtn}>
                {collapsed ? ">" : "<"}
            </Button>
            <div className={styles.language}>Язык: Русский</div>
        </div>
    );
};