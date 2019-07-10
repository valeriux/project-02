import React from 'react'
import { Link, withRouter }  from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state = { active: false }
    this.toggleActive = this.toggleActive.bind(this)
  }
  toggleActive(){
    this.setState({ active: !this.state.active })
  }
  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }
  render() {
    return(
      <nav className="navbar" id="navbar_style">
        <div className="container" id="navbar-letter" >
          <div className="navbar-brand" >

            <Link to="/" className="navbar-item">Home</Link>


            <a role="button"
              className={`navbar-burger${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
            <div className="navbar-start">
              <Link to="/dogs" className="navbar-item">Search for a Dog</Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)
