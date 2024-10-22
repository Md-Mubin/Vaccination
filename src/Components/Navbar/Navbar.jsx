// ================= All Documentation
import                       './Navbar.css'
import React            from 'react'
import { Link }         from 'react-router-dom'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'

const Navbar = () => {
  return (
    <>
      {/* ====================== Navbar Part Start ====================== */}

      <nav className='navBar'>

        <div className="container">
          <div className="navRow">

            {/* -------- Navbar Logo -------- */}
            <img src="images/logo.png" alt="logo_image" className='logo' />

            {/* -------- Navbar Items -------- */}
            <ul className='navItems'>
              <li><Link to={"#"}>Home</Link></li>
              <li><Link to={"#"}>Services</Link></li>
              <li><Link to={"#"}>Schedule</Link></li>
              <li><Link to={"#"}>Contact us</Link></li>
            </ul>

            {/* -------- Navbar Button -------- */}
            <Link to={'#'} className='navButton'>Check Status</Link>
          </div>

          {/* -------- Navbar Responsive Componenet -------- */}
          <ResponsiveNavbar/>
        </div>
      </nav>

      {/* ====================== Navbar Part End ====================== */}
    </>
  )
}

export default Navbar