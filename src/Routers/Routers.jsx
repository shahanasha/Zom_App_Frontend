import React from 'react'
import { CustomerRoutes } from './CustomerRoutes'
import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
            <Route path='/*' element={<CustomerRoutes/>}/>
        </Routes>
  )
}

export default Routers