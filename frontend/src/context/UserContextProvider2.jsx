import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider({children}) {
    let [count, setCount] = useState(false)
    
    let [ auth , setAuth] = useState({
      token: localStorage.getItem('token') || null,
      isAuthenticated: !!localStorage.getItem('token'),
      userId: ''
    })

    let userLogin  = async (data)=>{
      let result  = await axios.post('http://localhost:3000/api/clientLogin', data)

      if(result.data.isMatch){
        let token = result.data.token
        localStorage.setItem('token', token)
        let unique  = data.email.split('@')[0]
        createClientTable(unique)
        setAuth({token, isAuthenticated: true, userId: unique})
        return true
      }
    }


    

  async function createClientTable(unique){
    await axios.post(`http://localhost:3000/api/createClient/${unique}`)
  }


let profile = async ()=>{
      let token = localStorage.getItem('token')
      if(token){
        let result  = await axios.get('http://localhost:3000/api/verify')
        setAuth(preAuth => ({...preAuth,userId: result.data.email.split("@")[0]} ))
      }
}

useEffect(()=>{
  let token = localStorage.getItem('token')
  if(token){
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  profile()
}, [])
  return (
    <UserContext.Provider value={{count, setCount, auth, userLogin}}>
        {children}
    </UserContext.Provider>
  )
}
