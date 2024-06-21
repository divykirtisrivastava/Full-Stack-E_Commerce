import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [pass, setPass] = useState(false)
  return (
    <UserContext.Provider value={{pass, setPass}}>
        {children}
    </UserContext.Provider>
  )
}
