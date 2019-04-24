//import ReactDOM from 'react-router-dom'
//import axios from 'axios'
//import Select from 'react-select'
import React from 'react'
//import ReactDOM from 'react-dom'

class SearchDog extends React.Component {

  constructor() {
    super()

    this.state = { dogs: [] }
  }

  componentDidMount(){
    this.loadDogs()
  }

  loadDogs(){
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(res  => res.json())
      .then(data => this.setState({ dogs: data }))
  }



  render() {
    return(
      <div className="select">
        <select>
          {this.state.dogs.map(dog =>
            <option key={dog.id} value={dog.id}>{dog.name}</option>
          )}
        </select>
      </div>



    )
  }
}

export default SearchDog
