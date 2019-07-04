import {
    Dashboard
} from "../../components/dashboard/views";
export const AppRoot = {
    dashboard: "/",
    users: "/user",

}

// All endpoints

export const AppSidebar = [{
        icon: 'mdi-view-dashboard',
        label: 'Dashboard',
        to: AppRoot.dashboard,
        exact: true,
        component: Dashboard
    },

    {
        icon: 'mdi-account-multiple',
        label: 'Users',
        to: AppRoot.users,
        content: [{
                label: 'Add User',
                to: '/add-user',
                component: Dashboard,
            },
            {
                label: 'User List',
                isHide: true,
                to: '/user-list',
                component: Dashboard,
            }
        ],
    }
]