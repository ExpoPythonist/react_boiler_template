import { combineReducers } from 'redux';
import AppReducer from "./AppReducer";
import AuthReducer from './AuthReducer';
import UsersReducer from './UsersReducer';
import OrgsReducer from './OrgsReducer';
import JournalReducer from './JournalReducer';
import ArticleReducer from './ArticleReducer';
import AuthorRequestReducer from './AuthorRequestReducer';
import InstitutionReducer from './InstitutionReducer';
import OaDealsReducer from './OaDealsReducer';
import OaTokenReducer from './OaTokenReducer';
import DepositReducer from './DepositReducer';
import ContentReducer from './ContentReducer';
import GroupReducer from './GroupReducer';
import VatReducer from './VatReducer';
import DashReducer from './DashReducer';
import TrxnReducer from './TrxnReducer';
import ConsortiaReducer from './ConsortiaReducer';
import ApcFundReducer from './ApcFundReducer';
import CommonReducer from './CommonReducer';
import ErrorReducer from './ErrorReducer';
import CorrectionRequestReducer from './CorrectionRequestReducer';

export default combineReducers({
    app: AppReducer,
    apcFund: ApcFundReducer,
    auth: AuthReducer,
    user: UsersReducer,
    orgs: OrgsReducer,
    journals: JournalReducer,
    articles: ArticleReducer,
    authorRequests: AuthorRequestReducer,
    institutions:InstitutionReducer,
    OaDeals:OaDealsReducer,
    oaToken:OaTokenReducer,
    deposit: DepositReducer,
    content: ContentReducer,
    group: GroupReducer,
    vat: VatReducer,
    dashboard: DashReducer,
    trxn: TrxnReducer,
    consortia: ConsortiaReducer,
    common: CommonReducer,
    error: ErrorReducer,
    correction_request: CorrectionRequestReducer
})
