import React, {useState, useEffect, useCallback} from 'react'
import AppContext from '../../context/AppContext'

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

const ContextProvider = ({children}) => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    getQuotes().then(result => {
      setQuotes(result)
    })
  }, [])

  const appContext = {
    quotes: quotes,
  }

  return (
    <AppContext.Provider value={appContext}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider