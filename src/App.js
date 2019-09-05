import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './views/Home'
import About from './views/About'

class App extends Component {
  render () {
    return (
    <div className="grid">
      <div className="app">
        <Header/>
        <Home/>
        <About/>
      </div>
    </div>
  );
  }
}

export default App;
