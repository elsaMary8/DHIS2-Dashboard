import {useEffect, useState} from "react";
import fetchDashboards from "../utils/network/fetchDashboards.ts";
import {Dashboard} from "../types/Dashboard.ts";

const useDashboardFetch = () => {

    const [dashboards, setDashboards] = useState<Dashboard[] | undefined>();
    const [selectedItem, setSelectedItem] = useState('All types');

    const onChangeHandler = (item: {
        selected: string
    }) => {
        setSelectedItem(item.selected);
    };

    useEffect(() => {
        fetchDashboards().then((data: {
            dashboards?: Dashboard[]
        }) => {
            if (data && data.dashboards) {
                setDashboards(data.dashboards)
            }
        })
    }, []);

    return {dashboards, onChangeHandler, selectedItem}
}

export default useDashboardFetch;
