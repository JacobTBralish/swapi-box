import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { getScroll } from '../api.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      scroll: {}
    }
  }

  async componentDidMount() {
    const scroll = await getScroll()
    this.setState({
      scroll
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
