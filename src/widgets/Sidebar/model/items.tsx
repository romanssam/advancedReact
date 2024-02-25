import {RoutePath} from "shared/config/routeConfig/routeConfig";
import HomeIcon from '../../../../assets/icons/home.svg';
import SettingsIcon from '../../../../assets/icons/settings.svg';
import {ComponentType, SVGAttributes} from "react";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon?: ComponentType<SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
    }
]