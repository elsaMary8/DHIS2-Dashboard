import {useState} from "react";
import {Card} from '@dhis2-ui/card'
import {MenuItem} from '@dhis2-ui/menu'
import {IconChevronDown24, IconChevronUp24, IconStar24, IconStarFilled24} from '@dhis2/ui-icons'
import {Dashboard} from "../../types/Dashboard.ts";
import DashboardDetailView from "./DashboardDetailView.tsx";
import useDashboardDetailsFetch from "../../hooks/useDashboardDetailsFetch.ts";

interface DashboardCard {
    initial: boolean;
    dashboardItem: Dashboard
    selectedItem: string
}

const DashboardCard = ({initial, selectedItem, dashboardItem: {displayName, id, starred}}: DashboardCard) => {

    const [dropDown, setDropDown] = useState(initial);

    const {details, toggle, toggleHandler} = useDashboardDetailsFetch(dropDown, id, starred);

    const dropDownHandler = () => {
        setDropDown(!dropDown);
    }

    return (
        <div
            style={{marginBottom: '16px'}}>
            <Card>
                <div style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0px 16px'
                }}>
                    <h4>{displayName}</h4>
                    <div style={{
                        flexDirection: 'row',
                        justifyContent: "space-around",
                        display: 'flex',
                        alignItems: 'center',
                        flex: 0.1
                    }}>
                        <MenuItem icon={toggle ? <IconStarFilled24/> : <IconStar24/>} onClick={toggleHandler}/>
                        <MenuItem icon={dropDown ? <IconChevronUp24/> : <IconChevronDown24/>}
                                  onClick={dropDownHandler}/>

                    </div>
                </div>
                {dropDown && details && <DashboardDetailView details={details} selectedItem={selectedItem}/>}
            </Card>
        </div>
    )
}

export default DashboardCard;
