import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <div>
        {/* <!-- Header Section Begin --> */}
        <header className="header-section">
          <div className="top-nav">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="tn-left">
                    <li>
                      <i className="fa fa-phone"></i> (12) 345 67890
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> thongphapomriver@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="tn-right">
                    <div className="top-social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-tripadvisor"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                    <a href="#" className="bk-btn">
                      จองเลย
                    </a>
                    {/* <div className="language-option">
                      <img src="img/flag.jpg" alt="" />
                      <span>
                        EN <i className="fa fa-angle-down"></i>
                      </span>
                      <div className="flag-dropdown">
                        <ul>
                          <li>
                            <a href="#">Zi</a>
                          </li>
                          <li>
                            <a href="#">Fr</a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="logo">
                    <a href="./index.html">
                      <img src="img/logo.png" alt="" />
                    </a>
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
                          <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                          <Link to="/menus">Menu</Link>
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
                          <a href="./blog.html">News</a>
                        </li>
                        <li>
                          <a href="./contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="nav-right search-switch">
                      <i className="icon_search"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Header End --> */}
      </div>
    );
  }

export default Navbar;
