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
            <h1>DJ Animal Farm</h1>
        </header>
          <DrumMachine />
      <footer>
          “All animals are equal, but some animals are more equal than others.”
      </footer>
      </div>
    );
  }
}

export default App;
