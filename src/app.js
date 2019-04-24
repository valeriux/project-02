import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import ReactDOM from 'react-DOM'

import 'bulma'

import Navbar from './components/Navbar'
import Home from './components/Home'
import DogIndex from './components/DogIndex'
import DogsShow from './components/DogsShow'
import SearchDog from './components/SearchDog'

import Footer from './components/Footer'

//import Sound from 'react-sound'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      footer: {
        text: [
          'Project-02 © General Assembly 2019',
          'Created by: Valeria Bocanegra and Sean Gray',
          'Dog Pictures provided by'
        ]

      }
    }
  }

  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/dogs/search" component={SearchDog} />
            <Route path="/dogs/:id" component={DogsShow} />
            <Route path="/dogs" component={DogIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer footer={this.state.footer} />



      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
