// import { AddUser, UserList } from "../../openaccess/components/views/hub";
import { Dashboard } from "../components/views";

export const HubRoot = {
    users: "/user"
}

// All endpoints

export const HubSidebar = [
    {
        icon: 'mdi-view-dashboard',
        label: 'Dashboard',
        to: HubRoot.dashboard,
        exact: true,
        component: Dashboard
    }
    // {
    //     icon: 'mdi-account-multiple',
    //     label: 'Users',
    //     to: HubRoot.users,
    //     content: [
    //         {
    //             label: 'Add User',
    //             to: '/add-user',
    //             component: AddUser,
    //         }
    //     ],
    // }
]