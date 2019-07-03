import React from 'react';
import AppSettings from '../../Containers/AppSettings';
import { connect } from 'react-redux'
import HubDashboard from './hub/HubDashboard';
import { HUB } from '../../Routes/data';

class DB extends AppSettings {
    render() {
        let { group } = this.props;

        if (group === HUB) {
            return <HubDashboard />
        }

    }
}

const mapStateToProps = (state) => ({
    role_id: state.auth.user && state.auth.user.role_id,
    group: state.auth.user && state.auth.group
})

export const Dashboard = connect(mapStateToProps)(DB)