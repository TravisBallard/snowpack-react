import React, { useState, useEffect, useContext } from 'react'
import Quote from '../Quote'
import { Wrapper } from './styles'
import { Button } from 'antd'
import AppContext from '../../context/AppContext'

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
 * RandomQuotes Component
 *
 * @param numToShow
 * @param quotes
 * @returns {JSX.Element}
 * @constructor
 */
const RandomQuotes = ({numToShow = 5, ...props}) => {
  const { quotes } = useContext(AppContext)
  const [randomQuotes, setRandomQuotes] = useState([])
  const updateRandomQuotes = () => setRandomQuotes(getRandomQuotes(numToShow, quotes))

  /**
   * Update random quotes when quotes change.
   */
  useEffect(() => {
    updateRandomQuotes()
  }, [quotes])

  /**
   * Render
   */
  return (
    <>
      <Wrapper>
        <Button type={"primary"} onClick={updateRandomQuotes}>Show random quotes</Button>
        {randomQuotes.length > 0 && randomQuotes.map(q => <Quote {...q} title={'Random Quote'} />)}
      </Wrapper>
    </>
  )
}

export default RandomQuotes