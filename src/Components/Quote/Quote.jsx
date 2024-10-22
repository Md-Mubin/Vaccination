// ================= All Documentation
import './Quote.css'
import React, { useState } from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'

const Quote = () => {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError('')
    }

    const handleError = () => {
        if (!email) {
            setEmailError('Please Enter Your Email')
        }
    }


    return (
        <>
            {/* ============= Quote Section Part Start ============= */}

            <section className='quoteSection'>

                {/* quote head */}
                <h1>Get a quote</h1>

                {/* quote small tips */}
                <p>Please do enter your email address below</p>

                {/* quote input area  */}
                <div className="inputArea">

                    {/* main input */}
                    <input onChange={handleEmail} type="email" placeholder='lenux.ng@gmail.com' />

                    <div className='emailError'>{emailError}</div>

                    {/* button to send */}
                    <button onClick={handleError}><IoPaperPlaneOutline /></button>
                </div>
            </section>

            {/* ============= Quote Section Part End ============= */}
        </>
    )
}

export default Quote