import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Protected({children}) {
 let {pass} = useContext(UserContext)
 if(pass){
    return children
 }else{
   return <Navigate to='/admin/adminLogin'/>
 }
}
