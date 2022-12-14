import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../../components/Navbar';
const { Header, Content, Footer } = Layout;

function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      {/* <Header style={{ backgroundColor: 'grey' }}> */}
      {/* <div className="logo" style={{ backgroundColor: 'red' }} /> */}
      <Navbar />
      {/* </Header> */}
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Home;
