// ================= All Documentation
import                  './Register.css'
import React, { useState }       from 'react'
import { Link }    from 'react-router-dom'
import PhoneInput  from 'react-phone-input-2'
import                  'react-phone-input-2/lib/material.css'

const Register = () => {

    // ======= All UseState Hoook Part
    const [name,        setName]        = useState('')
    const [nameError,   setNameError]   = useState('')
    const [number,      setNumber]      = useState('')
    const [numberError, setNumberError] = useState('')

    // Name Input Handle Part
    const handleName = (e)=>{
        setName(e.target.value)
        setNameError('')
    }

    // Number Input Handle Part
    const handleNumber = (e)=>{
        setNumber(e)
        setNumberError('')
    }

    // Submit Form Handle Part
    const handleSubmit= (e)=>{
        e.preventDefault()

        // if name input is blank
        if(!name){
            setNameError('Please Enter Your Name')
        }

        // if number input is blank
        if(!number){
            setNumberError('Please Enter Your Number')
        }
    }

    return (
        <>
            {/* ============= Register Section Part Start ============= */}

            <section className='registerSection'>

                {/* --------  Register Background Image -------- */}
                <img src="images/registerBackground.png" alt="register_background_images" className='registerBackground'/>

                <div className="container">
                    <div className="registerRow">

                        {/* register part */}
                        <ul className='registerPart'>
                            <h1>Get your vaccine registration today</h1>

                            {/* register form */}
                            <form onSubmit={handleSubmit} className='registerForm'>
                                <h4>Patient's Full Name</h4>

                                {/* for full name input */}
                                <input onChange={handleName} type="text" placeholder='Full Name' className='patientName' />

                                {/* for name input error */}
                                <h6 className='nameError'>{nameError}</h6>

                                <h4>Mobile Number</h4>

                                <p>Notifications for appointment and reminders will be sent to this provided number</p>

                                <div className="phoneNumberVerify">

                                    {/* phone input part from npm package */}
                                    <div className="phone">
                                        <PhoneInput 
                                        onChange={handleNumber}
                                        country={"us"} 

                                        // for special label remove
                                        specialLabel='' 

                                        // for styling button
                                        buttonStyle=
                                        {
                                            {borderRadius: '20px', 
                                            border: 'none',
                                            paddingLeft: '30px'}
                                        } 
                                        
                                        // for styling input bar
                                        inputStyle=
                                        {
                                            {width: '400px', 
                                            height: '70px', 
                                            borderRadius: '20px', 
                                            backgroundColor: 'rgba(11,21,60,0.15)', 
                                            paddingLeft: '100px', 
                                            outline: 'none', 
                                            border: 'none'}
                                        } 
                                        
                                        // for type and placeholder
                                        type="number" 
                                        placeholder='Phone Number'/>
                                    </div>

                                    {/* for number input error */}
                                    <div className='numberError'>{numberError}</div>

                                    {/* for phone number verify button */}
                                    <button>Verfiy</button>
                                </div>

                                <button className='submitButton'>Submit</button>
                            </form>

                            {/* status link */}
                            <div className="statusLink">
                                <p>Already registered ? </p>
                                <Link to={"#"}>Check your status</Link>
                            </div>
                        </ul>

                        {/* regsiter section banner image */}
                        <ul className='registerBannerImage'>
                            <img src="images/register.png" alt="register_bannerImage"/>
                            <img src="images/registerChild.png" alt="register_child_image" className='registerIamageChild'/>
                            <Link to={"#"}>Verify Status</Link>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============= Register Section Part End ============= */}
        </>
    )
}

export default Register