import React from 'react'
import ClientNavbar from './client/ClientNavbar'
import { Outlet } from 'react-router-dom'

export default function ClientApp() {
  return (
    <div>
    <ClientNavbar/>
      <Outlet/>
    </div>
  )
}
