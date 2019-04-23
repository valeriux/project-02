import React from 'react'
//import ReactDOM from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'

class DogsShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dog: null }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    axios.get(`https://api.thedogapi.com/v1/breeds/${this.props.match.params.id}`)
      .then(res => {
        const dog = res.data
        axios.get('https://api.thedogapi.com/v1/images/search', {
          params: {
            breed_id: this.props.match.params.id
          }
        })
          .then(res => {
            dog.image = res.data[0].url
            this.setState({ dog })
          })
      })
  }

  handleChange(){
    axios.get(`https://api.thedogapi.com/v1/breeds/${this.props.match.params.id}`)
  }

  render() {
    if(!this.state.dog) return null
    return(
      <section className="section">
        <Select onChange={this.handleChange}>
          <option>${breeds.id}</option>



        <select onChange={this.handleChange}>
            this.state.breeds.map(breed => {
              <option>breed.name</option>
            })
            }






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
              <h2 className="title is-2">{this.state.dog.bred_for}</h2>
              <hr />
              <p className="is-size-4">{this.state.dog.temperament}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DogsShow
