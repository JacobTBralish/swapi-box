import React, { Component } from 'react'
import { getPeople } from '../api'
import { Card } from '../Card/Card'

class People extends Component {
  constructor() {
    super()

    this.state = {
      people: JSON.parse(localStorage.getItem('people')) || [] 
    }

  }

  async componentDidMount() {
    if(this.state.people !== []) {
      const people = await getPeople();

      this.setState({
        people
      }, localStorage.setItem('people', JSON.stringify(people)))
    }
  }

  render() {

    const peopleToRender = this.state.people.map( (person, i) => {
      return <Card {...person} key={person.name + i}/>
    })

    return (
      <div>
        {peopleToRender}
      </div>
    )
  }
}

export default People;