import {
    Dashboard
} from "../components/views";
import {
    About,
    Contact,
    Resources,
} from "../../openaccess/components/views";
import {
    NotFound
} from "../../openaccess/components/views/NotFound";
import {
    Activate,
    ThankYou,
    SignIn
} from "../../openaccess/components/views/auth";

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

// Login or Sign in Routes
export const Auth = [{
    path: "/signin",
    exact: true,
    component: SignIn
}, ];

// Public Routes
export const Public = [{
        path: "/about",
        exact: true,
        component: About
    },
    {
        path: "/contact",
        exact: true,
        component: Contact
    },
    {
        path: "/resources",
        exact: true,
        component: Resources
    },
    {
        path: "/active-account",
        exact: true,
        component: Activate
    },
    {
        path: "/thank-you",
        exact: true,
        component: ThankYou
    }
];

// Public Routes
export const Private = [{
    path: "/",
    exact: true,
    component: Dashboard
}];