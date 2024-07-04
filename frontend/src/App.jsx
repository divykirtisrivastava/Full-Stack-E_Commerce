import React from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

export default function App() {

  // let x  = 'rishab@gmail.com'
  // console.log(x.split('@')[0])

  return (
   <UserContextProvider>
     <Navbar/>
     <Outlet/>
   </UserContextProvider>
    
  )
}
