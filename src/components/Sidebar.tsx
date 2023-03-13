import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InboxOutlined,
  RollbackOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme ,MenuProps } from "antd";
// import ProductAdmin from "../Product/ProductAdmin";
import FdList from "../page/layout/private/menu/FdList";
// import DashboardPage from "../Dashboard/DashboardPage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/store/configureStore";
// import { resetProductParams } from "../../../Stone/productSlice";

const { Header, Sider, Content } = Layout;

function Sidebar({ children }: any) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  interface Page {
    key?: string;
  }

  const items: MenuItem[] = [
    getItem('แดชบอร์ด', '1', <DashboardOutlined style={{ fontSize: "20px" }} />,),
    getItem('สินค้า', '2', <InboxOutlined style={{ fontSize: "20px" }} />),
    // getItem('ผู้ใช้้', '9', <UserOutlined style={{ fontSize: "20px" }} />),
    getItem('กลับ', '9', <RollbackOutlined style={{ fontSize: "20px" }} />),
  ];

  const onPage = ({ key }: Page) => {
    switch (key) {
      case "1":
        navigate("/fdList");
        break;
      case "2":
        navigate("/user");
        break;
      case "9":
        navigate("/");
        // dispatch(resetProductParams());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Layout>
        
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:'#242424'}}>
          <div className="logo" />
          {/* <a><img src="https://drive.google.com/uc?id=1DHaW3RxnuK9ftbDwb1dMQMXhF15RAxEm" alt="logo" className="" /></a> */}
          <Menu
          style={{backgroundColor:'#242424'}}
          onClick={(e) => onPage({ key: e.key })}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
      
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
            }}
          >
              {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Sidebar;