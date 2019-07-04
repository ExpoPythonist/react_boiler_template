import React from 'react';
import { connect } from 'react-redux';
import DashContext from '../../../core/context/DashContext';

class Sidebar extends DashContext {
    componentDidMount() {
        this.initMetisMenu();
        this.intSlimscrollmenu();
        this.initLeftMenuCollapse();
    }

    render() {
        return (
            <div className="left side-menu">
                <div className="slimscroll-menu" id="remove-scroll">
                    <div id="sidebar-menu">
                        {/* <!-- Left Menu Start --> */}
                        <ul className="metismenu" id="side-menu">
                            {this.props.navigation}
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    role_id: state.auth.user && state.auth.user.role_id
})



export const LeftSidebar = connect(mapStateToProps)(Sidebar);