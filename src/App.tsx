import {Divider} from '@dhis2-ui/divider'
import {colors} from '@dhis2/ui-constants'
import {useState} from "react";
import HeaderContainer from "./components/HeaderContainer";
import DashboardCard from "./components/DashboardCard";
import useDashboardFetch from "./hooks/useDashboardFetch.ts";

const containerStyles = {
    display: 'flex',
    height: '100vh',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: colors.grey100,
}

function App() {

    const [selectedItem, setSelectedItem] = useState('All types');

    const {dashboards} = useDashboardFetch();

    const onChangeHandler = (item: {
        selected: string
    }) => {
        setSelectedItem(item.selected);
    };

    return (
        <div style={containerStyles}>
            <div style={{width: '40vw', textAlign: 'center'}}>
                <HeaderContainer onChangeHandler={onChangeHandler} selectedItem={selectedItem}/>
                <Divider dense/>
                {dashboards &&
                    dashboards.map((value, index) => {
                        console.log('The fetched dashboards are', value);
                        return <DashboardCard key={index} initial={index === 0} dashboardItem={value}
                                              selectedItem={selectedItem}/>
                    })
                }
            </div>
        </div>
    )
}

export default App
