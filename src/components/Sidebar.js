// ./components/Sidebar.js
import { Link } from 'react-router-dom';

import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider collapsible breakpoint="md">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/bugs">
            <span className="nav-text">Bug List</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/fossils">
            <span className="nav-text">Fossil List</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
