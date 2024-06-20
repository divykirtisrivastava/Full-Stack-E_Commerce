import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected({children}) {
 let pass  = false
 if(pass){
  
    return children
 }else{
   return <Navigate to='/admin/adminLogin'/>
 }
}
