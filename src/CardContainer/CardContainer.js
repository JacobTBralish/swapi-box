import React, { Component } from 'react'
import { Card } from '../Card/Card'
import './CardContainer.css'


class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: JSON.parse(localStorage.getItem('people')) || [],
      planets: JSON.parse(localStorage.getItem('planets')) || [],
      vehicles: JSON.parse(localStorage.getItem('vehicles')) || []
    }
  }

  async componentDidMount() {
    const { name, fetch } = this.props

    if(this.state[name] !== []) {
      const newState = await fetch();

      this.setState({
        [name] : newState
      }, localStorage.setItem([name], JSON.stringify(newState)))
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { name, fetch } = nextProps

    if(this.props.name !== name && this.state[name] !== []) {
      const newState = await fetch()

      this.setState({
        [name] : newState
      }, localStorage.setItem([name], JSON.stringify(newState)))
    }
  }

  render() {
    const { name } = this.props

    const Cards = this.state[name].map( (card, i) => {
      return <Card {...card} key={card.Name + i}/> 
    })

    return (
      <div className='card-container'>
        {Cards}
      </div>
    )
  }
}

export default CardContainer