export const APP_LOADED                 = "APP_LOADED";
export const APP_UNLOADED               = "APP_UNLOADED";
export const MENU_ENLARGED              = 'MENU_ENLARGED';

// Authentications
export const REQUEST_LOGIN_DATA         = 'REQUEST_LOGIN_DATA';
export const RECIEVED_LOGIN_DATA        = 'RECIEVED_LOGIN_DATA';
export const FAILED_LOGIN_DATA          = "FAILED_LOGIN_DATA";
export const REQUEST_SIGNUP_DATA        = 'REQUEST_LOGIN_DATA';
export const RECIEVED_SIGNUP_DATA       = 'RECIEVED_LOGIN_DATA';
export const SET_USER_DATA              = 'SET_USER_DATA';
export const LOGOUT_USER                = 'LOGOUT_USER';
export const ACTIVATE_ACCOUNT           = 'ACTIVATE_ACCOUNT';

// Roles
export const GET_ROLES                  = 'GET_ROLES';

// Groups
export const GET_GROUPS                 = 'GET_GROUPS';

// Organizations
export const GET_ORG_LIST               = 'GET_ORG_LIST';
export const GET_ORG_LIST_ALL           = 'GET_ORG_LIST_ALL';
export const REQUEST_CREATE_ORG         = 'REQUEST_CREATE_ORG';
export const FAILED_CREATE_ORG          = 'FAILED_CREATE_ORG';
export const REQUEST_UPDATE_ORG         = 'REQUEST_UPDATE_ORG';
export const FAILED_UPDATE_ORG          = 'FAILED_UPDATE_ORG';
export const DELETE_ORG_DATA            = 'DELETE_ORG_DATA';
export const REQUEST_FAILED_DELETE_USER = 'REQUEST_FAILED_DELETE_USER';
export const SINGLE_ORG_DATA            = 'SINGLE_ORG_DATA';
export const FAILED_SINGLE_ORG_DATA     = 'FAILED_SINGLE_ORG_DATA';
export const GET_ORG_FINANCIAL_REPORT   = 'GET_ORG_FINANCIAL_REPORT';
export const ORG_LIST_COUNT             = 'ORG_LIST_COUNT';
export const GET_ORG_AUTO_APPROVAL_CONFIG = 'GET_ORG_AUTO_APPROVAL_CONFIG';
export const TRIGGER_ORG_AUTO_APPROVAL_CONFIG = 'TRIGGER_ORG_AUTO_APPROVAL_CONFIG';
export const CREATE_UPDATE_ORG_AUTO_APPROVAL_STATUS = 'CREATE_UPDATE_ORG_AUTO_APPROVAL_STATUS';
export const UPDATE_CHILD_ORGANISATION = 'UPDATE_CHILD_ORGANISATION';
export const ORGANISATION_FILE_UPLOAD = 'ORGANISATION_FILE_UPLOAD';
export const TRACK_ORGANISATION_FILE_UPLOAD_STATUS = 'TRACK_ORGANISATION_FILE_UPLOAD_STATUS';

// Users
export const REQUEST_CREATE_USER        = 'REQUEST_CREATE_USER';
export const FAILED_CREATE_USER         = 'FAILED_CREATE_USER';
export const GET_ALL_USER               = 'GET_ALL_USER';
export const REQUEST_UPDATE_USER        = 'REQUEST_UPDATE_USER';
export const FAILED_UPDATE_USER         = 'FAILED_UPDATE_USER';
export const DELETE_USER_DATA           = 'DELETE_USER_DATA';
export const GET_PUBLIC_ORG             = 'GET_PUBLIC_ORG';
export const GET_PUBLISHER              = 'GET_PUBLISHER';

// Locations
export const GET_COUNTRIES              = 'GET_COUNTRIES';
export const GET_STATE_LIST             = 'GET_STATE_LIST';
export const GET_CITY_LIST              = 'GET_CITY_LIST';
export const CLEAR_FAILED_STATUS        = 'CLEAR_FAILED_STATUS';


