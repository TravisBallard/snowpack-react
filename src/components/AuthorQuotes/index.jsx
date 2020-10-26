import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '@context/AppContext'
import slugify from 'slugify'
import Quote from '@components/Quote'
import { Wrapper } from './styles'
import { Typography } from 'antd'

/**
 * Show quotes by an individual author.
 * @returns {JSX.Element}
 * @constructor
 */
const AuthorQuotes = () => {
  const { authorName } = useParams();
  const [quotesByAuthor, setQuotesByAuthor] = useState([])
  const { quotes } = useContext(AppContext)
  const { Title } = Typography

  /**
   * When authorName is updated. (hash changes) we need to re-filter the list
   */
  useEffect(() => {
    setQuotesByAuthor(
      [...quotes].filter(q => slugify(q.author, {strict: true, lower: true}) === authorName)
    )
  }, [authorName])

  /**
   * Render
   */
  return (
    <>
      <Wrapper>
        {quotesByAuthor.length > 0 && (
          <>
            <Title level={3}>{`${quotesByAuthor.length} Quotes by ${quotesByAuthor[0].author}`}</Title>
            {quotesByAuthor.map((q, i) => <Quote key={`quote-${i}`} {...q} prefix={i+1} />)}
          </>
        )}
      </Wrapper>
    </>
  )
}

export default AuthorQuotes