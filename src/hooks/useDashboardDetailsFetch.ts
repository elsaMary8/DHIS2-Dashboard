import {useEffect, useState} from "react";
import fetchDashboardDetails from "../utils/network/fetchDashboardDetails.ts";
import {DashboardDetailResponse, DashboardItem} from "../types/DashboardResponse.ts";

const useDashboardDetailsFetch = (dropDown: boolean, id: string, starred: boolean) => {
    const [details, setDetails] = useState<undefined | DashboardItem[]>();
    const [toggle, setToggle] = useState(starred);

    const toggleHandler = () => {
        console.log('Toggled handler running');
        setToggle(!toggle);
    }

    useEffect(() => {
        if (dropDown && details === undefined) {
            fetchDashboardDetails(id).then((data: DashboardDetailResponse) => {
                if (data && data.dashboardItems) {
                    console.log(`Details are fetched with ${id} :`, data);
                    setDetails(data.dashboardItems);
                }
            })
        }
    }, [details, dropDown, id]);

    return {details, toggleHandler, toggle}
}

export default useDashboardDetailsFetch;
