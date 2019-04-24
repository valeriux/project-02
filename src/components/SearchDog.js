import {Link} from 'react-router-dom'
import React from 'react'
import DogCard from './DogCard'
import axios from 'axios'


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
    const breedId = e.target.value
    axios.get(`https://api.thedogapi.com/v1/breeds/${breedId}`)
      .then(res => {
        const dog = res.data
        axios.get('https://api.thedogapi.com/v1/images/search', {
          params: {
            breed_id: breedId
          }
        })
          .then(res => {
            dog.image = res.data[0].url
            this.setState({ dog })
          })
      })
  }



  render() {
    return(
      <div>
        <div className="select">
          <select onChange={this.handleChange}>
            {this.state.dogs.map(dog =>
              <option key={dog.id} value={dog.id}>{dog.name}
              </option>
            )}
          </select>
        </div>
        {this.state.dog &&
          <section className="section">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  <h1 className="title is-1">{this.state.dog.name}</h1>
                </div>
              </div>
              <div className="columns">
                <div className="column is-half-desktop is-full-tablet">
                  <figure className="image">
                    <img src={this.state.dog.image} />
                  </figure>
                </div>
                <div className="column is-half-desktop is-full-tablet">
                  <h2 id="contenido" className="title is-3">Breed For:
                    {this.state.dog.bred_for}</h2>
                  <h2 id="contenido" className="title is-3">Temperament: {this.state.dog.temperament}</h2>
                </div>
              </div>
            </div>
          </section>
        }
      </div>
    )
  }
}

export default SearchDog
