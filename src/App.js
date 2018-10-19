import React, { Component } from 'react';
import Landing from './Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
