import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav>
        
    <h2>MexCal</h2>
    <div>
        <a href=''>Home</a>
        <a href=''>Productos</a>
        <a href=''>Contactos</a>
    </div>
    <CartWidget />

    
      
    </nav>
  )
}

export default Navbar
