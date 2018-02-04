import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import { getPeople, getPlanets, getVehicles } from '../api'
import { Switch, Route } from 'react-router-dom'

const Main = ({ scroll }) => {
  return( 
    <div>
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