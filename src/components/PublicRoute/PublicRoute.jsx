import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../../utils/isLogin';
import { useCookies } from 'react-cookie'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const [cookies] = useCookies('login');
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin(cookies.login) && restricted ?
                <Redirect to="/board" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;