import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import CocktailCard from './CocktailCard'
import SearchDog from './SearchDog'
import axios from 'axios'

class CocktailIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      dogs: []
    }
  }

  componentDidMount(){
    axios('https://api.thedogapi.com/v1/breeds')
      .then(res => this.setState({ dogs: res.data }))
  }


  render() {
    console.log(this.state.dogs, 'PROBANDO')
    if(!this.state.dogs) return  <Loading />
    return (
      <section className="section" id="dog_section">
        <div className="container">
          <SearchDog dogs={this.state.dog}/>

          <br />
          <br />
        </div>


        <div className="columns is-multiline">

          {(this.state.dogs || []).map(dog =>
            <div key={dog.id} className="column is-one-fifth-desktop is-one-third-tablet">

              <Link to={`dogs/${dog.id}`}>
                <CocktailCard {...dog} />
              </Link>
            </div>
          )}

        </div>
      </section>
    )
  }
}
export default CocktailIndex
