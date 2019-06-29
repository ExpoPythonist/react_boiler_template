import Dashboard from "../../Containers/Dashboard/Dashboard";
import Home from "../../Containers/Home/home";


export const HubRoot = {
    dashboard: "/dashboard",
    home: "/home"
}

// All endpoints

export const HubSidebar = [
    {
        icon: 'mdi-view-dashboard',
        label: 'Dashboard',
        to: HubRoot.dashboard,
        exact: true,
        component: Dashboard
    },
    {
        icon: 'mdi-account-multiple',
        label: 'Users',
        to: HubRoot.home,
        exact: true,
       component: Home

    }
]
export default HubSidebar