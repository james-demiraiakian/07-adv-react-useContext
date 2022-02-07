import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import fetchUser from '../services/user'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be user within a UserProvider')
  }

  return context
}

export { UserProvider, useUser }
