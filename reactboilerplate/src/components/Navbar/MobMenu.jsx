import { Button, Drawer } from 'antd';
import React from 'react';
import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducers/AuthSlice';

function MobMenu() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const logout = () => {
    localStorage.clear();
    dispatch(login({ isLogin: false, userData: [] }));
  };
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        {/* <Button type="primary" onClick={showDrawer}>
          Open
        </Button> */}
        <span onClick={showDrawer} style={{ padding: 10 }}>
          <RiMenu3Line size={25} />
        </span>
      </div>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Button style={{ width: '100%' }} onClick={logout}>
          logout
        </Button>
      </Drawer>
    </>
  );
}

export default MobMenu;
