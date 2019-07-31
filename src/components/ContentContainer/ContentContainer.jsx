import React from 'react'

import AddError from "../AddError/AddError";
import Board from "../Board/Board";
import Auth from "../Auth/Auth";

import { Switch, BrowserRouter } from 'react-router-dom'

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';


const ContentContainer = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute restricted={true} component={Auth} path="/auth" exact />
                    <PrivateRoute component={AddError} path="/new-error" exact />
                    <PrivateRoute component={Board} path="/board" exact />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default ContentContainer