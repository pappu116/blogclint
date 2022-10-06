import React from 'react'
import Logo from "../images/logo.png"


const Footer = () => {
  return (
   <footer>
    <img src={Logo} alt="" />
    <span>
      Made With ❤️ and <b>React.Js</b>.
    </span>
   </footer>
  )
}

export default Footer