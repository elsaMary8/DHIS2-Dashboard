export interface Visualization {
    type: string;
    id: string;
    name: string;
}

export interface Map {
    id: string;
    name: string;
}

export interface DashboardItem {
    visualization?: Visualization;
    text?: string;
    map?: Map;
    users: any[];
    x: number;
    y: number;
    type: string;
    id: string;
    reports: any[];
    resources: any[];
    h: number;
    w: number;
    shape?: string;
}

export interface DashboardDetailResponse {
    access: {
        manage: boolean;
        externalize: boolean;
        write: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    restrictFilters: boolean;
    allowedFilters: string[];
    displayName: string;
    id: string;
    dashboardItems: DashboardItem[];
    starred: boolean;
}
