// ================= All Documentation
import            './CommonScheduleList.css'
import React from 'react'

const CommonScheduleList = ({scheduleIcons , scheduleName, scheduleNameInfo}) => {
  return (
    <>
      {/* ========== Common Schedules Part Start  ========== */}

      <ul className='schedules'>

        {/* scheduled icon */}
        <li className='scheduleIcon'>{scheduleIcons}</li>

        {/* schedules icon */}
        <li className='scheduleItems'>
          
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