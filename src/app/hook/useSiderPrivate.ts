// import { Image, Layout, Menu, MenuProps } from 'antd';
// import React, { useState } from 'react'
// import { Container } from 'react-bootstrap';
// // import { Container } from 'react-dom';
// import { VscChevronLeft, VscDashboard, VscPackage } from 'react-icons/vsc';
// import { useNavigate } from 'react-router-dom';
// // import { resetProductParams } from '../../app/store/menuSlice';
// import { useAppDispatch } from '../store/configureStore';
// const { Sider } = Layout;
// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const useSiderPrivate = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const items: MenuItem[] = [
//     // getItem('แดชบอร์ด', '1', <VscDashboard style={{ fontSize: "20px" }} />,),
//     // getItem('สินค้า', '2', <VscPackage style={{ fontSize: "20px" }} />),
//     // getItem('กลับ', '9', <VscChevronLeft style={{ fontSize: "20px" }} />),
//   ];

//   interface Page {
//     key?: string;
//   }

//   const onPage = ({ key }: Page) => {
//     switch (key) {
//       case "1":
//         navigate("/privatehome");
//         break;
//       case "2":
//         navigate("/private/product");
//         break;
//       case "9":
//         navigate("/");
//         // dispatch(resetProductParams());
//         break;
//       default:
//         break;
//     }
//   };

//   return {
//     // Sider: (
        
        
//     // //   <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//     // //     <Container className='center' style={{ padding: "10px" }}>
//     // //       <img src='https://drive.google.com/uc?id=1cCYCdUJx1b3U3mx91nPtdGCZOlU1dhSJ' alt='logo image' width={50} />
//     // //     </ConTainer>
//     // //     <Menu onClick={(e) => onPage({ key: e.key })} className='text-st' theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//     // //   </Sider>
//     // ),
//     onPage: onPage,
//   }
// }

// export default useSiderPrivate


