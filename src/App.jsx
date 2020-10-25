import React, { useState, useEffect } from 'react'

import 'antd/dist/antd.css'
import './index.less'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
import Quotes from './components/Quotes'

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

const App = () => {

  const [siderCollapsed, setSideCollapsed] = useState(false)
  const [quotes, setQuotes] = useState([])
  const toggle = () => setSideCollapsed(!siderCollapsed)

  /**
   * Fetch quotes on mount
   */
  useEffect(() => {
    getQuotes().then(result => {
      setQuotes(result)
    })
  }, [])

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={siderCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(siderCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {quotes.length > 0 && <Quotes numToShow={5} quotes={quotes} />}
          {quotes.length === 0 && (<h1>Loading Quote</h1>)}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;