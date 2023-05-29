import {
  HomeFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PhoneFilled,
    ProfileOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Layout, Menu, MenuProps, theme } from "antd";
  import RestaurantIcon from '@mui/icons-material/Restaurant';
  import { Header } from "antd/es/layout/layout";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import Sider from "antd/es/layout/Sider";
  import React from "react";
  import { useState } from "react";
  import { Container } from "react-bootstrap";
  import { VscDashboard } from "react-icons/vsc";
  import { useNavigate } from "react-router-dom";
//   import { useAppSelector } from "../../../app/store/configureStore";
//   import { loadAccountStorage } from "../../../app/store/accountSlice";
  
  type MenuItem = Required<MenuProps>["items"][number];
  const LayoutAdmin = ({ children }: any) => {
    // const { account } = loadAccountStorage();
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
  
    const onPage = ({ key }: Page) => {
      switch (key) {
        case "1":
          navigate("/dashbord");
          break;
        case "2":
          navigate("/userList");
          break;
        case "3":
          navigate("/acmdList");
          break;
        case "4":
          navigate("/fdList");
          break;
        case "5":
          navigate("/serveList");
          break;
        case "6":
          navigate("/HBorderAll");
          break;
          case "7":
          navigate("/ServeorderAll");
          break;
          case "8":
          navigate("/FDorderAll");
          break;
          case "9":
          navigate("/");
          break;
        // case "9":
        //   navigate("/");
        //   dispatch(resetProductParams());
        //   break;
        default:
          break;
      }
    };
    interface Page {
      key?: string;
    }
    const items: MenuItem[] = [
      getItem("แดชบอร์ด", "1", <VscDashboard style={{ fontSize: "20px" }} />),
      getItem("ผู้ใช้งาน", "2", <UserOutlined style={{ fontSize: "20px" }} />),
      getItem("ที่พัก", "3", <HomeFilled  style={{ fontSize: "20px" }} />),
      getItem("อาหาร", "4", <RestaurantIcon style={{ fontSize: "20px" }} />),
      getItem("บริการ", "5", <PhoneFilled style={{ fontSize: "20px" }} />),
      getItem("รายการจองที่พัก", "6", <ProfileOutlined style={{ fontSize: "20px" }} />),
      getItem("รายการบริการ", "7", <ProfileOutlined style={{ fontSize: "20px" }} />),
      getItem("รายการสั่งอาหาร", "8", <ProfileOutlined style={{ fontSize: "20px" }} />),
      getItem("กลับหน้าแรก", "9", <ArrowBackIcon style={{ fontSize: "20px" }} />),
      // <ProfileOutlined />
    ];
  
    function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[]
    ): MenuItem {
      return {
        key,
        icon,
        children,
        label,
      } as MenuItem;
    }
    return (

        <Layout style={{ minHeight: "400rem" }}>
  
          <Sider
            theme="light"
            trigger={null}
            style={{ backgroundColor: "#e5e5e5",}}
            collapsible
            
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Container className="center" style={{ padding: "5px" }}>
              <div className="logo pull-left">
                <a>
                  <img
                    src="https://drive.google.com/uc?id=1hWb2v2IBqOHtIUq5ENhgMf-Tog5dx4Dr"
                    alt="logo image"
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </Container>
            <Menu
              style={{
                backgroundColor: "#e5e5e5",
                fontFamily: "Sriracha, cursive",
              }}
              onClick={(e) => onPage({ key: e.key })}
              className="text-st"
              theme="light"
             
              mode="inline"
              items={items}
            />
          </Sider>
  
          <Layout className="site-layout">
            <Header style={{ padding: 10,backgroundColor:"#e5e5e5", background: colorBgContainer }}>
            
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              {/* <Avatar style={{float:"right"}} src={account?.image} /> */}
            </Header>
            {/* <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb> */}
  
            <div
              style={{
                margin: " 16px",
                padding: 24,
                minHeight: "100%",
                background: colorBgContainer,
                backgroundColor: "#fcfcfc",
              }}
            >
              {children}
            </div>
            
          </Layout>
          
        </Layout>
    );
  };
  
  export default LayoutAdmin;