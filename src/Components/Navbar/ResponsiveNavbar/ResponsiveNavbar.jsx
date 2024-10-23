// ================= All Documentation
import                          './ResponsiveNavbar.css'
import { Link }            from 'react-router-dom'
import { BiBarChart }      from 'react-icons/bi'
import { FaArrowUp }       from 'react-icons/fa'
import React, { useState } from 'react'

const ResponsiveNavbar = () => {

    // ======== For Responsive Nav Toggle Function
    const [navShow, navClose] = useState(false)

    // -------- toggle function
    const handleNav = () => {
        navClose(!navShow)
    }

    return (
        <>
            {/* ============= Responsive Navbar Part Start ============= */}
          
            <nav className='mubin-resNav'>

                {/* ------- Responsive Navbar Logo And Toggle Button ------- */}
                <ul className='mubin-resNavRow'>
                    <img src="images/logo.png" alt="logo_image" className='resLogo' />
                    <button onClick={handleNav} ><BiBarChart/></button>
                </ul>

                {/* ------- Responsive Navbar Items ------- */}
                <ul className={navShow ? "resNavClose" : "resNavOpen"}>
                    <li className='resNavItems'>
                        <Link to={"#"}>Home</Link>
                        <Link to={"#"}>Services</Link>
                        <Link to={"#"}>Schedule</Link>
                        <Link to={"#"}>Contact us</Link>

                        {/* ----- Button For Close The Navbar by running handleNav function ----- */}
                        <button onClick={handleNav} className='resNavItemsButton'><FaArrowUp />Close</button>
                    </li>
                </ul>
            </nav>

            {/* ============= Responsive Navbar Part End ============= */}
        </>
    )
}

export default ResponsiveNavbar