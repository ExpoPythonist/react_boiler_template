import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer } from '../components/common';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        <div>
            <Header />
            <Component {...props} />
            <Footer />
        </div>
    )} />
)

export default PublicRoute