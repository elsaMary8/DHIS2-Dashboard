import {useEffect, useState} from "react";
import fetchDashboardDetails from "../utils/network/fetchDashboardDetails.ts";
import {DashboardDetailResponse, DashboardItem} from "../types/DashboardResponse.ts";

const useDashboardDetailsFetch = (dropDown: boolean, id: string, starred: boolean) => {
    const [details, setDetails] = useState<undefined | DashboardItem[]>();
    const [toggle, setToggle] = useState(starred);

    const toggleHandler = () => {
        setToggle(!toggle);
        localStorage.setItem(id, !toggle ? '1' : '0');
    }

    useEffect(() => {
        const starredState = localStorage.getItem(id) === '1';
        setToggle(starredState || starred);
        if (dropDown && details === undefined) {
            fetchDashboardDetails(id).then((data: DashboardDetailResponse) => {
                if (data && data.dashboardItems) {
                    setDetails(data.dashboardItems);
                }
            })
        }
    }, [details, dropDown, id, starred]);

    return {details, toggleHandler, toggle}
}

export default useDashboardDetailsFetch;
