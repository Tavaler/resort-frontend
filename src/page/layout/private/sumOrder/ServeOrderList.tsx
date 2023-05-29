import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/configureStore';
import LayoutAdmin from '../admin/LayoutAdmin';
import { PaymentStatus } from '../../../../app/models/HBOrder';
import { Button } from 'antd';
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { PrinterOutlined } from '@ant-design/icons';
import { GetServeOrderAll } from '../../../../app/store/serveOrderSlice';


function ServeOrderList() {
    // const { hborder ,} = useHBorder();
//   const { order } = useOrder();
  // const { account } = useAppSelector((state) => state.account);

  const dispatch = useAppDispatch();
  const { svLoaded ,sv } = useAppSelector((state) => state.serveOrder);


  // const { productsLoaded, fds } = useAppSelector((state) => state.menu);
  
  // useEffect(() => {
  //   if (!productsLoaded) dispatch(GetMenuAll());
  // }, [productsLoaded, dispatch]);

  // console.log(hb)
  useEffect(() => {
    if (!svLoaded) dispatch(GetServeOrderAll());
  }, [svLoaded,dispatch]);

  return (
    <LayoutAdmin>
                   
      <table 
      className="table align-middle mb-0 bg-white"
      >
    <thead>
    <h3>รายการบริการเสริม</h3>
            <Button
              onClick={() => {window.location.replace("/createserve")}}
              style={{ margin: "10px", right: "10px" }}
            >
              <AddBusinessIcon /> เพิ่มรายการ
            </Button>
            <Button
          // onClick={() => {window.location.replace("/createacmd")}}
          // onClick={handlePrint}
          style={{ margin: "10px", right: "10px" }}
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
            <td>{data.status == PaymentStatus.WorkInProgress ? (<>ยังไม่ชำระ</>):data.status == PaymentStatus.WaitingForCheck ?(<>ชำระเรียบร้อย</>):(<>รอตรวจสอบ</>)}</td>
            <td>
              <Button>รายระเอียด</Button>
              <br/>
              <Button>ยืนยัน</Button>
              <br/>

            </td>
          </tr>
        );
      })}
    </tbody>
  </table>

    </LayoutAdmin>

  )
  
}

export default ServeOrderList