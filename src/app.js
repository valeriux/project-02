import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './style.scss'

import 'bulma'

import Home from './components/Home'
import CocktailShow from './components/CocktailShow'
import CocktailCard from './components/CocktailCard'
import CocktailIndex from './components/CocktailIndex'

import NavBar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path='/cocktails/:id' component={CocktailShow} />
            <Route path="/dogs" component={CocktailIndex} />
            <Route exact path='/' component={Home} />

          </Switch>
        </div>
      </Router>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'))
