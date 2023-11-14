declare module "@dhis2-ui/button" {
    import {BaseSyntheticEvent, Component, CSSProperties, ReactElement, ReactNode} from "react";

    interface ButtonProps {
        loading?: boolean;
        toggled?: boolean;
        name?: string;
        className?: string;
        disabled?: boolean;
        icon?: ReactElement;
        children?: ReactNode;
        value?: string;
        style?: CSSProperties;
        onClick: ({value: string, name: string}, event: BaseSyntheticEvent) => void;
    }

    export const Button = Component<ButtonProps>
}
