import React, { useState, useEffect, useContext } from 'react'
import ContextProvider from './components/ContextProvider/ContextProvider'
import AppContext from './context/AppContext'
import 'antd/dist/antd.css'
import './index.less'
import Menu from './components/Menu'

import { Layout } from 'antd'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

import Quotes from './components/Quotes'
const { Header, Sider, Content } = Layout

const App = () => {

  const [siderCollapsed, setSideCollapsed] = useState(false)
  const toggle = () => setSideCollapsed(!siderCollapsed)

  const { quotes } = useContext(AppContext)

  useEffect(() => {
    if (!quotes) return
    console.log('mapped', quotes.map(q => q.author))
  }, [quotes])

  return (
    <ContextProvider>
      <Layout>
      <Sider trigger={null} collapsible collapsed={siderCollapsed}>
        <div className="logo" />
        <Menu />
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
          <Quotes numToShow={5} />
        </Content>
      </Layout>
    </Layout>
    </ContextProvider>
  )
}

export default App;