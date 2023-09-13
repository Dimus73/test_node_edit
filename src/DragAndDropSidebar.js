import * as React from 'react'
import { FlowChartWithState, Content, Page, Sidebar, SidebarItem } from 'react-work-flow'

// Initializes an empty panel
const chartSimple = {
    offset: {
        x: 0,
        y: 0,
    },
    nodes: {
    },
    links: {
    },
    selected: {},
    hovered: {}
}

const DragAndDropSidebar = () => {
    let workFlowValue = {}
    let getWorkFlowChartValue = (newWorkFlowValue) => {
        workFlowValue = newWorkFlowValue
        console.log("work-flow 的JSON数据： ", workFlowValue)
    }

    return (
        <Page>
            <Content>
                <FlowChartWithState
                    initialValue={chartSimple}
                    getWorkFlowChartValue={getWorkFlowChartValue} />
            </Content>
            <Sidebar>
                <div style={{ margin: "10px", padding: "10px", background: "rgba(0,0,0,0.05)" }}>
                    Drag and drop these items onto the canvas.
                </div>
                <SidebarItem type="start" />
                <SidebarItem type="process-queue" />
                <SidebarItem type="process-point" />
                <SidebarItem type="end" />
            </Sidebar>
        </Page>
    )
}

// export default DragAndDropSidebar;

// Other code can refer to the above example



// const chartSimple = {
//     offset: {
//         x: 0,
//         y: 0
//     },
//     nodes: {
//     },
//     links: {
//     },
//     selected: {},
//     hovered: {}
// }
//
// const DragAndDropSidebar = () => {
//     let workFlowValue = {}
//
//     let getWorkFlowChartValue = (newWorkFlowValue) => {
//         workFlowValue = newWorkFlowValue
//         console.log("work-flow 的JSON数据： ", workFlowValue)
//     }
//
//     return (
//         <Page>
//             <Content>
//                 <FlowChartWithState
//                     initialValue={chartSimple}
//                     getWorkFlowChartValue={getWorkFlowChartValue} />
//             </Content>
//         </Page>
//     )
// }

export default DragAndDropSidebar;
