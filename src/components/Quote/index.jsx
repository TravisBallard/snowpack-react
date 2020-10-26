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
const Quote = ({id, en, author, rating, title, prefix}) => {
  /**
   * Render
   */
  return (
    <Card title={title} theme={'dark'}>
      <div className={'prefix'}>
        {prefix}
      </div>
      <div className={'quote'}>
        <h3>{en}</h3>
        <cite>&mdash; {author}</cite>
      </div>
    </Card>
  )
}

export default Quote