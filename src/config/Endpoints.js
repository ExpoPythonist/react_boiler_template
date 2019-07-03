const url = process.env.REACT_APP_API_ENDPOINT || 'http://dev.api.oametrix.io/';
const baseURL = url + 'api/v1/';
// output: http://dev.api.oametrix.io/api/v1/
export const config = {
  baseURL,
  endpoint: {
    login: 'login/',
    sign_up: 'registration/',
    logout: 'logout/',
    role: 'role/',
    group: 'group/',
    group_top: 'top-group/',
    article_download: 'article-full/download/',
    org: 'organisation/',
    organisation_file_upload: 'organisation/upload/',
    child_organisation: 'organisation-child/',
    org_auto_approval_config: 'organisation-auto-approval-config/',
    org_auto_approval_config_trigger: 'organisation-auto-approval-config-trigger/',
    journal: 'journal/',
    journal_file_upload: 'publication/upload/',
    public_org: 'public-organisation-info/',
    public_registration: 'public-registration/',
    pulication: 'publication/',
    publication_type: 'publication-type/',
    journal_type: 'journal-type/',
    content_type: 'content-type/',
    country: 'country/',
    state: 'state/',
    city: 'city/',
    active_account: 'active-account/',
    change_pwd: 'change-password/',
    validate_token: 'validate-token/',
    user: 'user/',
    article_basic_upload: 'article-basic/upload/',
    book:'book/',
    book_upload: 'book/upload/',
    article_basic: 'article-basic/',
    article_manual: 'article-manual/',
    article_required_field: 'article-required-field/',
    article_full: 'article-full/',
    article_reviewer: 'article-reviewer/',
    currency: 'currency/',
    deposit_fund: 'deposit-request/',
    oa_deal: 'oa-deal/',
    publisher: 'publisher/',
    oa_publisher: 'oa-publisher/',
    approveed_deposit_fund:
      'deposit-request/?approval_status=approve',
    pending_deposit_fund:
      'deposit-request/?approval_status=pending',
    reject_apc_fund_request: 'author-apc-fund-request/',
    license: 'licence/',
    apc_fund_source: 'apc-fund-source',
    apc_option: 'apc-option/',
    article_approve: 'article-approve/',
    article_reject: 'article-reject/',
    vat: 'vat/',
    dashboard: 'dashboard/',
    oa_token_trxn: 'oa-token-transaction/',
    deposit_credit_trxn: 'deposit-credit-transaction/',
    offset_fund_trxn: 'offset-fund-transaction/',
    author_apc_fund_request: 'author-apc-fund-request/',
    article_apc_request_organisation:'article-apc-request-organisation/',
    apc_funder: 'funder/',
    apc_fund: 'apc-fund/',
    institutions: 'institutions/',
    institution: 'institution/',
    pubdb: 'publisher-dashboard/',
    unidb: 'institution-dashboard/',
    correction_request: 'correction-request/',
    consortium: 'consortium/',
    consortium_member: 'consortia-member/',
    department:'department/'
  },
}