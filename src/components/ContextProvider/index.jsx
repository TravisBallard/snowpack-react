import React, { useState, useEffect } from 'react'
import AppContext from '@context/AppContext'

/**
 * Get quotes from the api.
 * @returns {Promise<Response|any>}
 */
const getQuotes = async () => {
  const storageKey = 'en_quotes'
  const stored = localStorage.getItem(storageKey)
  if (stored) return JSON.parse(stored)

  const {SNOWPACK_PUBLIC_API_HOST, SNOWPACK_PUBLIC_QUOTES_ENDPOINT} = import.meta.env
  return await fetch(`${SNOWPACK_PUBLIC_API_HOST}${SNOWPACK_PUBLIC_QUOTES_ENDPOINT}`)
    .then(res => res.json())
    .then(res => {
      localStorage.setItem(storageKey, JSON.stringify(res))
      return res
    })
}

/**
 * Main Context Provider for the entire app.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ContextProvider = ({children}) => {
  const [quotes, setQuotes] = useState([])

  /**
   * On mount
   */
  useEffect(() => {
    getQuotes().then(result => {
      setQuotes(result)
    })
  }, [])

  const appContext = {
    quotes
  }

  /**
   * Render
   */
  return (
    <AppContext.Provider value={appContext}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider