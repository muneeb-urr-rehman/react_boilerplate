import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

function WebMenu() {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          float: 'left',
          width: 120,
          height: 31,
        }}
      >
        <h1>logo</h1>
      </div>
      <div style={{ float: 'right', width: '20%' }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </div>
    </Header>
  );
}

export default WebMenu;
