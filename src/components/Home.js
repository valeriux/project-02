import React from 'react'
import RandomCocktail from './RandomCocktail'

class Home extends React.Component {
  constructor(){
    super()

  }


  render() {
    return(
      <section>
        <RandomCocktail />
        <div className="container">

        </div>
      </section>
    )
  }

}

export default Home
