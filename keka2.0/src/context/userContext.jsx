import React, { createContext } from 'react'
export const datacontext = createContext()

function userContext({ children }) {
  let value = "ayush"
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default userContext
