import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  constructor() {
    super()
    
  }

  handleClick = (e) => {
    console.log(e.target.text.toLowerCase())
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleClick}/>
        <Main />
      </div>
    );
  }
}

export default App;
