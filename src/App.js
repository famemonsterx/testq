import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import { CookiesProvider} from 'react-cookie';


function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Auth/>
      </CookiesProvider>
    </div>
  );
}

export default App;
