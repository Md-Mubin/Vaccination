// ================= All Documentation
import            './CompaniesLogo.css'
import React from 'react'

const CompaniesLogo = () => {
    return (
        <>
            {/* ============= Companies Logos Part Start ============= */}
            <section className='mubin-companiesLogo'>
                <div className="container">

                    {/* ------- different companies logos ------- */}
                    <ul className='mubin-companiesLogoRow'>

                        {/* logo-1 */}
                        <li>
                            <img src="images/p1.png" alt="companies_logo" className='images' />
                        </li>

                        {/* logo-2 */}
                        <li>
                            <img src="images/p2.png" alt="companies_logo" className='images' />
                        </li>

                        {/* logo-3 */}
                        <li>
                            <img src="images/p3.png" alt="companies_logo" className='images' />
                        </li>

                        {/* logo-4 */}
                        <li>
                            <img src="images/p4.png" alt="companies_logo" className='images' />
                        </li>
                    </ul>
                </div>
            </section>

            {/* ============= Companies Logos Part End ============= */}
        </>
    )
}

export default CompaniesLogo