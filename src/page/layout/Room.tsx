import { useEffect } from "react";
import { GetAcmdAll } from "../../app/store/accommodationSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import LayoutPubilc from "./pubilc/Layout/LayoutPubilc";
import { URLSever } from "../../util/util";

function Room() {
  const dispatch = useAppDispatch();
  const { acmdsLoaded, acmd } = useAppSelector((state) => state.acmd);
  console.log("acmd", acmd);
  useEffect(() => {
    if (!acmdsLoaded) dispatch(GetAcmdAll());
  }, [acmdsLoaded, dispatch]);

  return (
    <LayoutPubilc>
      {/* <Navbar /> */}

      {/* <!-- Breadcrumb Section Begin --> */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>ที่พัก</h2>
                <div className="bt-option">
                  <a href="./home.html">หน้าหลัก</a>
                  <span>ห้องท้ังหมด</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Rooms Section Begin --> */}
      <section className="rooms-section spad">
        <div className="container">
          <div className="row">
            {acmd?.map((acmd) => {
              return (
                <div key={acmd.accommodationId}  className="col-lg-4 col-md-6">
                  <div style={{ background: "#fff" }} className="room-item shadow p-3 mb-5 bg-body-tertiary rounded">

                    {acmd.accommodationImgs[0] ? (
                      <img
                        src={
                          // "https://localhost:5000/images/" 
                          URLSever
                          +
                          acmd.accommodationImgs[0].image
                        }
                        style={{ height: "200px" }}
                        alt=""
                      />
                    ) : (
                      <img
                        src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                        style={{ height: "20rem" }}
                        alt=""
                      />
                    )}

                    {/* {menu.fdImgs[0] ?  <img src={"https://localhost:5000/images/"+menu.fdImgs[0].fdImgName} style={{ height: "20rem" }} alt="" /> : <img src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" style={{ height: "20rem" }} alt="" />} */}

                    {/* <img src="img/room/room-1.jpg" alt="" /> */}
                    <div className="ri-text">
                      <h4>{acmd.name}</h4>
                      <h3>
                        {acmd.price} ฿<span>/ต่อคืน</span>
                      </h3>
                      <table>
                        <tbody>
                          <tr>
                            <td className="r-o">ขนาด:</td>
                            <td>{acmd.quantity} ห้อง</td>
                          </tr>
                          <tr>
                            <td className="r-o">ประเภท:</td>
                            <td>{acmd.accommodationType.name}</td>
                          </tr>
                          <tr>
                            <td className="r-o">สถานะ:</td>
                            {/* <td>ว่าง</td> */}
                            {// detailacmd?.status == "1" ?
                            acmd?.isUsed == 1 ? <td>ว่าง</td> : <td>ไม่ว่าง</td>}
                            {/* {menu.fdImgs[0] ?  <img src={"https://localhost:5000/images/"+menu.fdImgs[0].fdImgName} style={{ height: "20rem" }} alt="" /> : <img src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" style={{ height: "20rem" }} alt="" />} */}
                          </tr>
                          {/* <tr>
                            <td className="r-o ">Services:</td>
                            <td>
                              <p className="overflow-ellipsis over-text">
                                {acmd.detail}
                              </p>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                      <a
                        className="primary-btn"
                        href={`/roomsdetail/${acmd.accommodationId}`}
                      >
                        รายละเอียด
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ------------------------------------ */}

            {/* <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img
                  src="img/room/room-2.jpg"
                  style={{ height: "200px" }}
                  alt=""
                />
                <div className="ri-text">
                  <h4>Deluxe Room</h4>
                  <h3>
                    159฿<span>/ต่อคืน</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 5</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img
                  src="img/room/room-3.jpg"
                  style={{ height: "200px" }}
                  alt=""
                />
                <div className="ri-text">
                  <h4>Double Room</h4>
                  <h3>
                    159฿<span>/ต่อคืน</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 2</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="img/room/room-4.jpg" alt="" />
                <div className="ri-text">
                  <h4>Luxury Room</h4>
                  <h3>
                    159฿<span>/ต่อคืน</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 1</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    รายละเอียด
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="./assets/img/room/room-5.jpg" alt="" />
                <div className="ri-text">
                  <h4>Room With View</h4>
                  <h3>
                    159฿<span>/ต่อคืน</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 1</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    รายละเอียด
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="img/room/room-6.jpg" alt="" />
                <div className="ri-text">
                  <h4>Small View</h4>
                  <h3>
                    159฿<span>/ต่อคืน</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 2</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    รายละเอียด
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="room-pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">
                  Next <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>

             */}
          </div>
        </div>
      </section>
      {/* <!-- Rooms Section End --> */}
    </LayoutPubilc>
  );
}

export default Room;
