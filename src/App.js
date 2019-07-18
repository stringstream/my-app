import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HelloWorldApi from "./components/HelloWorldApi";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path="/" render={() => <h1>hello uwu</h1>}></Route>
        <Route
          path="/wat"
          render={() => (
            <HelloWorldApi hellothere="HELLOW THERE"></HelloWorldApi>
          )}
        ></Route>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
