import React from 'react'
import AddDrug from '../components/Admin/AddDrug'

const SupplierDashboard = ({contrct}) => {
  return (
    <div className=' flex items-center justify-center'>
        <AddDrug contrct={contrct}/>
    </div>
  )
}

export default SupplierDashboard