// ================= All Documentation
import            './CommonPatients.css'
import React from 'react'

const CommonPatients = ({patientImage, patientName, patientPlace, patientViews}) => {
    return (
        <>
            {/* ========== Common Patients Carts For Their Reviews ========== */}

            <ul className='mubin-patientCart'>

                {/* cart head */}
                <li className='mubin-cartHead'>

                    {/* patients images */}
                    <img src={patientImage} alt="patient_image" />

                    {/* name */}
                    <h4>
                        {patientName}
                        <span>{patientPlace}</span> {/* places */}
                    </h4>
                </li>

                {/* reviews */}
                <li className='mubin-patientsReview'>
                    {patientViews}
                </li>
            </ul>

            {/* ========== Common Patients Carts For Their Reviews ========== */}
        </>
    )
}

export default CommonPatients