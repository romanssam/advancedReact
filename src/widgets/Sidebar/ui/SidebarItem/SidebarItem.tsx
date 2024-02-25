import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from './SidebarItem.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {SidebarItemType} from "../../model/items";
import {memo} from "react";

interface SidebarItemProps {
    classname?: string
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({item, collapsed, classname}: SidebarItemProps) => {
    const mods: Mods = {
        [styles.collapsed]: collapsed
    };

    return (
        <AppLink
            to={item.path}
            key={item.path}
        >
            {item.Icon && <item.Icon />}
            <span className={classNames(styles.text, mods, [classname])}>{item.text}</span>
        </AppLink>
    );
});