import React, { WrappedComponent } from 'react';
import './App.css';

import { CookiesProvider, withCookies } from 'react-cookie';

import { BrowserRouter } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import ContentContainer from './components/ContentContainer/ContentContainer'
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
          <BrowserRouter>
            <Navigation/>
            <ContentContainer/>
          </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}


export default App;
