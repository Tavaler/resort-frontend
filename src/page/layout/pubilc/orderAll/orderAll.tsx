import { Button, Collapse, Modal } from "antd";
import { useEffect, useState } from "react";
import { FileAddOutlined, FileTextOutlined } from "@ant-design/icons";
import useHBorder from "../../../../app/hook/useHBorder";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import useOrder from "../../../../app/hook/useOrder";
import { PaymentStatus } from "../../../../app/models/HBOrder";
import useServeorder from "../../../../app/hook/useServeOrder";
import AddImgHbOrder from "./AddImgHbOrder";
// import { useNavigate } from "react-router-dom";
import Item from "antd/es/descriptions/Item";
import moment from "moment-timezone";
import {
  fetchHBOrderById,
  fetchHBOrderByIdAccount,
  resetDetailHB,
} from "../../../../app/store/hbOrderSlice";
import AddImgOrder from "./AddImgOrder";
import AddImgServeOrder from "./AddImgServeOrder";
import { fetchOrderById, fetchOrderByIdAccount, resetOrderDetail } from "../../../../app/store/orderSlice";
import { fetchServeOrderById, fetchServeOrderByIdAccount, resetServeOrderDetail } from "../../../../app/store/serveOrderSlice";
import Swal from "sweetalert2";
import agent from "../../../../app/api/agent";


