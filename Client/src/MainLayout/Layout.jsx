import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div> 
        <Navbar/> 
    <div >
        


        

        <Outlet/> 
    </div>
    </div>
  )
}

export default Layout