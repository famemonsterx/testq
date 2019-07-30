import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../../utils/isLogin';
import { useCookies } from 'react-cookie'

const PrivateRoute = ({component: Component, ...rest}) => {
    const [cookies] = useCookies('login');
    return (
        <Route {...rest} render={props => (
            isLogin(cookies.login) ?
                <Component {...props} />
                : <Redirect to="/auth" />
        )} />
    );
};

export default PrivateRoute;