// Journal
export const GET_JOURNAL_LIST           =  'GET_JOURNAL_LIST'; 
export const REQUEST_CREATE_JOURNAL     =  'REQUEST_CREATE_JOURNAL';
export const REQUEST_CREATE_PUBLICATION =  'REQUEST_CREATE_PUBLICATION';
export const FAILED_CREATE_JOURNAL      =  'FAILED_CREATE_JOURNAL';
export const FAILED_CREATE_PUBLICAITON  =  'FAILED_CREATE_PUBLICAITON';
export const GET_JOURNAL_LIST_ALL       =  'GET_JOURNAL_LIST_ALL';
export const REQUEST_UPDATE_JOURNAL     =  'REQUEST_UPDATE_JOURNAL';
export const DELETE_JOURNAL_DATA        =  'DELETE_JOURNAL_DATA';
export const SINGLE_JOURNAL_DATA        =  'SINGLE_JOURNAL_DATA';
export const FAILED_SINGLE_JOURNAL_DATA =  'FAILED_SINGLE_JOURNAL_DATA';
export const GET_PUBLICATION_TYPE       =  'GET_PUBLICATION_TYPE';
export const FAILED_PUBLICATION_TYPE    =  'FAILED_PUBLICATION_TYPE';
export const GET_JOURNAL_TYPE           =  'GET_JOURNAL_TYPE';
export const GET_CONTENT_TYPE           =  'GET_CONTENT_TYPE';
export const FAILED_JOURNAL_TYPE        =  'FAILED_JOURNAL_TYPE';
export const COUNT_JOURNAL_LIST         =  'COUNT_JOURNAL_LIST';
export const JOURNAL_FILE_UPLOAD = 'JOURNAL_FILE_UPLOAD';
export const TRACK_JOURNAL_FILE_UPLOAD_STATUS = 'TRACK_JOURNAL_FILE_UPLOAD_STATUS';


// Articles Action Creator
export const ADD_UPDATE_ARTICLE         = 'ADD_UPDATE_ARTICLE'
export const ALL_ARTICLES               = 'ALL_ARTICLES'
export const ALL_BOOKS                  = 'ALL_BOOKS'
export const GET_ARTICLE_MANUAL         = 'GET_ARTICLE_MANUAL'
export const GET_ARTICLE_FULL           = 'GET_ARTICLE_FULL'
export const ARTICLE_DOWNLOAD           = 'ARTICLE_DOWNLOAD'
// export const GET_UNI_ARTICLE_FULL       = 'GET_UNI_ARTICLE_FULL'
export const GET_SINGLE_ARTICLE         = 'GET_ARTICLE_SINGLE'
export const GET_LICENCE_LIST           = 'GET_LICENCE_LIST'
export const CREATE_AUTHOR_APC_FUND     = 'CREATE_AUTHOR_APC_FUND'
export const FAILED_AUTHOR_APC_FUND     = 'FAILED_AUTHOR_APC_FUND'
export const CORRECTION_REQUEST = 'CORRECTION_REQUEST';
export const CORRECTION_REQUEST_SINGLE  = 'CORRECTION_REQUEST_SINGLE'
export const ARTICLE_FILE_UPLOAD        = 'ARTICLE_FILE_UPLOAD'
export const BOOK_FILE_UPLOAD           = 'BOOK_FILE_UPLOAD'
export const TRACK_ARTICLE_FILE_UPLOAD_STATUS       = 'TRACK_ARTICLE_FILE_UPLOAD_STATUS'
export const TRACK_BOOK_FILE_UPLOAD_STATUS       = 'TRACK_BOOK_FILE_UPLOAD_STATUS'


// Institution Article Creator
export const GET_INSTITUTION_LIST         = 'GET_INSTITUTION_LIST'
// Oadeals related constant
export const GET_COUNTER_ORG_LIST         = 'GET_COUNTER_ORG_LIST'
export const GET_CURRENCY                 = 'GET_CURRENCY'
export const GET_DEAL_TYPE                = 'GET_DEAL_TYPE'
export const GET_OADEAL_LIST              = 'GET_OADEAL_LIST'
export const GET_OADEAL                   = 'GET_OADEAL'
export const CREATE_OA_DEAL               = 'CREATE_OA_DEAL'
export const UPDATE_OA_DEAL               = 'UPDATE_OA_DEAL'
export const FAILED_CREATE_OA_DEAL        = 'FAILED_CREATE_OA_DEAL'
export const DELETE_OA_DEAL               = 'DELETE_OA_DEAL'
export const GET_OA_DEAL_FILTERED_LIST    = 'GET_OA_DEAL_FILTERED_LIST'
export const GET_OA_DEAL_APPROVED_LIST    = 'GET_OA_DEAL_APPROVED_LIST'
export const GET_OA_DEAL_APPROVAL         = 'GET_OA_DEAL_APPROVAL'
export const GET_OA_DEAL_REJECT           = 'GET_OA_DEAL_REJECT'

