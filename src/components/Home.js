import React from 'react'


import './style.scss'

const Home = () => {
  return(
    <section className="section is-medium" id="home">
      <div className="container">

        <table className="table">
          <tr>
            <td  className="color"><h1 className="title is-1">Welcome to Woof Woof Dog Page</h1></td>
            <td> <img src="/media/didi.jpg" className="shake"></img> </td>
          </tr>
          <tr>
            <td  className="color"><h2 className="subtitle is-2">A site for Dog Breeds</h2></td>
          </tr>
        </table>

      </div>


    </section>
  )
}


export default Home
