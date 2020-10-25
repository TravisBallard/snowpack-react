import React from 'react'
import { Card } from 'antd'

/**
 * Display an individual quote in a Card component
 *
 * @param id
 * @param en
 * @param author
 * @param rating
 * @returns {JSX.Element}
 * @constructor
 */
const Quote = ({id, en, author, rating, title}) => {
  /**
   * Render
   */
  return (
    <Card title={title} theme={'dark'}>
      <h3>{en}</h3>
      <cite>&mdash; {author}</cite>
    </Card>
  )
}

export default Quote