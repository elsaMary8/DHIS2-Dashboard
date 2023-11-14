declare module '@dhis2-ui/menu' {
    import {Component, ReactElement} from "react";

    interface MenuItemProps {
        label?: string;
        icon?: ReactElement;
        onClick?: () => void;
        disabled?: boolean
    }

    export const Menu = Component;
    export const MenuItem = Component<MenuItemProps>
    export const MenuDivider = Component;
}
