import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/store/configureStore";
import {
  fetchHBOrderById,
  resetDetailHB,
} from "../../../app/store/hbOrderSlice";
// import moment from 'moment';
import moment from "moment-timezone";
import Item from "antd/es/list/Item";

const Test = () => {
  const { id } = useParams<{ id: any }>();
  const dispatch = useAppDispatch();
  const {  hborderdetail } = useAppSelector(
    (state) => state.hbOrder
  );

  console.log("detailfd", hborderdetail);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // if (item) setAmount(1);
    if (!hborderdetail) dispatch(fetchHBOrderById(id));
    return () => {
      dispatch(resetDetailHB());
    };
  }, [hborderdetail, id, dispatch]);

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
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="รายระเอียดการจอง"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>id : {hborderdetail?.id}</p>
        {/* <p>some contents...</p> */}
        
        <table
          // ref={componentRef}
          className="table align-middle mb-0  "
        >
          <thead >
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
        <Item className="table align-middle mb-0 ">
          <h3>หลักฐานการชำระ</h3>
          <img src={hborderdetail?.payimage} />
        </Item>
        

      </Modal>
    </>
  );
};

export default Test;
