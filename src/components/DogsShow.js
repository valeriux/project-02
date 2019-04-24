import React from 'react'
//import ReactDOM from 'react-router-dom'
import axios from 'axios'

class DogsShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dog: null
    }
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

  render() {
    if(!this.state.dog) return null
    return(
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
              <h2 id="contenido" className="title is-3">Temperament:         {this.state.dog.temperament}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DogsShow
