// ================= All Documentation
import                                 './Footer.css'
import React                      from 'react'
import { Link }                   from 'react-router-dom'
import { FiTwitter }              from 'react-icons/fi'
import { FaFacebook }             from 'react-icons/fa'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      {/* ============= Footer Part Start ============= */}

      <footer>

        {/* ----- footer background image ----- */}
        <img src="images/footer_background.png" alt="footer_backgroundImage" className='footerBGimage' />

        <div className="container">

          {/* fooetr main part */}
          <div className="mubin-footerRow">

            {/* footer logo */}
            <img src="images/logo.png" alt="footer_logo" />

            {/* footer all items */}
            <ul className='mubin-footerItems'>
              <li><Link to={"#"}>Home</Link></li>
              <li><Link to={"#"}>Services</Link></li>
              <li><Link to={"#"}>Schedule</Link></li>
              <li><Link to={"#"}>Contact us</Link></li>
            </ul>

            {/* all socials links in footer */}
            <ul className='mubin-socialIcons'>
              <li><Link to={"#"}><FaYoutube /></Link></li>
              <li><Link to={"#"}><FaInstagram /></Link></li>
              <li><Link to={"#"}><FiTwitter /></Link></li>
              <li><Link to={"#"}><FaFacebook /></Link></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* ============= Footer Part End ============= */}
    </>
  )
}

export default Footer