import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/store/configureStore";
import { GetMenuAll } from "../../../../app/store/menuSlice";
import Swal from "sweetalert2";
import { addCartItemAsync } from "../../../../app/store/cartSlice";
import LayoutPubilc from "../Layout/LayoutPubilc";
import { PlusCircleFilled } from "@ant-design/icons";
import { URLSever } from "../../../../util/util";

function Menu() {
  const { account } = useAppSelector((state) => state.account);
  // const { carts } = useAppSelector((state) => state.cartItem);

  const [amount, 
    // setAmount
  ] = useState<Number | any>(1); // จำนวนสินค้าที่เราจะเพิ่มใส่ตะกร้า


  const dispatch = useAppDispatch();
  const { productsLoaded, fds } = useAppSelector((state) => state.menu);
  console.log("menu", fds);

  // const item = carts?.find((i) => i.fdId);

  const AddCart = async (accountId: any, fdId: any, amount: any) => {
    if (account) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เพิ่มลงตะกร้าแล้ว",
        showConfirmButton: false,
        timer: 1000,
      })
        .then(() => {
          const result: any = dispatch(
            addCartItemAsync({
              accountId: accountId,
              fdId: fdId,
              amount: amount,
            })
          );
          console.log(result)
        })
        .then(() => {
          window.location.replace("/menus");
        });
    } else
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "กรุณาเข้าสู่ระบบ",
        showConfirmButton: false,
        timer: 1000,
      });
  };
  
  useEffect(() => {
    if (!productsLoaded) dispatch(GetMenuAll());
  }, [productsLoaded, dispatch]);

  return (
    <LayoutPubilc>
      {/* <Navbar /> */}
      {/* <!-- Breadcrumb Section Begin --> */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>รายการอาหาร</h2>
                <div className="bt-option">
                  <Link to="/">หน้าหลัก</Link>
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
                <div key={menu.fdId} className=" col-lg-4 col-md-6 ">
                  <div
                    style={{ background: "#fff" }}
                    className="room-item shadow p-3 mb-5 bg-body-tertiary rounded"
                  >
                    {/* {menu.fdImgs == null} */}
                    {/* <img src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" style={{ height: "20rem" }}  alt="" /> */}
                    {menu.fdImgs ? (
                      <img
                        src={
                          URLSever +
                          menu.fdImgs[0].fdImgName
                        }
                        style={{ height: "20rem" }}
                        alt={
                          URLSever +
                          menu.fdImgs[0].fdImgName
                        }
                      />
                    ) : (
                      <img
                        src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                        style={{ height: "20rem" }}
                        alt=""
                      />
                    )}

                    <div className="ri-text">
                      <h4>{menu.fdName}</h4>
                      <h3>
                        {menu.fdPrice} ฿<span></span>
                      </h3>

                      <table>
                        <tbody>
                          {/* <tr>
                            <td className="r-o">ขนาด:</td>
                            <td>30 ft</td>
                          </tr> */}
                          <tr>
                            <td className="r-o">ประเภท:</td>
                            <td>{menu.fdCategory.name}</td>
                          </tr>
                          <tr>
                            {/* <td className="r-o">Bed:</td>
                              <td>King Beds</td> */}
                          </tr>
                          <tr>
                            <td className="r-o over-text">คำอธิบาย</td>
                            <td className="overflow-ellipsis">
                              {menu.fdDescription}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <a
                        className="primary-btn"
                        href={`/menudetail/${menu.fdId}`}
                      >
                        รายละเอียดอื่นๆ
                      </a>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <a style={{color:"green"}}
                        className="success-btn"
                        onClick={() =>
                          AddCart(account?.accountId, menu?.fdId, amount)
                        }
                      >
                        <PlusCircleFilled />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* ------------------------------------------------------------------------- */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="img/58426.jpeg" style={{ height: "20rem" }}  alt="" />
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
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td >22222222222ffffffffffffffffffff222ddddddddd</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    รายละเอียดอื่นๆ
                  </a>
                </div>
              </div>
            </div> */}

            {/* ----------------------------------------------------------------------- */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src="img/1478.jpg" style={{ height: "200px" }}  alt="" />
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
            </div> */}

            
          </div>
        </div>
      </section>
    </LayoutPubilc>
  );
}

export default Menu;
