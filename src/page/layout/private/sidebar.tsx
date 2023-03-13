import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'

function sidebar() {
  return (
    <>
          <Sider breakpoint="md">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<HomeOutlined/>
              
            }
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <UserOutlined />
              
            }
          >
            Profile
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}

export default sidebar