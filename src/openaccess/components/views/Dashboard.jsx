import React from 'react';
import AppSettings from '../../../Containers/AppSettings';
import { connect } from 'react-redux'
import HubDashboard from './hub/HubDashboard';

class DB extends AppSettings {
    render() {

        return <HubDashboard />


    }
}

const mapStateToProps = (state) => ({
    role_id: state.auth.user && state.auth.user.role_id,
})

export const Dashboard = connect(mapStateToProps)(DB)