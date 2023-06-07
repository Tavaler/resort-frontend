import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import { GetOrderAll, fetchOrderById, resetOrderDetail } from "../../../../app/store/orderSlice";
import LayoutAdmin from "../admin/LayoutAdmin";
// import { PaymentStatus } from "../../../../app/models/HBOrder";
import { Button, Modal } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { PaymentStatus } from "../../../../app/models/HBOrder";
import { useReactToPrint } from "react-to-print";
// import moment from "moment";
import Swal from "sweetalert2";
import agent from "../../../../app/api/agent";
// import { fetchHBOrderById, resetDetailHB, GetHBOrderAll } from "../../../../app/store/hbOrderSlice";
import Item from "antd/es/descriptions/Item";

function OrderList() {
  // const { hborder ,} = useHBorder();
  //   const { order } = useOrder();
  // const { account } = useAppSelector((state) => state.account);

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });


  const dispatch = useAppDispatch();
  const { orderAllLoaded, orderAll } = useAppSelector((state) => state.order);

  console.log(orderAll);
  useEffect(() => {
    if (!orderAllLoaded) dispatch(GetOrderAll());
  }, [orderAllLoaded, dispatch]);

  const {
    // hborderdetailLoaded,
    // hborderdetail,
    orderDetail
  } = useAppSelector((state) => state.order);

  const [openOrder, setOpenOrder] = useState(false);
  const [orderId, setOrderId] = useState<string>("");
  /////hb
  useEffect(() => {
    dispatch(fetchOrderById(orderId));
    return () => {
      dispatch(resetOrderDetail());
    };
  }, [orderDetail, orderId, dispatch]);


  const AgainHB = (id: any) => {
    Swal.fire({
      title: "ยืนยันหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ยืนยันแล้ว!", "เรียบร้อย", "success").then(
          async () => {
            console.log(id)
            // console.log(account?.accountId)
            await agent.Order.aginStatusOrder({id})
              dispatch(GetOrderAll())
            
          }
        );
      }
    });
  };

  const SuccessHB = (id: any) => {
    Swal.fire({
      title: "ยืนยันหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ยืนยันแล้ว!", "เรียบร้อย", "success").then(
          async () => {
            console.log(id)
            // console.log(account?.accountId)
            await agent.Order.SuccessStatusOrder({id})
              dispatch(GetOrderAll())
            
          }
        );
      }
    });
  };

  const CancelHB = (id: any) => {
    Swal.fire({
      title: "ยืนยันที่จะยกเลิกหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ยกเลิกแล้ว!", "ยกเลิกเรียบร้อย", "success").then(
          async () => {
            console.log(id)
            // console.log(account?.accountId)
            await agent.Order.cancelStatusOrder({id})
              dispatch(GetOrderAll())
            
          }
        );
      }
    });
  };


  const going = (id: any) => {
    Swal.fire({
      title: "ยืนยันหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ยืนยันแล้ว!", "เรียบร้อย", "success").then(
          async () => {
            console.log(id)
            // console.log(account?.accountId)
            await agent.Order.goingorder({id})
              dispatch(GetOrderAll())
            
          }
        );
      }
    });
  };

  const comming = (id: any) => {
    Swal.fire({
      title: "ยืนยันหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ยืนยันแล้ว!", "เรียบร้อย", "success").then(
          async () => {
            console.log(id)
            // console.log(account?.accountId)
            await agent.Order.comingorder({id})
              dispatch(GetOrderAll())
            
          }
        );
      }
    });
  };

  const success = (id: any) => {
    Swal.fire({
      title: "ยืนยันที่จะยกเลิกหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ยกเลิกแล้ว!", "ยกเลิกเรียบร้อย", "success").then(
          async () => {
            console.log(id)
            // console.log(account?.accountId)
            await agent.Order.successorder({id})
              dispatch(GetOrderAll())
            
          }
        );
      }
    });
  };



  const producttest = orderDetail?.orderItem.map((data) => {
    return (
      <tr className="shadow p-3 mb-5 bg-white rounded" key={data.id}>
        <td className="md-2">
          <div className="d-flex-order align-items-center">
            {data.productImage[0] ? (
              <img
                className="rounded-circle"
                src={
                  // "https://localhost:5000/images/" +
                  data.productImage
                }
                style={{ width: "45px", height: "45px" }}
                alt=""
              />
            ) : (
              <img
                className="rounded-circle"
                src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                style={{ width: "45px", height: "45px" }}
                alt=""
              />
            )}
          </div>
        </td>
        <td className="md-2">
          <p className="fw-normal mb-1">{data.productName}</p>
        </td>

        <td className="md-2">{data.productPrice} บาท</td>
        {/* <td>{products.stock} ชิ้น</td> */}
        <td className="md-2">{data.amount} </td>
        <td>
          {data.sumAmountPrice}
        </td>
      </tr>
    );
  });

  return (
    <LayoutAdmin>
      <table
        ref={componentRef}
        //  className="table table-borderless"
        className="table align-middle mb-0 bg-white"
      >
        <thead>
          <h3>รายการบริการอาหาร</h3>

          <Button
            // onClick={() => {window.location.replace("/createacmd")}}
            // onClick={handlePrint}
            style={{ margin: "10px", right: "10px" }}
            onClick={handlePrint}

          >
            <PrinterOutlined /> Print
          </Button>
          <tr style={{ backgroundColor: "#dff2" }} color="#dff2">
            <th scope="col">#</th>
            <th scope="col">จำนวนรายการ</th>
            <th scope="col">รูป</th>
            <th scope="col">ราคารวม</th>
            <th scope="col">สถานะจัดส่ง</th>
            <th scope="col">สถานะการชำระ</th>
            <th color="red" scope="col">
              การจัดการ
            </th>

            {/* <th scope="col">สถานะการจัดส่ง</th> */}
          </tr>
        </thead>
        <tbody>
          {orderAll?.map((data) => {
            // if (data.status == 0)
            return (
              <tr className="shadow p-3 mb-5 bg-white rounded" key={data.id}>
                <th scope="row">{data.productName}</th>
                <th scope="row">x{data.productItemAmount}</th>

                <td>
                  {data.productImage ? (
                    <img
                      src={data.productImage}
                      style={{ height: "200px", width: "250px" }}
                      alt=""
                    />
                  ) : (
                    <img
                      src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                      style={{ height: "20rem" }}
                      alt=""
                    />
                  )}
                </td>
                <th scope="row">{data.total} บาท</th>
                <th scope="row">
                {
            // products?.isUsed == "1" ?
            data.delStatus == "0" ? (
              < >
                กำลังจัดเตรียม
              </>
            ) : data.delStatus == "1" ? (
              <
              >
                กำลังจัดส่ง
              </>
            ) : data.delStatus == "2" ? (
              <
              >
                จัดส่งสำเร็จ
              </>
            ) : (
              <
              >
                เกิดข้อผิดพลาด
              </>
            )
          }
                </th>
                <td>
                  {data.status == PaymentStatus.WorkInProgress ? (
                    <>ยังไม่ชำระ</>
                  ) : data.status == PaymentStatus.WaitingForCheck ? (
                    <>รอตรวจสอบ</>
                  ) : data.status == PaymentStatus.SuccessfulTransaction ? (
                    <>ชำระเรียบร้อย</>
                  ) : (
                    <>ยกเลิกแล้ว</>
                  )}
                </td>

                <td>
                  <Button onClick={() => {
                    setOrderId(data.id);
                    setOpenOrder(true);
                  }}>รายระเอียด</Button>
                  <br />
                  <br />
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ตัวเลือก
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item"
                         href="#"
                         onClick={() => AgainHB(data.id)}
                         >
                          แนบหลักฐานใหม่
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"
                        onClick={() =>SuccessHB(data.id)}
                        >
                          ยืนยัน
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"
                        onClick={() => CancelHB(data.id)}
                        >
                          ยกเลิก
                        </a>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="dropdown">
                    <a
                      className="btn btn-primary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      การจัดส่ง
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item"
                         href="#"
                         onClick={() => going(data.id)}
                         >
                          จัดเตรียมเมนู
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"
                        onClick={() =>comming(data.id)}
                        >
                          กำลังจัดส่ง
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"
                        onClick={() => success(data.id)}
                        >
                          จัดส่งสำเร็จ
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
              title="รายระเอียดการสั่งอาหาร"
              centered
              open={openOrder}
              onOk={() => {
                setOpenOrder(false);
                setOrderId("");
              }}
              onCancel={() => {
                setOpenOrder(false);
                setOrderId("");
              }}
              width={1000}
            >
              {orderDetail ? (
                <>
                  <p>id : {orderDetail?.id}</p>
                  {/* <p>some contents...</p> */}
    
                  <table
                    // ref={componentRef}
                    className="table align-middle mb-0  "
                  >
                    <thead>
                      <h3>รายการที่พัก</h3>
    
                      <tr className="bg-secondary">
                        <th>ที่พัก</th>
                        <th>ชื่อที่พัก</th>
                        <th>ราคา/คืน</th>
                        {/* <th>จำนวน</th> */}
                        <th>ประเภทที่พัก</th>
                        <th>ระยะเวลาที่จอง</th>
                        {/* <th>การจัดการ</th> */}
                      </tr>
                    </thead>
                    <tbody>{producttest}</tbody>
                  </table>
                  <br />

                  <Item>
                    <h3>หลักฐานการโอน</h3>
                    {orderDetail?.payimage ? (
                      <img width={300} height={300} src={orderDetail?.payimage} />
                    ) : (
                      <img
                        src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                        style={{ height: "20rem" }}
                        alt=""
                      />
                    )}
                  </Item>
                </>
              ) : (
                ""
              )}
            </Modal>
      <hr />
    </LayoutAdmin>
  );
}

export default OrderList;