//publication list 
export const GET_PUBLICATION_LIST           = 'GET_PUBLICATION_LIST'
export const GET_DEPARTMENT_LIST           = 'GET_DEPARTMENT_LIST'

// OA Token Generation List
export const CREATE_OA_TOKEN              = 'CREATE_OA_TOKEN'
export const CREATE_ORGANISATION_TOKEN    = 'CREATE_ORGANISATION_TOKEN'
export const ORGANISATION_OFFSET_FUND     = 'ORGANISATION_OFFSET_FUND'
export const GET_OFFSET_FUND              = 'GET_OFFSET_FUND'
export const GET_ORGANISATION_TOKEN       = 'GET_ORGANISATION_TOKEN'
export const GET_OA_TOKEN                 = 'GET_OA_TOKEN'
export const DELETE_OA_TOKEN              = 'DELETE_OA_TOKEN'
export const FAILED_DELETE_OA_TOKEN       = 'FAILED_DELETE_OA_TOKEN'
export const ERROR_MESSAGE                = 'ERROR_MESSAGE'

// Content Type
export const  CREATE_CONTENT_TYPE         = 'CREATE_CONTENT_TYPE'
export const  DELETE_CONTENT_TYPE_DATA    = 'DELETE_CONTENT_TYPE_DATA'
export const  UPDATE_CONTENT_TYPE_DATA    = 'UPDATE_CONTENT_TYPE_DATA'

// Group
export const  CREATE_GROUP                = 'CREATE_GROUP'
export const  GET_GROUP_TYPE              = 'GET_GROUP_TYPE'
export const  GET_GROUP_LIST              = 'GET_GROUP_LIST'
export const  DELETE_GROUP                = 'DELETE_GROUP'
export const  UPDATE_GROUP                = 'UPDATE_GROUP'
export const  PARENT_GROUP_LIST           = 'PARENT_GROUP_LIST'

// Consortia
export const  CONSORTIA_ADD_MEMBER        = 'CONSORTIA_ADD_MEMBER'
export const  CONSORTIA_MEMBER_LIST       = 'CONSORTIA_MEMBER_LIST'




// University Publisher Fund
export const DEPOSIT_FUND = 'DEPOSIT_FUND';
export const DEPOSIT_FUND_LIST = 'DEPOSIT_FUND_LIST';

export const APPROVED_DEPOSIT_LIST = 'APPROVED_DEPOSIT_LIST';
export const PENDING_DEPOSIT_LIST = 'PENDING_DEPOSIT_LIST';

// Author APC Request
export const GET_AUTHOR_APC_REQUEST = 'GET_AUTHOR_APC_REQUEST'

// Dashboard
export const DASHBOARD_DATA = 'DASHBOARD_DATA';


// APC Fund
export const GET_APC_FUND_LIST = 'GET_APC_FUND_LIST';
export const ADD_UPDATE_APC_FUND = 'ADD_UPDATE_APC_FUND';


// Article Required Field
export const ARTICLE_REQUIRED_FIELD = 'ARTICLE_REQUIRED_FIELD';
export const ARTICLE_APC_REQUEST_ORGANISATION = 'ARTICLE_APC_REQUEST_ORGANISATION';




export const REJECT_ARTICLE_FULL = 'REJECT_ARTICLE_FULL';
export const GET_DASHBOARD_DATA = 'GET_DASHBOARD_DATA';

export const OA_TOKEN_TRXN = 'OA_TOKEN_TRXN';
export const DEPOSIT_FUND_TRXN = 'DEPOSIT_FUND_TRXN';
export const OFFSET_FUND_TRXN = 'OFFSET_FUND_TRXN';

// Error Config

export const ERROR_PUT = 'ERROR_PUT';
export const ERROR_POST = 'ERROR_POST';
export const ERROR_DELETE = 'ERROR_DELETE';
export const ERROR_GET = 'ERROR_GET';


