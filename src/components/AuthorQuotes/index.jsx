import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import slugify from 'slugify'
import Quote from '../Quote'
import { Wrapper } from './styles'
import { Typography } from 'antd'

const AuthorQuotes = () => {
  const { authorName } = useParams();
  const [quotesByAuthor, setQuotesByAuthor] = useState([])
  const { quotes } = useContext(AppContext)
  const { Title } = Typography

  useEffect(() => {
    setQuotesByAuthor(
      [...quotes].filter(q => slugify(q.author, {strict: true, lower: true}) === authorName)
    )
  }, [authorName])

  return (
    <>
      <Wrapper>
        {quotesByAuthor.length > 0 && (
          <Title level={3}>{`${quotesByAuthor.length} Quotes by ${quotesByAuthor[0].author}`}</Title>
        )}
        {quotesByAuthor.length > 0 && quotesByAuthor.map((q, i) => <Quote {...q} prefix={i+1} />)}
      </Wrapper>
    </>
  )
}

export default AuthorQuotes