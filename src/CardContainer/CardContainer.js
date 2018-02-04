import React, { Component } from 'react'
import { Card } from '../Card/Card'
import './CardContainer.css'
import { addFavoriteProp, makeNewState } from '../helper'


class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: JSON.parse(localStorage.getItem('people')) || [],
      planets: JSON.parse(localStorage.getItem('planets')) || [],
      vehicles: JSON.parse(localStorage.getItem('vehicles')) || [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      loading: null
    }
  }

  handleClick = (event) => {
    const { name } = this.props

    if(!event.target.classList.contains('favorite')) {
      const selectedCard = this.state[name].find( card => event.target.id === card.Name)
      const newCard = addFavoriteProp(selectedCard)
      const newState = makeNewState(this.state[name], event)

      this.setState({
        [name] : newState,
        favorites: [...this.state.favorites, newCard]
      }, localStorage.setItem([name], JSON.stringify(newState)))
    }
  }

  componentWillUnmount() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
  }

  async componentDidMount() {
    const { name, fetch } = this.props

    if(!this.state[name].length) {
      try {
        this.setState({ loading: true })
        const newState = await fetch();

        this.setState({
          [name] : newState,
          loading: false
        }, localStorage.setItem([name], JSON.stringify(newState)))
      } catch(error) {
          throw(new Error('Error retrieving sick Star Wars Data'))
      }
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { name, fetch } = nextProps

    if(this.props.name !== name && !this.state[name].length) {
      try {
        this.setState({ loading: true })
        const newState = await fetch()

        this.setState({
          [name] : newState,
          loading: false
        }, localStorage.setItem([name], JSON.stringify(newState)))
      } catch(error) {
        throw(new Error('Error retrieving sick Star Wars Data'))
      }
    }
  }

  render() {
    const { name } = this.props

    const Cards = this.state[name].map( (card, i) => {
      return <Card {...card} 
              key={card.Name + i} 
              handleClick={this.handleClick}
              id={card.Name} /> 
    })

    return (
      <div className='card-container'>
        { this.state.loading && <h1> Loading... </h1> }
        {Cards}
      </div>
    )
  }
}

export default CardContainer