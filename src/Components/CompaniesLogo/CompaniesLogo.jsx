// ================= All Documentation
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './CompaniesLogo.css'
import React from 'react'

const CompaniesLogo = () => {
    return (
        <>
            <ParallaxProvider>

                {/* ------------------------------------------------------ */}
                {/* ============= Companies Logos Part Start ============= */}

                <section className='mubin-companiesLogo'>
                    <div className="container">

                        {/* ------- different companies logos ------- */}
                        <Parallax speed={-5}>

                            <ul className='mubin-companiesLogoRow'>

                                {/* logo-1 */}
                                <li>
                                    <img src="images/p1.png" alt="companies_logo" />
                                </li>

                                {/* logo-2 */}
                                <li>
                                    <img src="images/p2.png" alt="companies_logo" />
                                </li>

                                {/* logo-3 */}
                                <li>
                                    <img src="images/p3.png" alt="companies_logo" />
                                </li>

                                {/* logo-4 */}
                                <li>
                                    <img src="images/p4.png" alt="companies_logo" />
                                </li>
                            </ul>
                        </Parallax>
                    </div>
                </section>

                {/* ============= Companies Logos Part End ============= */}
                {/* ---------------------------------------------------- */}
            </ParallaxProvider>
        </>
    )
}

export default CompaniesLogo