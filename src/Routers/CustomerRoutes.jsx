import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../customer/components/pages/HomePage/HomePage'
import Restaurant from '../customer/components/pages/Restaurant/Restaurant'
import Navbar from '../customer/components/Navbar/Navbar'
import Cart from '../customer/components/pages/cart/Cart'
import Profile from '../customer/components/pages/profile/Profile'



export const CustomerRoutes = () => {
  
    return (
        <div className='relative'>
            <div className='sticky top-0 z-50'>
                <Navbar/>
            </div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/restaurant/:city/:title/:id' element={<Restaurant />} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/my-profile/*' element ={<Profile/>}></Route>
            </Routes>
        </div>
    )
}
