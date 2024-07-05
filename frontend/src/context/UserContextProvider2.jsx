import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [count, setCount] = useState(false)
    let [login, setLogin] = useState('')
  return (
    <UserContext.Provider value={{count, setCount, login, setLogin}}>
        {children}
    </UserContext.Provider>
  )
}
