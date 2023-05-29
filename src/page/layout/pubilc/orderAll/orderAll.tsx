import { Button, Collapse, Modal } from "antd";
import { useEffect, useState } from "react";
import { FileTextOutlined } from "@ant-design/icons";
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
  resetDetailHB,
} from "../../../../app/store/hbOrderSlice";

// import "../orderAll/orderAllCss.css"

function orderAll() {
  const { Panel } = Collapse;
  const { hborder } = useHBorder();
  const { order } = useOrder();
  const { serveorder,
    //  sv
     } = useServeorder();
  // console.log(sv)
  // const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { 
    // hborderdetailLoaded,
     hborderdetail } = useAppSelector(
    (state) => state.hbOrder
  );

  // console.log("detailfd", hborderdetail);
  // const [open, setOpen] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [hboderId, setHBOrderId] = useState<string>("");

  // const [openModalHB, setOpenModalHB] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchHBOrderById(hboderId));
    return () => {
      dispatch(resetDetailHB());
    };
  }, [hborderdetail, hboderId, dispatch]);

  // const { account } = useAppSelector((state) => state.account);

  const [id, setId] = useState<string>("");

  const onClickOpenPaymentForm = (id: any) => {
    setOpenModalTransferPayment(true);
    setId(id);
  };
  // console.log("hborder", hborder);

  const [openModalTransferPayment, setOpenModalTransferPayment] = useState<
    boolean
  >(false);

  // const ImgNoDtata = <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</a>

  const text = `
  ไม่มีรายการที่คุณได้ใช้ในขณะนี้.
`;
console.log(serveorder)

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
            <tbody>
              {hborder?.map((data) => {
                if (data.status != PaymentStatus.CancelTransaction)
                  return (
                    <>
                      <tr key={data.id}>
                        <th scope="row">{data.name}</th>
                        <th scope="row">{data.sumDate} วัน</th>

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
                          {/* {data.status} */}
                          {// products?.isUsed == "1" ?
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
                          )}
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
                                <FileTextOutlined />
                              </Button>

                              <Button danger>
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
                                type="primary"
                                ///addimage
                                onClick={() => {
                                  onClickOpenPaymentForm(data.id);
                                }}
                              >
                                <FileTextOutlined />
                              </Button>
                              <Button danger>
                                <FileTextOutlined />
                              </Button>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                else <p>{text}</p>;
              })
              }
            </tbody>
          </table>
        }

        <AddImgHbOrder
          openModal={openModalTransferPayment}
          setOpenModal={setOpenModalTransferPayment}
          id={id}
          setOrderId={setId}
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
                <img width={300} height={300} src={hborderdetail?.payimage} />
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
            <tbody>
              {order?.map((data) => {
                if (data.status == 0)
                  return (
                    <tr key={data.id}>
                      <th scope="row">{data.productName}</th>
                      <th scope="row">x{data.productItemAmount}</th>

                      <td>
                        {data.productImage ? (
                          <img
                            src={data.productImage}
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
                          {/* {data.status} */}
                          {// products?.isUsed == "1" ?
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
                          )}
                        </td>
                      <td>
                          {/* {data.status} */}
                          {// products?.isUsed == "1" ?
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
                          )}
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
                                <FileTextOutlined />
                              </Button>

                              <Button danger>
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
                                type="primary"
                                ///addimage
                                onClick={() => {
                                  onClickOpenPaymentForm(data.id);
                                }}
                              >
                                <FileTextOutlined />
                              </Button>
                              <Button danger>
                                <FileTextOutlined />
                              </Button>
                            </>
                          )}
                        </td>
                      <td>@mdo</td>
                    </tr>
                  );
              })}
            </tbody>
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
              {serveorder?.map((data) => {
                // if(data.status == 0)
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
                          {// products?.isUsed == "1" ?
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
                          )}
                        </td>
                    </td>
                    <td>@mdo</td>
                  </tr>
                );
              })}
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
