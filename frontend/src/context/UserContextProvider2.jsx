import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [count, setCount] = useState(false)
  return (
    <UserContext.Provider value={{count, setCount}}>
        {children}
    </UserContext.Provider>
  )
}
