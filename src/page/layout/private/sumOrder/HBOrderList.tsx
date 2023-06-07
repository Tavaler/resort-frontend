import { useEffect, useRef, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import { GetHBOrderAll, fetchHBOrderById, resetDetailHB } from "../../../../app/store/hbOrderSlice";
import LayoutAdmin from "../admin/LayoutAdmin";
import { PaymentStatus } from "../../../../app/models/HBOrder";
import { Button, Modal } from "antd";
import { PrinterOutlined } from "@ant-design/icons";
import { useReactToPrint } from "react-to-print";
import Item from "antd/es/descriptions/Item";
import moment from "moment";
import Swal from "sweetalert2";
import agent from "../../../../app/api/agent";

function HBOrderList() {
  // const { hborder ,} = useHBorder();
  //   const { order } = useOrder();

  
  const dispatch = useAppDispatch();
  const { hbLoaded, hb } = useAppSelector((state) => state.hbOrder);
  
  const {
    // hborderdetailLoaded,
    hborderdetail,
  } = useAppSelector((state) => state.hbOrder);

  const [openOrder, setOpenOrder] = useState(false);
  const [hboderId, setHBOrderId] = useState<string>("");
  /////hb
  useEffect(() => {
    dispatch(fetchHBOrderById(hboderId));
    return () => {
      dispatch(resetDetailHB());
    };
  }, [hborderdetail, hboderId, dispatch]);


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
            await agent.HBOrder.aginStatusOrder({id})
              dispatch(GetHBOrderAll())
            
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
            await agent.HBOrder.SuccessStatusOrder({id})
              dispatch(GetHBOrderAll())
            
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
            await agent.HBOrder.cancelStatusOrder({id})
              dispatch(GetHBOrderAll())
            
          }
        );
      }
    });
  };

  const producttest = hborderdetail?.hbOrderItem.map((data) => {
    return (
      <tr className="shadow p-3 mb-5 bg-white rounded" key={data.id}>
        <td className="md-2">
          <div className="d-flex-order align-items-center">
            {data.image[0] ? (
              <img
                className="rounded-circle"
                src={
                  // "https://localhost:5000/images/" +
                  data.image
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
          <p className="fw-normal mb-1">{data.acmdName}</p>
        </td>

        <td className="md-2">{data.acmdPrice} บาท</td>
        {/* <td>{products.stock} ชิ้น</td> */}
        <td className="md-2">{data.acmdType} </td>
        <td>
          {moment
            .utc(data.checkIn)
            .tz("Asia/Bangkok")
            // .format("DD-MM-YYYY HH:mm:ss"
            .format("DD-MM-YYYY")}{" "}
          -
          {moment
            .utc(data.checkOut)
            .tz("Asia/Bangkok")
            // .format("DD-MM-YYYY HH:mm:ss"
            .format("DD-MM-YYYY")}
        </td>
      </tr>
    );
  });

  
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });

  


  // const { productsLoaded, fds } = useAppSelector((state) => state.menu);

  // useEffect(() => {
  //   if (!productsLoaded) dispatch(GetMenuAll());
  // }, [productsLoaded, dispatch]);

  console.log(hb);
  useEffect(() => {
    if (!hbLoaded) dispatch(GetHBOrderAll());
  }, [hbLoaded, dispatch]);

  return (
    <LayoutAdmin>
      <table ref={componentRef} className="table align-middle mb-0 bg-white">
        <thead>
          <h3>รายการบริการที่พัก</h3>
          {/* <Button
                onClick={() => {window.location.replace("/createserve")}}
                style={{ margin: "10px", right: "10px" }}
              >
                <AddBusinessIcon /> เพิ่มรายการ
              </Button> */}
          <Button
            // onClick={handlePrint}
            style={{ margin: "10px", right: "10px" }}
            onClick={handlePrint}

          >
            <PrinterOutlined /> Print
          </Button>
          <tr>

          </tr>
        </thead>
        <tbody>
          {hb?.map((data) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.name}</th>
                <th scope="row">{data.sumDate} วัน</th>

                <td>
                  {data.image ? (
                    <img
                      src={data.image}
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
                <th scope="row">{data.sumPrice} บาท</th>
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
                    setHBOrderId(data.id);
                    setOpenOrder(true);
                  }}>รายระเอียด</Button>
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
                </td>
              </tr>
              


            );
          })}
        </tbody>
      </table>

      <Modal
              title="รายระเอียดการจอง"
              centered
              open={openOrder}
              onOk={() => {
                setOpenOrder(false);
                setHBOrderId("");
              }}
              onCancel={() => {
                setOpenOrder(false);
                setHBOrderId("");
              }}
              width={1000}
            >
              {hborderdetail ? (
                <>
                  <p>id : {hborderdetail?.id}</p>
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
                    {hborderdetail?.payimage ? (
                      <img width={300} height={300} src={hborderdetail?.payimage} />
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
    </LayoutAdmin>
  );
}

export default HBOrderList;
