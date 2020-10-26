import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import ContextProvider from '@components/ContextProvider'
import Menu from '@components/Menu'
import RandomQuotes from '@components/RandomQuotes'
import AuthorQuotes from '@components/AuthorQuotes'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MessageTwoTone,
} from '@ant-design/icons'

import 'antd/dist/antd.css'
import './index.less'

/**
 * Quotes App
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  const { Header, Sider, Content } = Layout
  const [siderCollapsed, setSideCollapsed] = useState(false)
  const toggle = () => setSideCollapsed(!siderCollapsed)

  return (
    <Router>
      <ContextProvider>
      <Layout>
      <Sider trigger={null} collapsible collapsed={siderCollapsed}>
        <div className={`logo${ siderCollapsed ? ' small' : ''}`}>
          <MessageTwoTone />
        </div>
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
          <Switch>
            <Route path={'/'} exact>
              <RandomQuotes numToShow={5} />
            </Route>
            <Route path={'/author/:authorName'}>
              <AuthorQuotes />
            </Route>
          </Switch>

        </Content>
      </Layout>
    </Layout>
    </ContextProvider>
    </Router>
  )
}

export default App;