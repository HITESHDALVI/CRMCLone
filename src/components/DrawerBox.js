import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import "./DrawerBox.css"
import "./Header.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Drawer, Space } from 'antd';
import { DrawerForm } from './DrawerForm';



export const DrawerBox = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);

  };
  return (
    <>
      <div className="repository-back-cen" onClick={showDrawer}>  Create Leads</div>
      <Drawer
        title="Add Lead"
        width={800}
        visible={visible}
        className="drawer-bg"
        bodyStyle={{
          paddingBottom: 80,
        }}

        extra={
          <Space>
            <div className='closeBtn' onClick={onClose}><span>Close</span><ArrowRightAltIcon className='close-arrow' /></div>
          </Space>
        }
      >
        <DrawerForm onClick={onClose} />

      </Drawer>
    </>
  );
}









