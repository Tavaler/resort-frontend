import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import { GetOrderAll } from "../../../../app/store/orderSlice";
import LayoutAdmin from "../admin/LayoutAdmin";
import { PaymentStatus } from "../../../../app/models/HBOrder";
import { Button } from "antd";
import { PrinterOutlined } from "@ant-design/icons";

function OrderList() {
  // const { hborder ,} = useHBorder();
  //   const { order } = useOrder();
  // const { account } = useAppSelector((state) => state.account);

  const dispatch = useAppDispatch();
  const { orderAllLoaded, orderAll } = useAppSelector((state) => state.order);

  console.log(orderAll);
  useEffect(() => {
    if (!orderAllLoaded) dispatch(GetOrderAll());
  }, [orderAllLoaded, dispatch]);

  return (
    <LayoutAdmin>
      <table 
      // ref={componentRef}
      //  className="table table-borderless"
       className="table align-middle mb-0 bg-white">
        <thead>
          <h3>รายการบริการอาหาร</h3>

          <Button
            // onClick={() => {window.location.replace("/createacmd")}}
            // onClick={handlePrint}
            style={{ margin: "10px", right: "10px" }}
          >
            <PrinterOutlined /> Print
          </Button>
          <tr style={{backgroundColor:"#dff2"}} color="#dff2">
            <th scope="col">#</th>
            <th scope="col">จำนวนรายการ</th>
            <th scope="col">รูป</th>
            <th scope="col">ราคารวม</th>
            
            <th scope="col">สถานะการชำระ</th>
            <th color="red" scope="col">การจัดการ</th>


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
                <th scope="row">{data.total} บาท</th>
                <td>
                  {data.status == PaymentStatus.WorkInProgress ? (
                    <>ยังไม่ชำระ</>
                  ) : data.status == PaymentStatus.WaitingForCheck ? (
                    <>ชำระเรียบร้อย</>
                  ) : (
                    <>รอตรวจสอบ</>
                  )}
                </td>
                <td>
                  <Button>รายระเอียด</Button>
                  <br />
                  <Button>ยืนยัน</Button>
                  <br />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </LayoutAdmin>
  );
}

export default OrderList;
