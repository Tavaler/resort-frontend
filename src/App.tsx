import { useCallback, useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import Register from "./page/Register";
import Navbar from "./components/Navbar";
import Room from "./page/layout/Room";
import Login from "./page/Login";

// import {
//   useLocation,
//   useNavigate
// } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./page/layout/Home";
import Menu from "./page/layout/pubilc/menu/Menu";
import LoginV2 from "./page/LoginV2";

import { useAppDispatch } from "./app/store/configureStore";
import { fetchAccount } from "./app/store/accountSlice";

import Sidebar from "./components/Sidebar";
import Homepage from "./page/layout/private/homepage";
import Datepicker from "./page/layout/private/userList";
import AcmdDetail from "./page/layout/pubilc/acmd/AcmdDetail";
// import Test from './page/layout/private/test'

// import { useEffect, useCallback } from 'react';
// import {
//   useLocation,
//   useNavigate
// } from "react-router-dom";
// import Footer from './Footer';
// import Header from './Header';
// import { useAppDispatch, useAppSelector } from '../store/configureStore';
// import { fetchCurrentAccount, logout, setTing, setUp } from '../store/accountSlice';
// import { fetchCartAsync } from '../../app/store/cartSlice';
// import { mainRoutes } from '../routes/Routes';

// import { ToastContainer } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// import "../../App.css";
import { setShowLayout } from "./app/store/homeSlice";
import { Layout } from "antd";
// import useSiderPrivate from '../hooks/useSiderPrivate';
import useSiderPrivate from "./app/hook/useSiderPrivate";
import Cartpage from "./page/layout/pubilc/cart/Cartpage";
import CartV2 from "./page/layout/pubilc/cart/cartV2";
import MenuDetail from "./page/layout/pubilc/menu/menu-detail";
import {
  PrivateLogin,
  PrivateRoute,
} from "./page/layout/private/PrivateRoute/PrivateRoute";
import { RoleInfo } from "./app/models/role";
import CreateMenu from "./page/layout/private/menu/CreateMenu";
import UploadImgsMenu from "./page/layout/private/menu/UploadImgsMenu";

import FdList from "./page/layout/private/menu/FdList";
import UploadImgsV2 from "./page/layout/private/menu/UploadImgsV2";
import Header from "./components/Header";
import AcmdBooking from "./page/layout/pubilc/acmdBooking/booking";
import AcmdList from "./page/layout/private/acmd/acmList";
import EditMenu from "./page/layout/private/menu/EditMenu";
import FdListV2 from "./page/layout/private/menu/FdListV2";
import Test from "./page/layout/test/test";
// import { Header } from "antd/es/layout/layout";s

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchAccount())
        .unwrap()
        .then(async (data) => {
          //if (data) await dispatch(fetchCartAsync(data.id));
        });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<PrivateLogin />} ></Route> */}

        {/* <Route path="/" element={<Sidebar />} /> */}
        <Route
          path="/login"
          element={
            <PrivateLogin>
              <LoginV2 />
            </PrivateLogin>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateLogin>
              <Register />
            </PrivateLogin>
          }
        />
        <Route path="/rooms" element={<Room />} />

        <Route path="/roomsdetail/:id" element={<AcmdDetail />} />




        <Route element={<PrivateRoute roles={[RoleInfo.Admin]} />}>
          {/* <Header /> */}
          {/* <Header /> */}
          <Route path="/home" element={<Homepage />} />

          <Route path="/createmenu" element={<CreateMenu />} />

          {/* <Route path="/uploadImgsmenu/:id" element={<UploadImgsV2 />} /> */}
          <Route path="/uploadImgsmenu/:id" element={<UploadImgsMenu />} />

          <Route path="/fdList" element={<FdListV2 />} />


          
          <Route path="/acmdList" element={<AcmdList />} />




        </Route>


        <Route path="/editmenu" element={<EditMenu />} />


        

        <Route path="/menus" element={<Menu />} />
        <Route path="/menudetail/:id" element={<MenuDetail />} />
        {/* <Route path='/detail/:id' element={<Details />} /> */}

        <Route path="/privatehome" element={<Homepage />} />

        <Route path="/date" element={<Datepicker />} />

        <Route path="/sli" element={<Sidebar />} />

        <Route path="/cart" element={<CartV2 />} />

        <Route path="/acmdBooking" element={<AcmdBooking />} />

        <Route path="/s" element={<Sidebar />} />
        <Route path="/Test" element={<Test />} />


      </Routes>
    </>
  );
}

export default App;


