// ================= All Documentation
import            './DataBase.css'
import React from 'react'

const DataBase = () => {
  return (
    <>
      {/* ============= Data Base Part Start ============= */}

      <section className='dataBase'>

        {/* ----------- database section background image ----------- */}
        <img src="images/dataBase_bg.png" alt="database_background_image" />

        <div className="container">
          <ul className="dataBaseArea">

            {/* ---- data base area ---- */}
            <li className='dataBaseHead'>Check your COVID-19 result on our Database</li>

            {/* ---- data base input ---- */}
            <li className='dataBaseInput'>
              <input type="text" placeholder='Okeowo' />
              <input type="number" placeholder='NIK Number' />

              {/* button for check */}
              <button>Check</button>
            </li>

            {/* for search the certificate */}
            <li className='resultLink'>Need a certificate for your COVID-19 result? Please click
              <span>here</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============= Data Base Part End ============= */}
    </>
  )
}

export default DataBase