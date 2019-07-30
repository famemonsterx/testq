import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import { useCookies } from 'react-cookie'

const PrivateRoute = ({component: Component, ...rest}) => {
    const [cookies] = useCookies('login');
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin(cookies.login) ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;