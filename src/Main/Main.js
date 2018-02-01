import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import { getPeople, getPlanets, getVehicles } from '../api'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
  return( 
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/people' render={() => (
          <CardContainer name='people' fetch={getPeople} />
        )} />
        <Route path='/planets' render={() => (
          <CardContainer name='planets' fetch={getPlanets} />
        )} />
       <Route path='/vehicles' render={() => (
          <CardContainer name='vehicles' fetch={getVehicles} />
        )} />
      </Switch>
    </div>
  )
}


export default Main;