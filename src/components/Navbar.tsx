import { Link } from "react-router-dom";
import { 
  // useAppDispatch,
   useAppSelector } from "../app/store/configureStore";
import Usermenu from "./Usermenu";
import { Register } from "../app/models/user";

// import Cartpage from "../page/layout/pubilc/cart/Cartpage";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import Button from "antd/es/button";

const Navbar = () => {
  // const dispatch = useAppDispatch();
  const { account } = useAppSelector((state) => state.account);
  return (
    <div style={{ backgroundColor: "#D5D1D0" }}>
      {/* <!-- Offcanvas Menu Section Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open">
        <i className="icon_menu"></i>
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close"></i>
        </div>
        <div className="search-icon  search-switch">
          <i className="icon_search"></i>
        </div>
        <div className="header-configure-area">
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

          {/* <a href="#" className="bk-btn">
            Booking Now
          </a> */}

          <Usermenu account={account as Register} />
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li className="">
              {/* <li className="active"> */}
              {/* <Link to="/">Home</Link> */}
              <Link to="/">Home</Link>

            </li>
            <li>
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
        <div id="mobile-menu-wrap"></div>
        {/* <div className="top-social">
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
        </div> */}
        <ul className="top-widget">
          <li>
            <i className="fa fa-phone"></i> (12) 345 67890
          </li>
          <li>
            <i className="fa fa-envelope"></i>Thongphapomriver@gmail.com
          </li>
        </ul>
      </div>
      {/* <!-- Offcanvas Menu Section End --> */}

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
                    <i className="fa fa-envelope"></i>{" "}
                    Thongphapomriver@gmail.com
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <Usermenu account={account as Register} />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <a href="#">
                    {/* <img src="img/logo.png" alt="" /> */}
                    <img
                    className="img-fluid"
                    style={{ maxHeight: "4rem", maxWidth: "auto" }}
                    src="https://drive.google.com/uc?id=1hWb2v2IBqOHtIUq5ENhgMf-Tog5dx4Dr"
                    alt=""
                  />
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className="">
                        {/* <li className="active"> */}
                        <a href="/">หน้าหลัก</a>
                      </li>
                      <li>
                        <a href="/rooms">ที่พัก</a>
                      </li>
                      <li>
                        <a href="/menus">เมนู</a>
                      </li>
                      <li>
                        <a href="/serve">บริการ</a>
                      </li>

                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    {/* <i className="icon_search"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> 
    </div>
  );
};

export default Navbar;
