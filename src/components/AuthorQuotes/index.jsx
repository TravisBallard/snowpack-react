import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import slugify from 'slugify'
import Quote from '../Quote'
import { Wrapper } from './styles'

const AuthorQuotes = () => {
  const { authorName } = useParams();
  const [quotesByAuthor, setQuotesByAuthor] = useState([])
  const { quotes } = useContext(AppContext)

  useEffect(() => {
    setQuotesByAuthor(
      [...quotes].filter(q => slugify(q.author, {strict: true, lower: true}) === authorName)
    )
  }, [authorName])

  return (
    <>
      <Wrapper>
        {quotesByAuthor.length > 0 && quotesByAuthor.map(q => <Quote {...q} />)}
      </Wrapper>
    </>
  )
}

export default AuthorQuotes