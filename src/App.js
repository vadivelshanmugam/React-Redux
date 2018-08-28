import React, { Component } from 'react';
import './App.css';
import IssueLists from './containers/IssueList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">facebook/create-react-app</h1>
        </header>
        <IssueLists />
      </div>
    );
  }
}

export default App;
