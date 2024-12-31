// ================= All Documentation
import                       './Navbar.css'
import { Link }         from 'react-router-dom'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  // ============== All hooks
  const [line, setLine] = useState({width: 0, left: 0})
  const navRef = useRef()
  const firstItemRef = useRef()

  // ============== All Functions
  // useeffecet render 
  useEffect(()=>{
    const firstItem = firstItemRef.current.getBoundingClientRect()
    const navOffset = navRef.current.getBoundingClientRect().left
    setLine({width: firstItem.width, left: firstItem.left - navOffset})
  },[])

  // ============== handle hover part
  const handleHover = (e)=>{
    const target = e.target.getBoundingClientRect()
    const navOffset = navRef.current.getBoundingClientRect().left
    setLine({width: target.width, left: target.left - navOffset})
  }

  // ============== Remove Hover Part
  const handleRemoveHover = ()=>{
    const firstItem = navRef.current.getBoundingClientRect()
    const navOffset = navRef.current.getBoundingClientRect().left
    setLine({width: firstItem.width, left: firstItem.left - navOffset})
  }

  return (
    <>
      {/* --------------------------------------------------------------- */} 
      {/* ====================== Navbar Part Start ====================== */}

      <nav className='mubin-navBar'>

        <div className="container">
          <div className="mubin-navRow">

            {/* -------- Navbar Logo -------- */}
            <img  src="images/logo.png" alt="logo_image" className='logo' />

            {/* -------- Navbar Items -------- */}
            <ul onMouseLeave={handleRemoveHover} className='navItems'>
              <li ref={navRef} onMouseEnter={handleHover}><Link ref={firstItemRef}  to={"#"}>Home</Link></li>
              <li onMouseEnter={handleHover}><Link to={"#"}>Services</Link></li>
              <li onMouseEnter={handleHover}><Link to={"#"}>Schedule</Link></li>
              <li onMouseEnter={handleHover}><Link to={"#"}>Contact us</Link></li>
              <p style={line} className='line'></p>
            </ul>


            {/* -------- Navbar Button -------- */}
            <Link to={'#'} className='navButton'>Check Status</Link>
          </div>

          {/* -------- Navbar Responsive Componenet -------- */}
          <ResponsiveNavbar/>
        </div>
      </nav>

      {/* ====================== Navbar Part End ====================== */}
      {/* ------------------------------------------------------------- */}
    </>
  )
}

export default Navbar