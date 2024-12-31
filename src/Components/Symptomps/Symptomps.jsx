// ================= All Documentation
import                      './Symptomps.css'
import React           from 'react'
import CommonSymptopms from '../../CommonComponents/CommonSymptopms/CommonSymptopms'

const Symptomps = () => {
  return (
    <>
      {/* ------------------------------------------------------- */}
      {/* ============= Register Section Part Start ============= */}

      <section className='mubin-symptompsSection'>

        {/* symptomps background image */}
        <img src="images/banner_bg.png" alt="background_image" className='symptompsBG' />

        {/* symptomps banner image */}
        <img src="images/symptopms_image.png" alt="symptopms_image" className='symptopmsImage' />

        <div className="container">

          {/* symptomps head */}
          <ul className="mubin-symptompsHead">
            <h4>Covid-19 Prevention</h4>
            <h1>COVID-19 <span>Symptoms</span></h1>
            <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
          </ul>

          {/* symptomps all name part */}
          <ul className='symptompsName'>

            {/* call common symptomps from <CommonSymptopms/> component */}
            <li className='symptomps1'>
              <CommonSymptopms virusName={"High Fever"} />
              <CommonSymptopms virusName={"Loss of sense of taste"} />
            </li>
            <li className='symptomps2'>
              <CommonSymptopms virusName={"Loss sense of smell"} />
              <CommonSymptopms virusName={"Difficulty Breathing"} />
            </li>
            <li className='symptomps3'>
              <CommonSymptopms virusName={"Dry cough"} />
              <CommonSymptopms virusName={"Sore Throat"} />
            </li>
          </ul>
        </div>
      </section>

      {/* ============= Register Section Part End ============= */}
      {/* ------------------------------------------------------*/}
    </>
  )
}

export default Symptomps