// ================= All Documentation
import                     './Feedback.css'
import React          from 'react'
import CommonPatients from '../../CommonComponents/CommonPatients/CommonPatients'

const Feedback = () => {
    return (
        <>
            {/* ============= Feed Back Part Start ============= */}

            <section className='mubin-feedbackSection'>

                {/* ------ feed back background images ------ */}
                <img src="images/feedback.png" alt="feedback_background" className='feedbackBackground' />
                <img src="images/feedbackMD.png" alt="feedback_background" className='feedbackBackgroundMD' />
                <img src="images/feedbackXS.png" alt="feedback_background" className='feedbackBackgroundXS' />

                <div className="container">

                    {/* feed back heading */}
                    <ul className="mubin-feedbackHead">
                        <h6>FEEDBACK</h6>
                        <h1>What our Patients Think</h1>
                        <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                    </ul>

                    {/* feed back reviewers cart */}
                    <ul className='mubin-patientCarts'>
                        <CommonPatients patientImage={'images/patientImage1.png'} patientName={'Oyindamola Maja'} patientPlace={'Badagry, Lagos'} patientViews={'“Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng”'} />
                        <CommonPatients patientImage={'images/patientImage2.png'} patientName={'Okeowo Lekan'} patientPlace={'Ikeja, Lagos'} patientViews={'“Got my vaccine very close to my house. Was very easy scheduling an appointment.”'} />
                        <CommonPatients patientImage={'images/patientImage3.png'} patientName={'Kafaru Temitope'} patientPlace={'Obanikoro, Lagos'} patientViews={'“Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng”'} />
                    </ul>
                </div>
            </section>

            {/* ============= Feed Back Part End ============= */}
        </>
    )
}

export default Feedback