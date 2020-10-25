import React from 'react'
import {Card, } from 'antd'

const Quote = ({id, en, author, rating}) => {
  return (
    <Card title={'Random Quote'} theme={'dark'}>
      <h3>{en}</h3>
      <cite>&mdash; {author}</cite>
    </Card>
  )
}

export default Quote