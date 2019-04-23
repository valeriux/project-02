import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = { active: true }
  }


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item title is-1"> 🐶 🏠 🐶 </Link>
            <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>

            <div className="navbar-start">
              <Link to="/dogs" className="navbar-item">Look at my Dogs</Link>
            </div>


            <div className="navbar-start">
              <Link to="/dogs" className="navbar-item">Search for a Dog</Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
