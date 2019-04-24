import {Link} from 'react-router-dom'
import React from 'react'
import DogCard from './DogCard'


class SearchDog extends React.Component {

  constructor() {
    super()

    this.state = { dogs: [] }

    this.handleChange = this.handleChange.bind(this)
    this.loadDogs = this.loadDogs.bind(this)

  }

  componentDidMount(){
    this.loadDogs()
  }

  loadDogs(){
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(res  => res.json())
      .then(data => this.setState({ dogs: data }))
  }

  handleChange(e) {
    this.props.history.push(`/dogs/${e.target.value}`)
  }



  render() {
    return(
      <div className="select">
        <select onChange={this.handleChange}>
          {this.state.dogs.map(dog =>
            <option key={dog.id} value={dog.id}>{dog.name}
            </option>
          )}
        </select>
      </div>



    )
  }
}

export default SearchDog
