import React from 'react'
import axios from 'axios'


class DogCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dog: null
    }

  }

  componentDidMount(){
    const dog = {}
    axios.get('https://api.thedogapi.com/v1/images/search', {
      params: {
        breed_id: this.props.id
      }
    })
      .then(res => {
        dog.image = res.data[0].url
        this.setState({ dog })
      })

  }

  render() {
    if(!this.state.dog) return null
    console.log(this.state)
    return(
      <div className="card">
        <div className="card-header">
          <h3 className="columns is-multiline title is-2">{this.props.name}</h3>
        </div>
        <div className="card-image">
          <figure className="columns is-multiline image is-1by1">
            <img src={this.state.dog.image} />
          </figure>
        </div>
        <audio src="media/sound1.mp3"></audio>
      </div>
    )
  }
}

export default DogCard
