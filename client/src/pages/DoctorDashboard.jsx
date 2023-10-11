import React from 'react'
import DoctorPatient from '../components/Doctor/DoctorPatient'
import GetDrug from '../components/Admin/GetDrug'

const DoctorDashboard = ({contract}) => {
  return (
    <div className=' w-full flex flex-col justify-center items-center mt-24'>
        <DoctorPatient contract={contract}/>
        <GetDrug contract={contract}/>
    </div>
  )
}

export default DoctorDashboard