// ================= All Documentation
import            './CommonSymptopms.css'
import React from 'react'

const CommonSymptopms = ({ virusName }) => {
    return (
        <>
            {/* ========== Common Symptomps Part Start  ========== */}

            <h5>
                {/* virus names */}
                {virusName}

                {/* virus image */}
                <img src="images/virus_image.png" alt="virus_image" className='mubin-virusImage' />
            </h5>

            {/* ========== Common Symptomps Part Start  ========== */}
        </>
    )
}

export default CommonSymptopms