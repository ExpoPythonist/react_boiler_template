import {
    Dashboard
} from "../../components/dashboard/views";
import ArticleList from "../../components/dashboard/views/article/ArticleList";
import SingleArticle from "../../components/dashboard/views/article/SingleArticle";

import SelectItems from "../../components/dashboard/views/Select/Select";
export const AppRoot = {
    dashboard: "/",
    users: "/user",
    articleList: "/article-list",
    selectItem: "/select-item"

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
    },
    {
        icon: 'mdi-view-dashboard',
        label: 'Artcle List',
        to: AppRoot.articleList,
        exact: true,
        component: ArticleList,
        content: [{
            label: 'Add User',
            to: '/articlelist',
            component: ArticleList,
        },
        {
            label: 'singlearticle',
            isHide: true,
            to: '/singlearticle/:id',
            component: SingleArticle,
        }
    ],
    },
     {
        icon: 'mdi-view-dashboard',
        label: 'Select',
        to: AppRoot.selectItem,
        exact: true,
        component: SelectItems
    },
]