import React, { createContext, useContext, useMemo, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')

  const value = useMemo(() => ({ user, setUser }), [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
