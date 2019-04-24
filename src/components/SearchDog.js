import React from 'react'
import axios from 'axios'
import Select from 'react-select'


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

  handleChange({ value }) {
    axios.get(`https://api.thedogapi.com/v1/breeds/${value}`)
      .then(res => {
        const dog = res.data
        axios.get('https://api.thedogapi.com/v1/images/search', {
          params: { breed_id: value }
        })
          .then(res => {
            dog.image = res.data[0].url
            this.setState({ dog })
          })
      })
  }

  render() {
    return(
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Select
              placeholder={'Select something'}
              onChange={this.handleChange}

              options={this.state.dogs.map(dog => {
                return {
                  value: dog.id,
                  label: dog.name
                }
              })
              }
            />
          </div>
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
