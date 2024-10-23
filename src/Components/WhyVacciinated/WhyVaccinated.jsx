// ================= All Documentation
import { Link } from 'react-router-dom'
import './WhyVaccinated.css'
import React from 'react'
import { SiAdguard } from 'react-icons/si'
import { TbUsers } from 'react-icons/tb'
import { FiThermometer } from 'react-icons/fi'

const WhyVaccinated = () => {
    return (
        <>
            {/* ============= Register Section Part Start ============= */}

            <section className='mubin-whyVaccinatedSection'>

                {/* --------- register background image --------- */}
                <img src="images/banner_bg.png" alt="background_image" />

                <div className="container">

                    <div className="mubin-whyVaccinatedRow">

                        {/* vaccinated part for register */}
                        <div className='mubin-vaccinatedHead'>
                            <h1>Why get vaccinated today?</h1>
                            <p>Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem pellentesque vestibulum risus matti. In molestie condimentum malesuada non.</p>
                        </div>

                        {/* vaccinated carts with infos */}
                        <ul className='vaccinatedCarts'>

                            {/* big cart */}
                            <ul className='cartBig'>
                                <li><SiAdguard className='cartBigIcon' /></li>
                                <h3>Protects your immune system against viruses</h3>
                                <p>Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium dictum. Dolor eget vel nulla lorem ac.</p>
                                <Link to={"#"}>Read More </Link>
                            </ul>

                            {/* small carts */}
                            <li className='cartSmall'>
                                <div><TbUsers className="cartSmallIcon" /></div>
                                <h4>Minimize the spread of the Virus</h4>
                                <Link to={"#"}>Read More</Link>
                            </li>
                            <li className='cartSmall'>
                                <div><FiThermometer className="cartSmallIcon" /></div>
                                <h4>Protect yourself</h4>
                                <Link to={"#"}>Read More</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============= Register Section Part Start ============= */}
        </>
    )
}

export default WhyVaccinated