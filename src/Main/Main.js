import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import { getPeople, getPlanets, getVehicles } from '../api'
import { Switch, Route } from 'react-router-dom'
import './Main.css'

const Main = ({ scroll }) => {
  return( 
    <div className="container">
      <Switch>
        <Route exact path='/' render={() => (
          <Welcome scroll={scroll} /> 
        )} />
        <Route path='/people' render={() => (
          <CardContainer name='people' fetch={getPeople} />
        )} />
        <Route path='/planets' render={() => (
          <CardContainer name='planets' fetch={getPlanets} />
        )} />
       <Route path='/vehicles' render={() => (
          <CardContainer name='vehicles' fetch={getVehicles} />
        )} />
       <Route path='/favorites' render={() => (
        <CardContainer name='favorites' />
        )} />
      </Switch>
    </div>
  )
}


export default Main;