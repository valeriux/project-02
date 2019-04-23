import './style/scss'

import React from 'react'

import ReactDOM from 'react-DOM'

class App extends React.Component {
  constructor(){
    super()
  }


  componentDidMount() {
    fetch('https://api.thedogapi.com/v1/breeds/')

  }

  render(){
    return(

    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
