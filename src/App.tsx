import React from 'react';

import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <div className="tableCellWrapper">
        <div className="tableCell">
          <Form title="Login Form" password name email />
        </div>
      </div>

    </div>
  );
}

export default App;
