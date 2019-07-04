import React from 'react';
import AppSettings from '../../../Containers/AppSettings';
import { connect } from 'react-redux'
import DashboardContent from './dashboardContent/DashboardContent';

class DB extends AppSettings {
    render() {

        return <DashboardContent />


    }
}

const mapStateToProps = (state) => ({
    role_id: state.auth.user && state.auth.user.role_id,
})

export const Dashboard = connect(mapStateToProps)(DB)