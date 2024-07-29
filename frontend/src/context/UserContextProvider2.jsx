import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider({children}) {
    let [count, setCount] = useState(false)
    
    let [login, setLogin] = useState('')

    let [ auth , setAuth] = useState({
      token: !!localStorage.getItem('token'),
      isAuthenticated: false,
      userId: null
    })

    let userLogin  = async (data)=>{
      let result  = await axios.post('http://localhost:3000/api/clientLogin', data)
// console.log(result)
      if(result.data.isMatch){
        localStorage.setItem('token', result.data.token)
        let unique  = data.email.split('@')[0]
        createClientTable(unique)
        
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
        console.log(result)
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
    <UserContext.Provider value={{count, setCount, login, setLogin, userLogin}}>
        {children}
    </UserContext.Provider>
  )
}
