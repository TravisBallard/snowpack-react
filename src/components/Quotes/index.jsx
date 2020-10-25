import React, { useState, useEffect } from 'react'
import Quote from '../Quote'
import { Wrapper } from './styles'
import { Button } from 'antd'

/**
 * Get a random quote from the quotes array.
 *
 * @param numToGet - int - number of quotes to get
 * @param quotes - array - the quotes array
 * @returns {[]}
 */
const getRandomQuotes = (numToGet, quotes) => {
  const randoms = []
  for(let i = 0; i < numToGet; i++) {
    randoms.push(quotes[Math.floor(Math.random() * quotes.length)])
  }
  return randoms
}

/**
 * Quotes Component
 *
 * @param numToShow
 * @param quotes
 * @returns {JSX.Element}
 * @constructor
 */
const Quotes = ({numToShow = 5, quotes}) => {
  const [randomQuotes, setRandomQuotes] = useState([])
  const updateRandomQuotes = () => setRandomQuotes(getRandomQuotes(numToShow, quotes))

  // On mount
  useEffect(() => {
    updateRandomQuotes()
  }, [])

  // Render
  return (
    <>
      <Wrapper>
        <Button type={"primary"} onClick={updateRandomQuotes}>Show random quotes</Button>
        {randomQuotes.length > 0 && randomQuotes.map(q => <Quote {...q} />)}
      </Wrapper>
    </>
  )
}

export default Quotes