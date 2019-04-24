import React from 'react'

const Footer = (props) => {
  return (
    <footer>
      {props.footer.text[0]}
      <br />
      {props.footer.text[1]}
      <br />
      {props.footer.text[2]}<a href='https://thedogapi.com'>: The Dog Api <i className="fas fa-paw fa-2x paws-icon"></i></a>

    </footer>
  )
}

export default Footer
