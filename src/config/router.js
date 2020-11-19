import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import Login from '../sceens/login'
import Home from '../sceens/home'
import Favorite from '../sceens/favorite'
import Details from '../sceens/details'
import PrivateRoute from '../utils/privateRoute'
const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Switch>
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/favorite' component={Favorite} />
        <Route path='/movie/:id' component={Details} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
