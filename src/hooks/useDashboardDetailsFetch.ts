import {useEffect, useState} from "react";
import fetchDashboardDetails from "../utils/network/fetchDashboardDetails.ts";
import {DashboardDetailResponse, DashboardItem} from "../types/DashboardResponse.ts";

const useDashboardDetailsFetch = (initial: boolean, id: string, starred: boolean) => {
    const [details, setDetails] = useState<undefined | DashboardItem[]>();
    const [toggle, setToggle] = useState(starred);
    const [dropDown, setDropDown] = useState(initial);

    const toggleHandler = () => {
        setToggle(!toggle);
        localStorage.setItem(id, !toggle ? '1' : '0');
    }

    const dropDownHandler = () => {
        setDropDown(!dropDown);
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

    return {details, toggleHandler, toggle,dropDown, dropDownHandler}
}

export default useDashboardDetailsFetch;
