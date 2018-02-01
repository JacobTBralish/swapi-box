import React from 'react';
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
  return( 
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/people' render={(...props)component={People}} />
        <Route path='/planets' component={Planets} />
        <Route path='/vehicles' component={Vehicles} />
      </Switch>
    </div>
  )
}


export default Main;