// ================= All Documentation
import React         from 'react'
import Banner        from '../Components/Banner/Banner'
import CompaniesLogo from '../Components/CompaniesLogo/CompaniesLogo'
import DataBase      from '../Components/DataBase/DataBase'
import WhyVaccinated from '../Components/WhyVacciinated/WhyVaccinated'
import Register      from '../Components/Register/Register'
import Symptomps     from '../Components/Symptomps/Symptomps'
import Feedback      from '../Components/Feedback/Feedback'
import Quote         from '../Components/Quote/Quote'

const Home = () => {
  return (
    <>
      <Banner />
      <CompaniesLogo />
      <DataBase />
      <WhyVaccinated />
      <Register />
      <Symptomps />
      
      {/* to make the quote section absolute */}
      <div className="relative">
        <Feedback />
        <Quote />
      </div>
    </>
  )
}

export default Home