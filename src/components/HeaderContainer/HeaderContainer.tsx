import FilterMenu from "../FilterMenu";

interface HeaderContainerProps {
    onChangeHandler: (item: {
        selected: string
    }) => void;
    selectedItem: string
}

const HeaderContainer = ({onChangeHandler, selectedItem}: HeaderContainerProps) => {
    return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h4>Dashboards</h4>
        <FilterMenu onChangeHandler={onChangeHandler} selectedItem={selectedItem}/>
    </div>
}

export default HeaderContainer;
