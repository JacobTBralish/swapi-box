import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { getScroll } from '../api.js'

class App extends Component {
  constructor() {
    super()
    
  }

 componentDidMount() {
  getScroll();
 }

  // handleClick = (e) => {
  //   const route = e.target.text.toLowerCase()
  //   const url = `https://swapi.co/api/${route}`

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => data.results)
  //     .then(console.log)
  // }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleClick} />
        <Main />
      </div>
    );
  }
}

export default App;
