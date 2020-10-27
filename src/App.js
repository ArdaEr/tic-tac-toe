import React, { useState } from 'react';
import './App.css'

import SessionContext from './contexts/SessionContext';
import Router from './Router';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <SessionContext.Provider
    value = {{
      isAuthenticated,
      setAuthenticated,
    }}
    >
    <div className="App">
     
      <header className="App-header">
        <div className="App-container">
          <Router />
        </div>
      
   
      </header>
    </div>
    </SessionContext.Provider>
  );
}

export default App;
