declare module '@dhis2-ui/select' {
    import {Component, ReactNode} from "react";

    interface SingleSelect {
        onChange: (item: {
            selected: string
        }) => void;
        selected: string;
        prefix: string;
        children: ReactNode
    }

    interface SingleSelectOption {
        label: string;
        value: string;
    }

    export const SingleSelect = Component<SingleSelect>
    export const SingleSelectOption = Component<SingleSelectOption>
}
