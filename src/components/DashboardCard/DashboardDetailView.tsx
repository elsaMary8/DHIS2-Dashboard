import {Menu, MenuDivider, MenuItem} from "@dhis2-ui/menu";
import {Fragment} from "react";
import {
    IconTextBox16,
    IconVisualizationArea16,
    IconVisualizationColumn16,
    IconVisualizationColumnStacked16,
    IconVisualizationLine16,
    IconVisualizationPie16,
    IconVisualizationPivotTable16,
    IconWorld16
} from '@dhis2/ui-icons'
import {DashboardItem} from "../../types/DashboardResponse.ts";

interface DashboardDetailViewProps {
    details: DashboardItem[];
    selectedItem: string
}


const visualizationIconMap = {
    ['LINE']: <IconVisualizationLine16/>,
    ['COLUMN']: <IconVisualizationColumn16/>,
    ['STACKED_COLUMN']: <IconVisualizationColumnStacked16/>,
    ['PIE']: <IconVisualizationPie16/>,
    ['YEAR_OVER_YEAR_LINE']: <IconVisualizationArea16/>,
    ['PIVOT_TABLE']: <IconVisualizationPivotTable16/>
}

const DashboardDetailView = ({details, selectedItem}: DashboardDetailViewProps) => {
    return (
        <div style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                details && <Menu> {details.map((value) => {
                    if (selectedItem === 'text' && !value.text) {
                        return;
                    }
                    if (selectedItem === 'visualization' && !value.visualization) {
                        return;
                    }
                    if (selectedItem === 'map' && !value.map) {
                        return;
                    }
                    let displayText = value.text ?? '';
                    let icon = <IconTextBox16/>
                    if (value.visualization) {
                        displayText = value.visualization.name
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        icon = visualizationIconMap[value.visualization.type];
                    }
                    if (value.map) {
                        displayText = value.map.name
                        icon = <IconWorld16/>
                    }
                    return (
                        <Fragment key={value.id}>
                            <MenuItem icon={icon} disabled
                                      label={displayText}/>
                            <MenuDivider/>
                        </Fragment>
                    )
                })}
                </Menu>
            }
        </div>
    )
}

export default DashboardDetailView;
