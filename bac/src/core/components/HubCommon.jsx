import React from "react"
// import { getRoleList, getGroupList } from "../../openaccess/actions";


// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     groups: state.app.groups,
//     roles: state.app.roles,
//     orgs: state.app.organizations,
//     countries: state.app.countries,
//     geoLocation: state.app.geoLocation,
//     Messages: {},
//     user_status: state.user.new_user && state.user.new_user.status
// })

// const mapDispatchToProps = (dispatch) => ({
//     getRoleList: () => dispatch(getRoleList()),
//     getGroupList: () => dispatch(getGroupList()),
//     getOrgList: (payload) => dispatch(getOrgList(payload)),
//     getAllCountry: () => dispatch(getAllCountry()),
//     getAllState: (payload) => dispatch(getAllState(payload)),
//     getAllCity: (payload) => dispatch(getAllCity(payload))
// })

export default class Base extends React.Component{
    // componentDidMount() {
    //     this.props.getRoleList();
    //     this.props.getGroupList();
    //     this.props.getAllCountry();
    // }
}

export const HubCommon = Base;