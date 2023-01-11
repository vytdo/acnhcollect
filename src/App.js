import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './components/Home';
import BugList from './components/BugList';
import FossilsList from './components/FossilsList';
import Sidebar from './components/Sidebar';
const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/bugs" component={BugList} />
              <Route path="/fossils" component={FossilsList} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