function orderAll() {
  const { account } = JSON.parse(localStorage.getItem("account")!);
  const { Panel } = Collapse;
  const { hborder } = useHBorder();
  const { order } = useOrder();
  const {
    serveorder,
  } = useServeorder();

  const {
    // hborderdetailLoaded,
    orderDetail,
  } = useAppSelector((state) => state.order);

  const {
    // hborderdetailLoaded,
    hborderdetail,
  } = useAppSelector((state) => state.hbOrder);

  const {
    serveorderDetail
  } = useAppSelector((state) => state.serveOrder);

  

  const dispatch = useAppDispatch();
  


  const [openOrder, setOpenOrder] = useState(false);
  const [hboderId, setHBOrderId] = useState<string>("");

  const [openOrder2, setOpenOrder2] = useState(false);
  const [oderId, setOrderId] = useState<string>("");

  const [openOrder3, setOpenOrder3] = useState(false);
  const [serveoderId, setServeOrderId] = useState<string>("");

/////hb
  useEffect(() => {
    dispatch(fetchHBOrderById(hboderId));
    return () => {
      dispatch(resetDetailHB());
    };
  }, [hborderdetail, hboderId, dispatch]);

  ////order
  useEffect(() => {
    dispatch(fetchOrderById(oderId));
    return () => {
      dispatch(resetOrderDetail());
    };
  }, [orderDetail, oderId, dispatch]);

  //////serve
  useEffect(() => {
    dispatch(fetchServeOrderById(serveoderId));
    return () => {
      dispatch(resetServeOrderDetail());
    };
  }, [serveorderDetail, serveoderId, dispatch]);


  const [id, setId] = useState<string>("");
  const [id2, setId2] = useState<string>("");
  const [id3, setId3] = useState<string>("");


  const onClickOpenPaymentForm = (id: any) => {
    setOpenModalTransferPayment(true);
    setId(id);
  };

  const onClickOpenPaymentForm2 = (id2: any) => {
    setOpenModalTransferPayment2(true);
    setId2(id2);
  };

  const onClickOpenPaymentForm3 = (id3: any) => {
    setOpenModalTransferPayment3(true);
    setId3(id3);
  };


  const [openModalTransferPayment, setOpenModalTransferPayment] =
    useState<boolean>(false);
  
  const [openModalTransferPayment2, setOpenModalTransferPayment2] =
    useState<boolean>(false);

  const [openModalTransferPayment3, setOpenModalTransferPayment3] =
    useState<boolean>(false);

  // const ImgNoDtata = <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</a>

  const text = `
  ไม่มีรายการที่คุณได้ใช้ในขณะนี้.
`;

  const HBtest = hborder?.map((data) => {
    if (data.status != PaymentStatus.CancelTransaction)
      return (
        <>
          <tr key={data.id}>
            <th scope="row">{data.name}</th>
            <th scope="row">{data.sumDate} วัน</th>

            <td>
              {data.image ? (
                <img src={data.image} style={{ height: "200px" }} alt="" />
              ) : (
                <img
                  src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                  style={{ height: "20rem" }}
                  alt=""
                />
              )}
            </td>
            <td>
              {/* {data.status} */}
              {
                // products?.isUsed == "1" ?
                data?.status == PaymentStatus.WorkInProgress ? (
                  <Button danger>ยังไม่ได้ชำระ</Button>
                ) : data?.status == PaymentStatus.WaitingForCheck ? (
                  <Button
                    type="primary"
                    style={{
                      color: "#ffc107",
                      borderColor: "#ffc107",
                    }}
                    ghost
                  >
                    รอตรวจสอบ
                  </Button>
                ) : data?.status == PaymentStatus.SuccessfulTransaction ? (
                  <Button
                    type="primary"
                    style={{
                      color: "#198754",
                      borderColor: "#198754",
                    }}
                    ghost
                  >
                    ชำระเงินแล้ว
                  </Button>
                ) : (
                  // data?.status == PaymentStatus.CancelTransaction ?
                  <Button
                    type="primary"
                    style={{
                      color: "#6c757d",
                      borderColor: "#6c757d",
                    }}
                    ghost
                  >
                    ยกเลิกรายการแล้ว
                  </Button>
                )
              }
            </td>
            <td>
              {data?.status == PaymentStatus.CancelTransaction ? ( /// ยกเลิก
                <Button
                  type="primary"
                  ghost
                  // onClick={() => navigate(`/ordetail/${data.id}`)}
                  onClick={() => {
                    setHBOrderId(data.id);
                    setOpenOrder(true);
                  }}
                >
                  {/* href={`/menudetail/${menu.fdId}`} */}
                  <FileTextOutlined />
                </Button>
              ) : data?.status == PaymentStatus.WaitingForCheck ? ( ///รอเช็ค
                <>
                  <Button
                    type="primary"
                    ghost
                    ///detail
                    onClick={() => {
                      setHBOrderId(data.id);
                      console.log(data.id);
                      setOpenOrder(true);
                    }}
                  >
                    <FileAddOutlined />
                  </Button>

                  <Button onClick={() => CancelHB(data.id)} danger>
                    <FileTextOutlined />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="primary"
                    ghost
                    ///detail
                    // onClick={() => navigate(`/ordetail/${data.id}`)}
                    onClick={() => {
                      setHBOrderId(data.id);
                      console.log(data.id);
                      setOpenOrder(true);
                    }}
                  >
                    <FileTextOutlined />
                  </Button>
                  <Button
                    className=" btn-outline-success"
                    // type=""
                    style={
                      {
                        // color: "greenyellow",
                        // borderColor: "greenyellow",
                      }
                    }
                    ///addimage
                    onClick={() => {
                      onClickOpenPaymentForm(data.id);
                    }}
                  >
                    <FileAddOutlined />
                  </Button>
                  <Button onClick={() => CancelHB(data.id)} danger>
                    <FileTextOutlined />
                  </Button>
                </>
              )}
            </td>
          </tr>
        </>
      );
      
    else <p>{text}</p>;
  });


  const Ordertest = order?.map((data) => {
    // console.log(data.delstatus)
    if (data.status != PaymentStatus.CancelTransaction)
    return (
      <tr key={data.id}>
        {/* <th scope="row">{data.productName}</th> */}
        <th scope="row">
          {moment
            .utc(data.createDate)
            .tz("Asia/Bangkok")
            // .format("DD-MM-YYYY HH:mm:ss"
            .format("DD-MM-YYYY")}{" "}
        </th>
        <th scope="row">{data.productItemAmount} รายการ</th>

        <td>
          {data.productImage ? (
            <img src={data.productImage} style={{ height: "200px" }} alt="" />
          ) : (
            <img
              src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
              style={{ height: "20rem" }}
              alt=""
            />
          )}
        </td>
        <td>
          {/* {data.status} */}
          {
            // products?.isUsed == "1" ?
            data.delStatus == "0" ? (
              <Button type="primary" ghost style={{ color: "#1C8EF9 " }}>
                กำลังจัดเตรียม
              </Button>
            ) : data.delStatus == "1" ? (
              <Button
                type="primary"
                style={{
                  color: "#ffc107",
                  borderColor: "#ffc107",
                }}
                ghost
              >
                กำลังจัดส่ง
              </Button>
            ) : data.delStatus == "2" ? (
              <Button
                type="primary"
                style={{
                  color: "#198754",
                  borderColor: "#198754",
                }}
                ghost
              >
                จัดส่งสำเร็จ
              </Button>
            ) : (
              <Button
                type="primary"
                style={{
                  color: "#6c757d",
                  borderColor: "#6c757d",
                }}
                ghost
              >
                เกิดข้อผิดพลาด
              </Button>
            )
          }
        </td>
        <td>
          {/* {data.status} */}
          {
            // products?.isUsed == "1" ?
            data?.status == PaymentStatus.WorkInProgress ? (
              <Button danger>ยังไม่ได้ชำระ</Button>
            ) : data?.status == PaymentStatus.WaitingForCheck ? (
              <Button
                type="primary"
                style={{
                  color: "#ffc107",
                  borderColor: "#ffc107",
                }}
                ghost
              >
                รอตรวจสอบ
              </Button>
            ) : data?.status == PaymentStatus.SuccessfulTransaction ? (
              <Button
                type="primary"
                style={{
                  color: "#198754",
                  borderColor: "#198754",
                }}
                ghost
              >
                ชำระเงินแล้ว
              </Button>
            ) : (
              // data?.status == PaymentStatus.CancelTransaction ?
              <Button
                type="primary"
                style={{
                  color: "#6c757d",
                  borderColor: "#6c757d",
                }}
                ghost
              >
                ยกเลิกรายการแล้ว
              </Button>
            )
          }
        </td>
        

        <td>
          {data?.status == PaymentStatus.CancelTransaction ? ( /// ยกเลิก
            <Button
              type="primary"
              ghost
              // onClick={() => navigate(`/ordetail/${data.id}`)}
              onClick={() => {
                setOrderId(data.id);
                setOpenOrder2(true);
              }}
            >
              {/* href={`/menudetail/${menu.fdId}`} */}
              <FileTextOutlined />
            </Button>
          ) : data?.status == PaymentStatus.WaitingForCheck ? ( ///รอเช็ค
            <>
              <Button
                type="primary"
                ghost
                ///detail
                onClick={() => {
                  console.log(data.id);
                  setOrderId(data.id);
                  setOpenOrder2(true);
                }}
              >
                <FileTextOutlined />
              </Button>

              <Button onClick={() => CancelOrder(data.id)} danger>
                <FileTextOutlined />
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                ghost
                ///detail
                // onClick={() => navigate(`/ordetail/${data.id}`)}
                onClick={() => {
                  console.log(data.id);
                  setOrderId(data.id);
                  setOpenOrder2(true);
                }}
              >
                <FileTextOutlined />
              </Button>
              <Button
                type="primary"
                ///addimage
                onClick={() => {
                  onClickOpenPaymentForm2(data.id);
                }}
              >
                <FileTextOutlined />
              </Button>
              <Button
              onClick={() => CancelOrder(data.id)}
              danger>
                <FileTextOutlined />
              </Button>
            </>
          )}
        </td>
        {/* <td>@mdo</td> */}
      </tr>
    );
    else <p>{text}</p>;

  });
            
  const Servertest =               
    serveorder?.map((data) => {
    // if(data.status == 0)
    if (data.status != PaymentStatus.CancelTransaction)
    return (
      <tr key={data.id}>
        <th scope="row">{data.name}</th>
        <th scope="row">{data.amount} คน</th>

        <td>
          {data.image ? (
            <img
              src={data.image}
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
        </td>
        <td>
          <td>
            {/* {data.status} */}
            {
              // products?.isUsed == "1" ?
              data?.status == PaymentStatus.WorkInProgress ? (
                <Button danger>ยังไม่ได้ชำระ</Button>
              ) : data?.status == PaymentStatus.WaitingForCheck ? (
                <Button
                  type="primary"
                  style={{
                    color: "#ffc107",
                    borderColor: "#ffc107",
                  }}
                  ghost
                >
                  รอตรวจสอบ
                </Button>
              ) : data?.status ==
                PaymentStatus.SuccessfulTransaction ? (
                <Button
                  type="primary"
                  style={{
                    color: "#198754",
                    borderColor: "#198754",
                  }}
                  ghost
                >
                  ชำระเงินแล้ว
                </Button>
              ) : (
                // data?.status == PaymentStatus.CancelTransaction ?
                <Button
                  type="primary"
                  style={{
                    color: "#6c757d",
                    borderColor: "#6c757d",
                  }}
                  ghost
                >
                  ยกเลิกรายการแล้ว
                </Button>
              )
            }
          </td>
        </td>
        <td>
          {data?.status == PaymentStatus.CancelTransaction ? ( /// ยกเลิก
            <Button
              type="primary"
              ghost
              // onClick={() => navigate(`/ordetail/${data.id}`)}
              onClick={() => {
                setServeOrderId(data.id);
                setOpenOrder3(true);
              }}
            >
              {/* href={`/menudetail/${menu.fdId}`} */}
              <FileTextOutlined />
            </Button>
          ) : data?.status == PaymentStatus.WaitingForCheck ? ( ///รอเช็ค
            <>
              <Button
                type="primary"
                ghost
                ///detail
                onClick={() => {
                  console.log(data.id);
                  setServeOrderId(data.id);
                  setOpenOrder3(true);
                }}
              >
                <FileTextOutlined />
              </Button>

              <Button onClick={() => CancelServer(data.id)} danger>
                <FileTextOutlined />
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                ghost
                ///detail
                // onClick={() => navigate(`/ordetail/${data.id}`)}
                onClick={() => {
                  console.log(data.id);
                  setServeOrderId(data.id);
                  setOpenOrder3(true);
                }}
              >
                <FileTextOutlined />
              </Button>
              <Button
                type="primary"
                ///addimage
                onClick={() => {
                  onClickOpenPaymentForm3(data.id);
                }}
              >
                <FileTextOutlined />
              </Button>
              <Button onClick={() => CancelServer(data.id)} danger>
                <FileTextOutlined />
              </Button>
            </>
          )}
        </td>
      </tr>
    );
    
  });

  const onChange = (key: string | string[]) => {
    console.log(key);
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

  const ordertest = orderDetail?.orderItem.map((data) => {
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
        <td className="md-2">{data.categoryName} </td>
        <td>
        {data.amount}
          {/* {moment
            .utc(data.checkIn)
            .tz("Asia/Bangkok")
            // .format("DD-MM-YYYY HH:mm:ss"
            .format("DD-MM-YYYY")}{" "}
          -
          {moment
            .utc(data.checkOut)
            .tz("Asia/Bangkok")
            // .format("DD-MM-YYYY HH:mm:ss"
            .format("DD-MM-YYYY")} */}
        </td>
      </tr>
    );
  });

  const servertest = serveorderDetail?.orderItem.map((data) => {
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

        <td className="md-2">{data.sumAmountPrice} บาท</td>
        {/* <td>{products.stock} ชิ้น</td> */}
        <td className="md-2">{data.amount} </td>
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
            console.log(account?.accountId)
            await agent.HBOrder.cancelStatusOrder({id})
              dispatch(fetchHBOrderByIdAccount(account?.accountId))
            
          }
        );
      }
    });
  };

  const CancelOrder = (id: any) => {
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
            console.log(account?.accountId)
            await agent.Order.cancelStatusOrder({id})
              dispatch(fetchOrderByIdAccount(account?.accountId))
            
          }
        );
      }
    });
  };

  const CancelServer = (id: any) => {
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
            console.log(account?.accountId)
            await agent.ServeOrder.cancelStatusOrder({id})
              dispatch(fetchServeOrderByIdAccount(account?.accountId))
            
          }
        );
      }
    });
  };
  



  // const CancelHB = async (id: any) => {
  //   console.log("id", id);
  //   console.log("account", account?.accountId);

    

  //   let result = await agent.HBOrder.cancelStatusOrder({id});
  //   // let result = await dispatch(AccmdChangeStatus("b4c8d7f6a1da48488b93f00c"))
  //   console.log(result);
  //   dispatch(fetchHBOrderByIdAccount(account?.accountId))
  //   // if (!state) result = await dispatch(CreateMenu(data)).unwrap();

  //   if (result.statusCode == 200) {
  //     swal({
  //       title: "ยกเลิกสำเร็จ",
  //       icon: "success",
  //       buttons: [false, "ตกลง"],
  //     })
  //       .then(() => navigate("/profile"))
  //       .then(() =>     dispatch(fetchHBOrderByIdAccount(account?.accountId))
  //       );
  //   } else {
  //     swal({
  //       title: result.message,
  //       icon: "warning",
  //       buttons: [false, "ตกลง"],
  //     });
  //   }
  // };


  return (
    // <>

    <Collapse
      style={{ backgroundColor: "#fff" }}
      defaultActiveKey={["1"]}
      onChange={onChange}
    >
      <Panel
        style={{ backgroundColor: "gray" }}
        header="รายการการจองที่พัก"
        key="1"
      >
        {
          <table className="table table-borderless">
            <thead>
              <tr>
                {/* <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>{!hborder ? <>{text}</> : <>{HBtest}</>}</tbody>
          </table>
        }

        <AddImgHbOrder
          openModal={openModalTransferPayment}
          setOpenModal={setOpenModalTransferPayment}
          id={id}
          setOrderId={setId}
        />

        <AddImgOrder
          openModal={openModalTransferPayment2}
          setOpenModal={setOpenModalTransferPayment2}
          id={id2}
          setOrderId={setId2}
        />

        <AddImgServeOrder
          openModal={openModalTransferPayment3}
          setOpenModal={setOpenModalTransferPayment3}
          id={id3}
          setOrderId={setId3}
        />

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

        <Modal
          title="รายระเอียดการสั่งอาหาร"
          centered
          open={openOrder2}
          onOk={() => {
            setOpenOrder2(false);
            setOrderId("");
          }}
          onCancel={() => {
            setOpenOrder2(false);
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
                <tbody>{ordertest}</tbody>
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

        <Modal
          title="รายระเอียดการขอใช้บริการ"
          centered
          open={openOrder3}
          onOk={() => {
            setOpenOrder3(false);
            setServeOrderId("");
          }}
          onCancel={() => {
            setOpenOrder3(false);
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
                <tbody>{servertest}</tbody>
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


      </Panel>

      <Panel
        style={{ backgroundColor: "gray" }}
        header="รายการการสั่งอาหาร"
        key="2"
      >
        {
          <table className="table table-borderless">
            <thead>
              <tr>
                {/* <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>{Ordertest}</tbody>
          </table>
        }
      </Panel>
      <Panel
        style={{ backgroundColor: "gray" }}
        header="รายการการใช้บริการ"
        key="3"
      >
        {
          <table className="table table-borderless">
            <thead>
              <tr>
                {/* <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              {Servertest}
              
            </tbody>
          </table>
        }
      </Panel>

      {/* <div className="card mb-4">
        <div className=" p-3">ยอดรวมรายการทั้งหมด :</div>
        <div className="card-body p-4 d-flex flex-row">
          <div className="form-outline flex-fill">
            <div className="comment-text active w-100">
              <section className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />

                  <p>กดเพื่อเพิ่ม หรือว่างรูปไว้ที่นี่</p>
                </div>
                <aside style={thumbsContainer}>{thumbs}</aside>
              </section>
            </div>
          </div>
        </div>

        <Button htmlType="submit" className="col-md-12 btn btn-warning " block>
          ชำระเงิน
        </Button>
      </div> */}
    </Collapse>
  );
}

export default orderAll;
