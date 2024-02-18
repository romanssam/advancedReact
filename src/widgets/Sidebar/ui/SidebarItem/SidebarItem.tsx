import {classNames} from "shared/lib/classNames/classNames";
import styles from './SidebarItem.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {SidebarItemType} from "../../model/items";
import {memo} from "react";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    return (
        <AppLink
            to={item.path}
            key={item.path}
        >
            {item.text}
        </AppLink>
    );
});