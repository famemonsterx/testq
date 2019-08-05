import React, {useMemo} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie'

const PrivateRoute = ({component: Component, ...rest}) => {
    const [ cookies ] = useCookies(['login']);

    const isAuthorized = useMemo(() => {
        if (cookies.login === undefined) {
            return cookies.login = false;
        }
        return JSON.parse(cookies.login);
    }, [cookies.login]);

    return (
        <Route {...rest} render={props => (
            (isAuthorized) ?
                <Component {...props} />
                : <Redirect to="/auth" />
        )} />
    );
};

export default PrivateRoute;