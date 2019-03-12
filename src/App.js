import React, { Component } from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          DJ Animal Farm
        </header>
          <DrumMachine />
        </div>
    );
  }
}

export default App;
