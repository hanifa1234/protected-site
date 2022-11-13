import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="nav-link"> Home </Link>
            <Link to="/about" className="nav-link">  About  </Link>
            <Link to="/addblock" className="nav-link" > AddBlock </Link>
        </nav>
    )
}

export default Navbar