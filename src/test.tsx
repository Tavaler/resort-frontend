
// import { useCallback, useEffect, useState } from 'react'
// // import LoginUser from './App/Compoments/FormUser/LoginUser'
// // import AboutUser from './App/Compoments/PageUser/AboutUser'
// // import Test from './App/Compoments/Test/Test'

// import { useAppDispatch, useAppSelector } from './app/store/configureStore'
// import { fetchAccount } from './app/store/accountSlice'

// import { fetchCartAsync } from './app/store/cartSlice'
// // import ProfileUser from './App/Compoments/ProfileUser/ProfileUser'
// import { mainRoutes } from './App/Routes/Routes'
// import Layout  from 'antd';
// import { setShowLayout } from './app/store/homeSlice'

// import ToastContainer  from 'react-toastify';
// import React from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   const pathname = window.location.pathname;
//   // const { Sider } = useSiderPrivate();
//   const dispatch = useAppDispatch();
//   const { showLayout } = useAppSelector(state => state.home);
//   const initApp = useCallback(async () => {
//     try {
//       // user ปัจจุบันคือไคร
//       // ตอนรีเฟรดจะเชตค่าใหม่
//       await dispatch(fetchAccount())
//         .unwrap()
//         .then(async (data) => {
//           if (data) await dispatch(fetchCartAsync(data.id));
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     initApp();
//   }, [initApp]);

//   useEffect(() => {
//     var obj = JSON.parse(JSON.stringify(location));
//     var path = obj.pathname as string;
//     if (!path.includes("/admin")) dispatch(setShowLayout(true));
//     else dispatch(setShowLayout(false));
//   }, [location, showLayout]);

//   return (
//     <Layout style={{ minHeight: "100vh" }} className="site-layout">
//       {/* {showLayout ? <HeaderUser /> : <></>} */}
//       {/* {!pathname.includes("/admin") && <HeaderUser />} */}
//        <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//       {mainRoutes}
//       {/* {!pathname.includes("/admin") && <FooterUser />} */}
//       {/* {showLayout ? <FooterUser /> : ""} */}
//     </Layout>
//   );
// }

// export default App

// {/* {mainRoutes} */}