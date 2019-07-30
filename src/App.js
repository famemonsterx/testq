import React from 'react';
import './App.css';

import { CookiesProvider} from 'react-cookie';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

import Board from './components/Board/Board';
import AddError from './components/AddError/AddError'
import Auth from './components/Auth/Auth';


function App() {
  return (
    <div className="App">
      <CookiesProvider>
          <BrowserRouter>
              <Switch>
                  <PublicRoute restricted={false} component={Auth} path="/auth" exact />
                  <PrivateRoute component={AddError} path="/new-error" exact />
                  <PrivateRoute component={Board} path="/board" exact />
              </Switch>
          </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
