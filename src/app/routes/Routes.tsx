import { Route, Routes } from "react-router-dom";
import { PrivateLogin, PrivateRoute } from '../../components/PrivateRoute';
import Sidebar from '../../components/Sidebar';
// import Homepage from '../../page/layout/private/homepage';
import CreateMenu from '../../page/layout/private/menu/CreateMenu';
// import FdList from '../../page/layout/private/menu/FdList';
//import UploadImgsMenu from '../../page/layout/private/menu/UploadImgsMenu';
import Datepicker from '../../page/layout/private/userList';
import CartV2 from '../../page/layout/pubilc/cart/cartV2';
import Menu from '../../page/layout/pubilc/menu/Menu';
import MenuDetail from '../../page/layout/pubilc/menu/menu-detail';
import Login from '../../page/Login';
import Register from '../../page/Register';
import { RoleInfo } from '../models/role';
import Home from "../../page/layout/Home";
// import Homepage from "../../page/layout/private/Homepage";
// import ProductList from '../../features/product/ProductList';
// import HomePage from '../../features/home/HomePage';
// import Login from '../../features/account/Login';
// import Register from '../../features/account/Register';
// import ProductDetail from '../../features/product/ProductDetail';
// import CartPage from '../../features/cart/CartPage';
// import AccountPage from '../../features/account/AccountPage';

// import { PrivateLogin, PrivateRoute } from "../layout/PrivateRoute";

// import ProductFavorite from "../../features/product/ProductFavorite";
// import DashboardPage from "../../features/private/DashboardPage";
// import CheckoutPage from "../../features/checkout/CheckoutPage";
// import ProductPrivatePage from "../../features/private/product/ProductPrivatePage";
// import ProductDetailPrivatePage from "../../features/private/product/ProductDetailPrivatePage";
// import ProductsSimilar from "../../features/product/ProductsSimilar";
// import TestPage from "../../features/TestPage";
// import ProductFormPrivate from "../../features/private/product/ProductFormPrivate";

//import { RoleInfo } from "../models/Role";

export const mainRoutes = (
         <Routes>
          
           {/* <Route path="/" element={<Home />} /> */}
           <Route path="/" element={<Home />} />

           <Route
             path="/login"
             element={
               <PrivateLogin>
                 <Login />
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
           {/* <Route element={<PrivateRoute />} >
        <Route path='/cart' element={<CartPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
    </Route> */}

           <Route element={<PrivateRoute roles={[RoleInfo.Admin]} />}>
             {/* <Header /> */}
             {/* <Header /> */}
             {/* <Route path="/home" element={<Homepage />} /> */}
             <Route path="/createmenu" element={<CreateMenu />} />
          {/* <Route path="/editmenu" element={<EditMenu />} /> */}

             {/* <Route path="/uploadImgsmenu/:id" element={<UploadImgsV2 />} /> */}
             {/* <Route path="/uploadImgsmenu/:id" element={<UploadImgsMenu />} /> */}
             {/* <Route path="/fdList" element={<FdList />} /> */}
           </Route>

           <Route path="/menus" element={<Menu />} />
           <Route path="/menudetail/:id" element={<MenuDetail />} />
           {/* <Route path='/detail/:id' element={<Details />} /> */}
           


           <Route path="/date" element={<Datepicker />} />

           <Route path="/sli" element={<Sidebar />} />

           <Route path="/cart" element={<CartV2 />} />
           <Route path="/s" element={<Sidebar />} />
         </Routes>
       );
