import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/configureStore';
import LayoutAdmin from '../admin/LayoutAdmin';
import { PaymentStatus } from '../../../../app/models/HBOrder';
import { Button, Modal } from 'antd';
// import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { PrinterOutlined } from '@ant-design/icons';
import { GetServeOrderAll, fetchServeOrderById } from '../../../../app/store/serveOrderSlice';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment';
import Swal from 'sweetalert2';
import agent from '../../../../app/api/agent';
// import {  GetHBOrderAll } from '../../../../app/store/hbOrderSlice';
import Item from 'antd/es/descriptions/Item';
import { resetDetailServe } from '../../../../app/store/serveSlice';


function ServeOrderList() {


  const dispatch = useAppDispatch();
  const { svLoaded ,sv } = useAppSelector((state) => state.serveOrder);

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });


  useEffect(() => {
    if (!svLoaded) dispatch(GetServeOrderAll());
  }, [svLoaded,dispatch]);

  const {
    serveorderDetail,
  } = useAppSelector((state) => state.serveOrder);

  const [openOrder, setOpenOrder] = useState(false);
  const [serveoderId, setServeOrderId] = useState<string>("");
  /////hb
  useEffect(() => {
    dispatch(fetchServeOrderById(serveoderId));
    return () => {
      dispatch(resetDetailServe());
    };
  }, [serveorderDetail, serveoderId, dispatch]);


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
            await agent.ServeOrder.aginStatusOrder({id})
              dispatch(GetServeOrderAll())
            
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
            await agent.ServeOrder.SuccessStatusOrder({id})
              dispatch(GetServeOrderAll())
            
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
            await agent.ServeOrder.cancelStatusOrder({id})
              dispatch(GetServeOrderAll())
            
          }
        );
      }
    });
  };

  const producttest = serveorderDetail?.orderItem.map((data) => {
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
          <p className="fw-normal mb-1">{data.serveName}</p>
        </td>

        <td className="md-2">{data.productPrice} บาท</td>
        {/* <td>{products.stock} ชิ้น</td> */}
        <td className="md-2">{data.sumAmountPrice} </td>
        <td>
          {moment
            .utc(data.checkIn)
            .tz("Asia/Bangkok")
            // .format("DD-MM-YYYY HH:mm:ss"
            .format("DD-MM-YYYY HH:mm")}{" "}

        </td>
      </tr>
    );
  });

  return (
    <LayoutAdmin>
                   
      <table 
      className="table align-middle mb-0 bg-white"
      ref={componentRef}
      >
    <thead>
    <h3>รายการบริการเสริม</h3>
            {/* <Button
              onClick={() => {window.location.replace("/createserve")}}
              style={{ margin: "10px", right: "10px" }}
            >
              <AddBusinessIcon /> เพิ่มรายการ
            </Button> */}
            <Button
          // onClick={() => {window.location.replace("/createacmd")}}
          // onClick={handlePrint}
          style={{ margin: "10px", right: "10px" }}
          onClick={handlePrint}

        >
          <PrinterOutlined /> Print
        </Button>
        <hr />
      <tr>
        {/* <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th> */}
      </tr>
    </thead>
    <tbody>
      {sv?.map((data) => {
        return (
          <tr key={data.id}>
            <th scope="row">{data.name}</th>
            <th scope="row">{data.amount} คน</th>

            <td>
              {data.image ? (
                <img
                  src={data.image}
                  style={{ height: "200px" ,width:"250px" }}
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
            <td>{data.status == PaymentStatus.WorkInProgress ? (<>ยังไม่ชำระ</>):data.status == PaymentStatus.WaitingForCheck ?(<>รอตรวจสอบ</>):data.status == PaymentStatus.SuccessfulTransaction ?(<>ชำระเรียบร้อย</>):<>ยกเลิกแล้ว</>}</td>
            <td>
                  <Button onClick={() => {
                    setServeOrderId(data.id);
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
                setServeOrderId("");
              }}
              onCancel={() => {
                setOpenOrder(false);
                setServeOrderId("");
              }}
              width={1000}
            >
              {serveorderDetail ? (
                <>
                  <p>id : {serveorderDetail?.id}</p>
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
                    {serveorderDetail?.payimage ? (
                      <img width={300} height={300} src={serveorderDetail?.payimage} />
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

  )
  
}

export default ServeOrderList