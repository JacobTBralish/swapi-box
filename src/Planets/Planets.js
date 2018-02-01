import React, { Component } from 'react'
import { getPlanets } from '../api'
import { Card } from '../Card/Card'

class Planets extends Component {
  constructor() {
    super()

    this.state = {
      planets: JSON.parse(localStorage.getItem('planets')) || [] 
    }

  }

  async componentDidMount() {
    if(this.state.planets !== []) {
      const planets = await getPlanets();

      this.setState({
        planets
      }, localStorage.setItem('planets', JSON.stringify(planets)))
    }
  }

  render() {

    const planetsToRender = this.state.planets.map( (planet, i) => {
      return <Card {...planet} key={planet.Name + i}/>
    })

    return (
      <div>
        {planetsToRender}
      </div>
    )
  }
}

export default Planets;