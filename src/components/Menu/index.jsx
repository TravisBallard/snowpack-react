import React, { useContext } from 'react'
import { Menu as AntMenu } from 'antd'
const { SubMenu } = AntMenu
import { UserOutlined } from '@ant-design/icons'
import AppContext from '../../context/AppContext'
import slugify from 'slugify'

/**
 * Navigation Menu for site
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
  const { quotes } = useContext(AppContext)

  /**
   * Get list of authors.
   * @returns {this}
   */
  const getAuthors = () => {
    const authors = [...quotes]
    return [...new Set(authors.map(q => q.author))].sort()
  }

  /**
   * List the authors in AntMenu.Item components
   * @returns {*}
   */
  const listAuthors = () => {
    return getAuthors().map(a => <AntMenu.Item key={slugify(a)}>{a}</AntMenu.Item>)
  }

  /**
   * render
   */
  return (
    <>
      <AntMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <AntMenu.Item key="1" icon={<UserOutlined />} >
          Random Quotes
        </AntMenu.Item>
        <SubMenu key="authors" icon={<UserOutlined />} title="Authors">
          {listAuthors()}
        </SubMenu>
      </AntMenu>
    </>
  )
}

export default Menu
