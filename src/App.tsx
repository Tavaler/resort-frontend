import { useCallback, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import Register from "./page/Register";
import Room from "./page/layout/Room";

// import {
//   useLocation,
//   useNavigate
// } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

import Home from "./page/layout/Home";
import Menu from "./page/layout/pubilc/menu/Menu";
import LoginV2 from "./page/LoginV2";

import { useAppDispatch } from "./app/store/configureStore";
import { fetchAccount } from "./app/store/accountSlice";

import Sidebar from "./components/Sidebar";
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
// import useSiderPrivate from '../hooks/useSiderPrivate';
// import Cartpage from "./page/layout/pubilc/cart/Cartpage";
import CartV2 from "./page/layout/pubilc/cart/cartV2";
import MenuDetail from "./page/layout/pubilc/menu/menu-detail";
import {
  PrivateLogin,
  PrivateRoute,
} from "./page/layout/private/PrivateRoute/PrivateRoute";
import { RoleInfo } from "./app/models/role";
import CreateMenu from "./page/layout/private/menu/CreateMenu";
// import UploadImgsMenu from "./page/layout/private/menu/UploadImgsMenu";

// import FdList from "./page/layout/private/menu/FdList";
// import UploadImgsV2 from "./page/layout/private/menu/UploadImgsV2";
import AcmdBooking from "./page/layout/pubilc/acmdBooking/AcmdBooking";
// import AcmdList from "./page/layout/private/acmd/acmList";
import EditMenu from "./page/layout/private/menu/EditMenu";
import FdListV2 from "./page/layout/private/menu/FdListV2";
import Test from "./page/layout/test/test";
import AddImageFd from "./page/layout/private/menu/FdAddImg";
import OrderBookingV2 from "./page/layout/pubilc/booking/orderbookingV2";
import Dashbord from "./page/layout/private/admin/dashbord";
import Profile from "./page/layout/pubilc/user/Profile";
import Serve from "./page/layout/pubilc/serve/Serve";
import ServeDetail from "./page/layout/pubilc/serve/ServeDetail";
import ServeBooking from "./page/layout/pubilc/serve/ServeBooking";
import AcmdListV2 from "./page/layout/private/acmd/acmdListV2";
import CreateAcmd from "./page/layout/private/acmd/CreateAcmd";
import EditAcmd from "./page/layout/private/acmd/EditAcmd";
import AddImageAcmd from "./page/layout/private/acmd/AcmdAddImg";
import ServeListV2 from "./page/layout/private/serve/serveList";
import CreateServe from "./page/layout/private/serve/CreateServe";
import EditServe from "./page/layout/private/serve/EditServe";
import AddImageServe from "./page/layout/private/serve/ServeAddImg";
import UserList from "./page/layout/private/account/UserList";
import HBOrderList from "./page/layout/private/sumOrder/HBOrderList";
import OrderList from "./page/layout/private/sumOrder/OrderList";
import ServeOrderList from "./page/layout/private/sumOrder/ServeOrderList";
// import { Header } from "antd/es/layout/layout";s

function App() {
  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchAccount())
        .unwrap()
        .then(async () => {
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
    {/* http://10.103.0.16/cs63/s15/resort/fornt/ */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
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


        
        <Route path="/profile" element={<Profile />} />

        



        <Route path="/roomsdetail/:id" element={<AcmdDetail />} />

        

        <Route element={<PrivateRoute roles={[RoleInfo.Admin]} />}>
          {/* <Header /> */}
          {/* <Header /> */}

          <Route path="/dashbord" element={<Dashbord />} />
          {/* <Route path="/home" element={<Homepage />} /> */}

          {/* <Route path="/uploadImgsmenu/:id" element={<UploadImgsV2 />} /> */}
          {/* <Route path="/uploadImgsmenu/:id" element={<UploadImgsV2 />} /> */}

          <Route path="/userList" element={<UserList />} />

          <Route path="/fdList" element={<FdListV2 />} />

          <Route path="/acmdList" element={<AcmdListV2 />} />

          <Route path="/serveList" element={<ServeListV2 />} />

          <Route path="/HBorderAll" element={<HBOrderList />} />
        <Route path="/FDorderAll" element={<OrderList />} />
        <Route path="/ServeorderAll" element={<ServeOrderList />} />


          

          <Route path="/AddImageFd/:id" element={<AddImageFd />} />

          <Route path="/AddImageAcmd/:id" element={<AddImageAcmd />} />
          
          <Route path="/AddImageServe/:id" element={<AddImageServe />} />
          {/* <Route path="/AddImageServe/:id" element={<AddImageServe />} /> */}



          <Route path="/editmenu" element={<EditMenu />} />
          <Route path="/editacmd" element={<EditAcmd />} />
          <Route path="/editserve" element={<EditServe />} />



        </Route>

        {/* <Route path="/testP/:id" element={<TestP />} /> */}
        <Route path="/createmenu" element={<CreateMenu />} />
        <Route path="/createacmd" element={<CreateAcmd />} />
        <Route path="/createserve" element={<CreateServe />} />

        

        <Route path="/menus" element={<Menu />} />
        <Route path="/menudetail/:id" element={<MenuDetail />} />
        {/* <Route path='/detail/:id' element={<Details />} /> */}

        {/* <Route path="/privatehome" element={<Homepage />} /> */}

        <Route path="/date" element={<Datepicker />} />

        <Route path="/sli" element={<Sidebar />} />

        <Route path="/ordetail/:id" element={<Test />} />


        {/* <Route path="/cart" element={<CartV3 />} /> */}
        <Route path="/cart" element={<CartV2 />} />

        <Route path="/acmdBooking" element={<AcmdBooking />} />
        <Route path="/orderbooking" element={<OrderBookingV2 />} />

        <Route path="/s" element={<Sidebar />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/serve" element={<Serve />} />
        <Route path="/servedetail/:id" element={<ServeDetail />} />

        <Route path="/servebooking" element={<ServeBooking />} />


        

        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/Test" element={<Test />} /> */}
        {/* <Route path="/booking" element={<Booking />} /> */}
      </Routes>
    </>
  );
}

export default App;


