import React, { useState } from 'react'
import ContextProvider from './components/ContextProvider'
import Menu from './components/Menu'
import Quotes from './components/Quotes'
import { Layout } from 'antd'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

import 'antd/dist/antd.css'
import './index.less'

const { Header, Sider, Content } = Layout

const App = () => {
  const [siderCollapsed, setSideCollapsed] = useState(false)
  const toggle = () => setSideCollapsed(!siderCollapsed)

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