import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { GetMenuAll } from "../../app/store/menuSlice";
import Navbar from "../../components/Navbar";

function Menu() {
  const dispatch = useAppDispatch();
  const { productsLoaded, fds } = useAppSelector((state) => state.menu);
  console.log("test", fds);
  useEffect(() => {
    if (!productsLoaded) dispatch(GetMenuAll());
  }, [productsLoaded, dispatch]);

  return (
    <>
      <Navbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Our Menu</h2>
                <div className="bt-option">
                  <Link to="/home">หน้าหลัก</Link>
                  <span>เมนูอาหาร</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      <section className="rooms-section spad">
        <div className="container">
          <div className="row">
            

            {/* ------------------------------------------------------------------------- */}
            {fds?.map((menu) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                      <img src="img/254126.jpg" alt="" />
                      <div className="ri-text">
                        <h4>{menu.fdName}</h4>
                        <h3>
                          {menu.fdPrice} ฿<span></span>
                        </h3>
                        <table>
                          <tbody>
                            <tr>
                              <td className="r-o">ขนาด:</td>
                              <td>30 ft</td>
                            </tr>
                            <tr>
                              <td className="r-o">ประเภท:</td>
                              <td>ของทอด</td>
                            </tr>
                            <tr>
                              {/* <td className="r-o">Bed:</td>
                              <td>King Beds</td> */}
                            </tr>
                            <tr>
                              <td className="r-o">Services:</td>
                              <td>1111111111111111111,...</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#" className="primary-btn">
                          รายละเอียดอื่นๆ
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {/* ------------------------------------------------------------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="img/58426.jpeg" alt="" />
                <div className="ri-text">
                  <h4>test</h4>
                  <h3>
                    159฿<span></span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">ขนาด:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">ประเภท:</td>
                        <td>ของทอด</td>
                      </tr>
                      {/* <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr> */}
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>22222222222222...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    รายละเอียดอื่นๆ
                  </a>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="img/1478.jpg" alt="" />
                <div className="ri-text">
                  <h4>น่องไก่ทอด</h4>
                  <h3>
                    159฿<span></span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">ขนาด:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">ประเภท:</td>
                        <td>ของทอด</td>
                      </tr>
                      <tr>
                        {/* <td className="r-o">Bed:</td>
                        <td>King Beds</td> */}
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>test 2333.....</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    รายละเอียดอื่นๆ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
