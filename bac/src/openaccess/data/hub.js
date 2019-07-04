// import {
//     ArticalAprForm,
//     ArticleDecForm
// } from "../components/views/university";
// import { AddUser, UserList, AddRole, RoleList, AddOrg, OrgList, AddJournal, JournalList, AddArticle, ArticleBasic, ChangePwd, EditUser, EditOrg, SingleOrg, ViewUser, EditJournal, SingleJournal, ArticleFullPage, ArticleManualPage,OaDealsList,AddContentType,AddGroup,EditContentType,EditGroup,GroupList,ContentTypeList,ViewContentType,ViewGroup, AddVAT, VATList,AddBook,BookList } from "../../openaccess/components/views/hub";
import {
    Dashboard
} from "../../openaccess/components/views";

export const HubRoot = {
    dashboard: "/",
    // organizations: "/organizations",
    users: "/user",
    // articles: "/articles",
    // journals: "/journals",
    // article_approval: '/article-approval',
    // article_decline: '/article-decline',
    // role: '/role',
    // orcid_id: '/orcid-id',
    // oaDeal: '/oa-deal',
    // books: "/books",
}

// All endpoints

export const HubSidebar = [{
        icon: 'mdi-view-dashboard',
        label: 'Dashboard',
        to: HubRoot.dashboard,
        exact: true,
        component: Dashboard
    },

    {
        icon: 'mdi-account-multiple',
        label: 'Users',
        to: HubRoot.users,
        content: [{
                label: 'Add User',
                to: '/add-user',
                component: Dashboard,
            },
            // {
            //     label: 'User List',
            //     to: '/user-list',
            //     component: UserList,
            // },
            // {
            //     label: 'Change Password',
            //     to: '/change-password',
            //     component: ChangePwd,
            // },
            // {
            //     label: 'Edit User',
            //     to: '/edit-user/:id',
            //     component: EditUser,
            //     isHide: true,
            // },
            // {
            //     label: 'View User',
            //     to: '/:id',
            //     component: ViewUser,
            //     isHide: true,
            // },
        ],
    },
    // {
    //     icon: 'ion-university',
    //     label: 'Organizations',
    //     to: HubRoot.organizations,
    //     content: [
    //         {
    //             label: 'Add Organization',
    //             to: '/add-organization',
    //             component: AddOrg,
    //         },
    //         {
    //             label: 'Organizations List',
    //             to: '/organization-list',
    //             component: OrgList,
    //         },
    //         {
    //             label: 'Edit Organization',
    //             to: '/edit-org/:id',
    //             component: EditOrg,
    //             isHide: true,
    //         },
    //         {
    //             label: 'Organization View',
    //             to: '/single-org/:id',
    //             component: SingleOrg,
    //             isHide: true,
    //         },
    //     ],
    // },
    // {
    //     icon: ' mdi-book-multiple',
    //     label: 'Journals',
    //     to: HubRoot.journals,
    //     content: [
    //         {
    //             label: 'Add Journal',
    //             to: '/add-journals',
    //             component: AddJournal,
    //         },
    //         {
    //             label: 'Journals List',
    //             to: '/journals-list',
    //             component: JournalList,
    //         },
    //         {
    //             label: 'Edit Journals',
    //             to: '/edit-journal/:id',
    //             component: EditJournal,
    //             isHide: true,
    //         },
    //         {
    //             label: 'Journal View',
    //             to: '/single-journal/:id',
    //             component: SingleJournal,
    //             isHide: true,
    //         },
    //     ],
    // },
    // {
    //     icon: ' mdi-pencil-box',
    //     label: 'Articles',
    //     to: HubRoot.articles,
    //     content: [
    //         {
    //             label: 'Add Article',
    //             to: '/add-article',
    //             component: AddArticle,
    //         },
    //         {
    //             label: 'Edit Article',
    //             to: '/article-manual/edit/:id',
    //             component: AddArticle,
    //             isHide: true,
    //         },
    //         {
    //             label: 'Articles - Basic',
    //             to: '/article-basic',
    //             component: ArticleBasic,
    //         },
    //         {
    //             label: 'Articles - Manual',
    //             to: '/article-manual',
    //             component: ArticleManualPage,
    //             exact: true,
    //         },
    //         {
    //             label: 'Articles - Full',
    //             to: '/article-full',
    //             component: ArticleFullPage,
    //         },
    //     ],
    // },
    // {
    //     icon: 'mdi-book',
    //     label: 'Books',
    //     to: HubRoot.books,
    //     content: [
    //         {
    //             label: 'Add book',
    //             to: '/add-upload-book',
    //             component: AddBook,
    //         },
    //         {
    //             label: 'Edit Article',
    //             to: '/article-manual/edit/:id',
    //             component: AddBook,
    //             isHide: true,
    //         },
    //         {
    //             label: 'Books',
    //             to: '/books',
    //             component: BookList,
    //         },
    //     ],
    // },
    // {
    //     label: 'ArticleApprovalForm',
    //     to: HubRoot.article_approval + '/:id',
    //     exact: true,
    //     component: ArticalAprForm,
    //     isHide: true,
    //     isCommon: true,
    // },
    // {
    //     label: 'Article Decline Form',
    //     to: HubRoot.article_decline + '/:id',
    //     exact: true,
    //     component: ArticleDecForm,
    //     isHide: true,
    //     isCommon: true
    // },
    // {
    //     icon: ' mdi-pencil',
    //     label: 'Role',
    //     to: '/role',
    //     content: [
    //         {
    //             label: 'Add Role',
    //             to: '/add-role',
    //             component: AddRole,
    //         },
    //         {
    //             label: 'Role List',
    //             to: '/role-list',
    //             component: RoleList,
    //         },
    //     ],
    // },
    // {
    //     icon: 'mdi-tumblr-reblog',
    //     label: 'Oa deal',
    //     to: '/oa-deal',
    //     content: [
    //         {
    //             label: 'Oa deal list',
    //             to: '/list',
    //             component: OaDealsList,
    //         },
    //     ],
    // },
    // {
    //     icon: "mdi-nature-people",
    //     label: "Groups",
    //     to: '/group',
    //     content: [
    //         {
    //             label: "Add group",
    //             to: "/add-group",
    //             component: AddGroup
    //         },
    //         {
    //             label: "Group list",
    //             to: "/group-list",
    //             component: GroupList
    //         },
    //         {
    //             label: "Edit group",
    //             to: "/edit-group/:id",
    //             component: EditGroup,
    //             isHide: true
    //         },
    //         {
    //             label: "Group View",
    //             to: "/single-group/:id",
    //             component: ViewGroup,
    //             isHide: true
    //         }
    //     ]
    // },
    // {
    //     icon: "mdi-content-save-all",
    //     label: "Content type",
    //     to: '/content-type',
    //     content: [
    //         {
    //             label: "Add content type",
    //             to: "/add-content-type",
    //             component: AddContentType
    //         },
    //         {
    //             label: "Content type list",
    //             to: "/content-type-list",
    //             component: ContentTypeList
    //         },
    //         {
    //             label: "Edit content type",
    //             to: "/edit-content-type/:id",
    //             component: EditContentType,
    //             isHide: true
    //         },
    //         {
    //             label: "Content type view",
    //             to: "/single-content-type/:id",
    //             component: ViewContentType,
    //             isHide: true
    //         }
    //     ]
    // },
    // {
    //     icon: "mdi-account-box-outline",
    //     label: "Orcid id",
    //     content: [
    //         {
    //             label: 'Add orcid id',
    //             to: '/orcid-id/add-orcid-id',
    //         },
    //         {
    //             label: 'Orcid id list',
    //             to: '/orcid-id/orcid-id-list',
    //         },
    //     ],
    // },
    // {
    //     icon: 'mdi-application',
    //     label: 'OA Policy',
    //     content: [
    //         {
    //             label: 'Add OA Policy',
    //             to: '/oa-policy/add-oa-policy',
    //         },
    //         {
    //             label: 'OA Policy list',
    //             to: '/oa-policy/oa-policy-list',
    //         },
    //     ],
    // },
    // {
    //     icon: 'mdi-percent',
    //     label: 'VAT',
    //     to: '/vat',
    //     content: [
    //         {
    //             label: 'Add VAT',
    //             to: '/add-vat',
    //             component: AddVAT
    //         },
    //         {
    //             label: 'VAT list',
    //             to: '/vat-list',
    //             component: VATList
    //         },
    //     ],
    // },
    // {
    //     icon: 'mdi-lock-open-outline',
    //     label: 'Activities',
    //     content: [
    //         {
    //             label: 'OA account opening',
    //             to: '/activities/oa-account-opening',
    //         },
    //         {
    //             label: 'Tokens allocation',
    //             to: '/activities/tokens-allocation',
    //         },
    //         {
    //             label: 'Offset funding',
    //             to: '/activities/offset-funding',
    //         },
    //         {
    //             label: 'Institutions APC fund',
    //             to: '/activities/institutions-apc-fund',
    //         },
    //         {
    //             label: 'Publishers fund',
    //             to: '/activities/publisher-fund',
    //         },
    //         {
    //             label: 'Article approval',
    //             to: '/activities/article-approval',
    //         },
    //     ],
    // },
    // {
    //     icon: 'ion-ios7-refresh',
    //     label: 'Pub date updator',
    //     to: '/public-date-updator',
    // },
]