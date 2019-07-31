import React from 'react';
import './App.css';

import { CookiesProvider} from 'react-cookie';



import Navigation from './components/Navigation/Navigation'
import ContentContainer from './components/ContentContainer/ContentContainer'

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Navigation/>
          <ContentContainer/>
      </CookiesProvider>
    </div>
  );
}

export default App;
