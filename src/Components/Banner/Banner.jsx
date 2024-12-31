// ================= All Documentation
import                             './Banner.css'
import React                  from 'react'
import { LuClock }            from 'react-icons/lu'
import { SiAdguard }          from 'react-icons/si'
import { FaMapMarkerAlt }     from 'react-icons/fa'
import { MdOutlineDateRange } from 'react-icons/md'
import CommonScheduleList     from '../../CommonComponents/CommonScheduleList/CommonScheduleList'

const Banner = () => {
    return (
        <>
            {/* --------------------------------------------- */}
            {/* ============= Banner Part Start ============= */}

            <section className='mubin-banner'>

                {/* ------- banner background image -------*/}

                <div className="container">

                    {/* ------- banner row ------- */}
                    <ul className='mubin-bannerRow'>

                        {/* ------- banner heading part ------- */}
                        <ul className='mubin-bannerInfo'>
                            <h2>Get Vaccinated. Boost your Immune System</h2>

                            {/* banner main heading part */}
                            <h1>COVID-19 Vaccination Got Easier With,
                                <span>Vaccination.ng</span>
                            </h1>

                            {/* banner short info part */}
                            <p>
                                Vaccination.ng will help you find the nearest
                                centre for vaccination, in all 36 states in Nig eria.
                            </p>

                            {/* banner buttons part */}
                            <div className='buttons'>
                                <button>Get Vaccine</button>
                                <button>Help Centre</button>
                            </div>
                        </ul>

                        {/* ------- banner images part ------- */}
                        <ul>
                            <li className='bannerImage'>
                                <img src="images/banner_main_image.png" alt="banner_image" />
                                <img src="images/banner_child1.png" alt="banner_images" className='bannerChild1' />
                                <img src="images/banner_child2.png" alt="banner_images" className='bannerChild2' />
                                <img src="images/banner_child3.png" alt="banner_images" className='bannerChild3' />
                            </li>
                        </ul>
                    </ul>

                    {/* ------- schedule part ------- */}
                    <ul className='scheduleHead'><LuClock className='scheduleIcon'/> Schedule your Vaccination</ul>

                    {/* ------- schedule infos part ------- */}
                        {/* schedule lists */}
                    <ul className='scheduleList'>
                        <div className='scheduleMainBG'></div>
                        <li><CommonScheduleList scheduleIcons={<FaMapMarkerAlt />}     scheduleName={"Location"}     scheduleNameInfo={"Ikeja Lagos, Nigeria"} /></li>
                        <li><CommonScheduleList scheduleIcons={<MdOutlineDateRange />} scheduleName={"Date"}         scheduleNameInfo={"29 February, 2022"} /></li>
                        <li><CommonScheduleList scheduleIcons={<SiAdguard />}          scheduleName={"Vaccine Type"} scheduleNameInfo={"Mordena"} /></li>
                        <button>Submit</button>
                    </ul>
                </div>
            </section>

            {/* ============= Banner Part End ============= */}
            {/* ------------------------------------------- */}
        </>
    )
}

export default Banner