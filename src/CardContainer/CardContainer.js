import React, { Component } from 'react'
import { Card } from '../Card/Card'
import './CardContainer.css'


class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: JSON.parse(localStorage.getItem('people')) || [],
      planets: JSON.parse(localStorage.getItem('planets')) || [],
      vehicles: JSON.parse(localStorage.getItem('vehicles')) || [],
      favorites: [],
      loading: null
    }
  }

  addFavoriteProp = (card) => {
    return {...card, style: 'favorite'}
  }

  findSelected = (event, card) => {
    return event.target.id === card.Name
  }

  handleClick = (event) => {
    const { name } = this.props

    if(!event.target.classList.contains('favorite')) {
    
      const cardToFavorite = this.state[name].find( card => this.findSelected(event, card))
      const notFavorites = this.state[name].filter( card => event.target.id !== card.Name )

      const newCard = this.addFavoriteProp(cardToFavorite)

      const newState = [...notFavorites, newCard]

      const currentFavorites = [...this.state.favorites]

      this.setState({
        [name] : newState,
        favorites: [...currentFavorites, newCard]
      }, localStorage.setItem([name], JSON.stringify(newState)))
    }
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