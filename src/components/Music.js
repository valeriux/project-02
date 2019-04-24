import React from 'react'
import ReactDOM from 'react-dom'

class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      pause: true
    }
    this.src='media/sound1.mp3'
    this.audio = new Audio(this.url)
  }

  play = () => {
    this.setState({ play: true, pause: false })
    this.audio.play()
  }

  pause = () => {
    this.setState({ play: false, pause: true })
    this.audio.pause()
  }

  render() {
    return (
      <div id="container">
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Music />,
  document.getElementById('container')
)
