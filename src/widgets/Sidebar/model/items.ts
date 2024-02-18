import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    icon?: unknown;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная'
    },
    {
        path: RoutePath.profile,
        text: 'Профиль'
    }
]