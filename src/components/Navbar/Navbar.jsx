import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><button className='btn'>Pricing</button></li>
        </ul>
    </nav>
  )
}

export default Navbar