import React, { Component } from 'react'
import { Card } from '../Card/Card'

class CardContainer extends Component {
  constructor({name, fetch}) {
    super({name, fetch})
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

  async componentDidMount() {
    
  }

  render() {
    const Cards = this.state[name].map( card => {
      return <Card {...card} /> 
    })

    return (
      <div>
        {Cards}
      </div>
    )
  }
}