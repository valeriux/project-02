import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import ReactDOM from 'react-DOM'

import 'bulma'

import Navbar from './components/Navbar'
import Home from './components/Home'
import DogIndex from './components/DogIndex'
import DogsShow from './components/DogsShow'



class App extends React.Component{
  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/dogs/:id" component={DogsShow} />
            <Route path="/dogs" component={DogIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
