import { useEffect } from "react";
import LayoutPubilc from "../Layout/LayoutPubilc";
import { useAppDispatch, useAppSelector } from "../../../../app/store/configureStore";
import { GetServeAll } from "../../../../app/store/serveSlice";
import { URLSever } from "../../../../util/util";

function Serve() {
    const dispatch = useAppDispatch();
    const { serveLoaded, serve } = useAppSelector((state) => state.serve);
    console.log("serve", serve);
    useEffect(() => {
      if (!serveLoaded) dispatch(GetServeAll());
    }, [serveLoaded, dispatch]);
  

  return (
    <div>
      <LayoutPubilc>
        {/* <Navbar /> */}

        {/* <!-- Breadcrumb Section Begin --> */}
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>บริการ</h2>
                  <div className="bt-option">
                    <a href="/">หน้าหลัก</a>
                    <span>บริการทั้งหมด</span>
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
              {serve?.map((serve) => {
                return (
                  <div key={serve.serveId} className="col-lg-4 col-md-6">
                    <div
                      style={{ background: "#fff" }}
                      className="room-item shadow p-3 mb-5 bg-body-tertiary rounded"
                    >
                      {serve.serveImgs[0] ? (
                        <img
                          src={
                            URLSever +
                            serve.serveImgs[0].image
                          }
                          style={{ height: "200px" }}
                          alt={
                            URLSever +
                            serve.serveImgs[0].image
                          }
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
                        <h4>{serve.name}</h4>
                        <h3>
                          {serve.price} ฿<span>/ต่อครั้ง</span>
                        </h3>
                        <table>
                          <tbody>
                            {/* <tr>
                              <td className="r-o">ขนาด:</td>
                              <td>{serve.quantity} ห้อง</td>
                            </tr> */}
                            {/* <tr>
                              <td className="r-o">ประเภท:</td>
                              <td>{acmd.accommodationType.name}</td>
                            </tr> */}

                            {/* <tr>
                              <td className="r-o">สถานะ:</td>
                              {serve?.isUsed == 1 ? (
                                <td>ว่าง</td>
                              ) : (
                                <td>ไม่ว่าง</td>
                              )}
                              
                            </tr> */}

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
                           href={`/servedetail/${serve.serveId}`}
                        >
                          รายละเอียด
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ------------------------------------ */}
            </div>
          </div>
        </section>
        {/* <!-- Rooms Section End --> */}
      </LayoutPubilc>
    </div>
  );
}

export default Serve;
