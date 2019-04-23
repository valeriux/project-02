import React from 'react'
import { Link } from 'react-router-dom'

import DogCard from './DogCard'

class DogIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      dogs: []
    }
  }

  componentDidMount(){
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(res => res.json())
      .then(data => this.setState({ dogs: data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.dogs.map(dog =>
              <div key={dog.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`dogs/${dog.id}`}>
                  <DogCard {...dog} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}
export default DogIndex
