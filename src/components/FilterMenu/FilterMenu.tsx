import {SingleSelect, SingleSelectOption} from '@dhis2-ui/select'

interface FilterMenuProps {
    onChangeHandler: (item: {
        selected: string
    }) => void;
    selectedItem: string
}

const FilterMenu = ({onChangeHandler, selectedItem}: FilterMenuProps) => {
    return (
        <SingleSelect onChange={onChangeHandler} prefix={'Filter items'} selected={selectedItem}>
            <SingleSelectOption label="All types" value="All types"/>
            <SingleSelectOption label="Visualizations" value="visualization"/>
            <SingleSelectOption label="Map" value="map"/>
            <SingleSelectOption label="Text" value="text"/>
        </SingleSelect>
    );
}

export default FilterMenu;
