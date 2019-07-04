import React from 'react';
import { connect } from 'react-redux'
import { logoutUserData } from '../../../../Redux/actions';


export class Header extends React.Component {

    state = {
        isLogout: false,
        hasConnectionError: true,
    }

    componentDidMount() {
        this.isEnlarged();
    }

    isEnlarged = () => {
        if (localStorage.getItem('menuEnlarged') === '1') {
            window.$('body').addClass('enlarged');
        } else {
            window.$('body').removeClass('enlarged');
        }
    }

    logoutUser = async (e) => {
        this.setState({
            isLogout: true
        })
        await this.props.logoutUser();
    }
    render() {

        return (
            <div>

                <div className="topbar">
                    {/* <!-- LOGO --> */}
                    <div className="topbar-left">
                        <a href="/" className="logo">
                            App content
                        </a>
                    </div>
                    {/* <!-- LOGO END --> */}

                    {/* Topbar Navigation */}
                    <nav className="navbar-custom">
                        <ul className="navbar-right d-flex list-inline float-right mb-0">


                            <li className="dropdown notification-list">
                                <div className="dropdown notification-list nav-pro-img">
                                    <a className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="/assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                        <div className="dropdown-divider"></div>
                                        <span className="dropdown-item text-danger cursor-pointer" onClick={this.logoutUser}><i className="mdi mdi-power text-danger"></i>Logout</span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="list-inline menu-left mb-0">
                            <li className="float-left">
                                <button className="button-menu-mobile open-left waves-effect">
                                    <i className="mdi mdi-menu"></i>
                                </button>
                            </li>
                            <li className="float-left">
                                <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '16px' }}>
                                    {this.props.user.organisation_name || 'No Title'}
                                </p>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth || {},
    user: state.auth.user || {},
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUserData()),

})

export const CHeader = connect(mapStateToProps, mapDispatchToProps)(Header)