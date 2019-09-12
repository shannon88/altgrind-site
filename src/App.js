import React, { Component } from 'react';
import Website from './containers/Website/Website'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Website/>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
