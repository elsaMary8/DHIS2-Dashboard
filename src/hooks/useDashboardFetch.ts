import {useEffect, useState} from "react";
import fetchDashboards from "../utils/network/fetchDashboards.ts";
import {Dashboard} from "../types/Dashboard.ts";

const useDashboardFetch = () => {

    const [dashboards, setDashboards] = useState<Dashboard[] | undefined>();

    useEffect(() => {
        fetchDashboards().then((data: {
            dashboards?: Dashboard[]
        }) => {
            if (data && data.dashboards) {
                console.log('dashboards are', data.dashboards);
                setDashboards(data.dashboards)
            }
        })
    }, []);

    return {dashboards}
}

export default useDashboardFetch;
