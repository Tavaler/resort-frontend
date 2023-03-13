import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../app/store/accountSlice";
import { useAppDispatch, useAppSelector } from "../app/store/configureStore";
import Swal from "sweetalert2";
import Usermenu from "./Usermenu";
import { Register } from "../app/models/user";
import Cartpage from "../page/layout/pubilc/cart/Cartpage";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Button from "antd/es/button";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { account } = useAppSelector((state) => state.account);
  return (
    <div >
      {/* <!-- Header Section Begin --> */}
      <header style={{backgroundColor:"#D5D1D0"}} className="header-section">
        <nav className="top-nav">
          <div className="">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li>
                    <i className="fa fa-phone"></i> (12) 345 67890
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{" "}
                    thongphapomriver@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Usermenu account={account as Register} />
              </div>
            </div>
          </div>
        </nav>
        <nav className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <Link to="#">
                    <img style={{height:"100%" ,width:"auto"}} src="https://drive.google.com/uc?id=1hWb2v2IBqOHtIUq5ENhgMf-Tog5dx4Dr" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className="active">
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        {/* <Link to="/rooms" /> */}
                        {/* <Link to="/starter" className="nav-link">
              Starter
            </Link> */}
                        <Link to="/rooms">ที่พัก</Link>
                      </li>
                      <li>
                        <Link to="/menus">เมนู</Link>
                      </li>
                      <li>
                        <a href="./pages.html">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="./room-details.html">Room Details</a>
                          </li>
                          <li>
                            <a href="./blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="#">Family Room</a>
                          </li>
                          <li>
                            <a href="#">Premium Room</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="./blog.html">ข่าวสาร</a>
                      </li>
                      <li>
                        <a href="./contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    

                    {/* <h6>0<ShoppingCartOutlined /> </h6> */}

                    {/* <i className="icon_search"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Header End --> */}
    </div>
  );
};

export default Navbar;
