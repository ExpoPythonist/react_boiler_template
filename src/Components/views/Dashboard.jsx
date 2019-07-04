import React from 'react';
import AppSettings from '../../Containers/AppSettings';
import { connect } from 'react-redux'
import HubDashboard from './hub/HubDashboard';
import { HUB } from '../../Routes/data';

class DB extends React.Component {
    render() {

        return <HubDashboard />


    }
}

const mapStateToProps = (state) => ({
})

export const Dashboard = connect(mapStateToProps)(DB)