// ================= All Documentation
import            './CommonScheduleList.css'
import React from 'react'

const CommonScheduleList = ({scheduleIcons , scheduleName, scheduleNameInfo}) => {
  return (
    <>
      {/* ========== Common Schedules Part Start  ========== */}

      <ul className='mubin-schedules'>

        {/* scheduled icon */}
        <li className='mubin-scheduleIcon'>{scheduleIcons}</li>

        {/* schedules icon */}
        <li className='mubin-scheduleItems'>
          
          {/* name */}
          <h6>{scheduleName}</h6>

          {/* infos */}
          <p>{scheduleNameInfo}</p>
        </li>
      </ul>
 
      {/* ========== Common Schedules Part End ========== */}
    </>
  )
}

export default CommonScheduleList