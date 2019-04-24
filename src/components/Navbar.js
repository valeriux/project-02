import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item title is-6"><i className="fas fa-paw fa-2x paws-icon"></i>Home</Link>

            <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>

            <div className="navbar-start">
              <Link to="/dogs" className="navbar-item title is-6"><i className="fas fa-dog fa-2x"></i>  Look at my Dogs </Link>
              <Link to="/dogs/search" className="navbar-item title is-6"><i className="fas fa-bone fa-2x"></i>Search for a Dog</Link>
            </div>






          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
