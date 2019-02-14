import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alice from './Alice';

class App extends Component {

  constructor() {
    super();
    this.state = {
      greeting: "Hello World!",
      parentMessage: "Hello Alice!"
    }
  }

  render() {
    return (
      <div className="greeting">
        <h1> {this.state.greeting} </h1>
        <Alice newMsg={this.state.parentMessage}/>
      </div>
    );
  }
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
//        <Alice/>
//      </div>
//    );
//  }
}

export default App;
