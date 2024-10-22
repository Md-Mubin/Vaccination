// ================= All Documentation
import                              './Quote.css'
import React                   from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'

const Quote = () => {
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
                    <input type="email" placeholder='lenux.ng@gmail.com' />

                    {/* button to send */}
                    <button><IoPaperPlaneOutline/></button>
                </div>
            </section>
    
            {/* ============= Quote Section Part End ============= */}
        </>
    )
}

export default Quote