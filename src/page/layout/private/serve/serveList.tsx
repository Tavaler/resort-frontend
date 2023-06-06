import { useEffect, useRef } from 'react'
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../../app/store/configureStore';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import LayoutAdmin from '../admin/LayoutAdmin';

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { DeletServe, GetServeAll } from '../../../../app/store/serveSlice';
import { useReactToPrint } from 'react-to-print';
import { PrinterOutlined } from '@ant-design/icons';
import { URLSever } from '../../../../util/util';

function ServeListV2() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  // const { productsLoaded, fds } = useAppSelector((state) => state.menu);
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });

  const { serveLoaded, serve } = useAppSelector((state) => state.serve);
    console.log("serve", serve);
    useEffect(() => {
      if (!serveLoaded) dispatch(GetServeAll());
    }, [serveLoaded, dispatch]);

  const Delete = (id: any) => {
    Swal.fire({
      title: "ยืนยันที่จะลบหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ลบแล้ว!", "success").then(
          async () => {
            await dispatch(DeletServe(id)).then(() =>
              dispatch(GetServeAll())
            );
          }
        );
      }
    });
  };

  // const DeleteProduct = (id: any) => {
  //   console.log("id",id)
  //   Swal.fire({
  //     title: 'ลบสินค้าหรือไม่?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     cancelButtonText: "ยกเลิก",
  //     confirmButtonText: 'ตกลง'
  //   }).then((result: any) => result.isConfirmed && dispatch(DeletFd(id)).then(()=>dispatch(GetMenuAll())))
  // };
  const producttest = serve?.map(products => {
    return (
      <tr key={products.serveId}>
        <td className="md-2">
          <div className="d-flex-order align-items-center">

              {products.serveImgs[0] ?  <img className="rounded-circle"
              src={
                // "https://localhost:5000/images/"
                URLSever
                +products.serveImgs[0].image} style={{ width: "45px", height: "45px" }} alt="" /> : <img className="rounded-circle" src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" style={{ width: "45px", height: "45px" }} alt="" />}

            {/* <div className="ms-3">
              <p className="fw-bold mb-1">รหัสสิค้า: {products.fdId}</p>
              <p className="text-muted mb-0"></p>
            </div> */}
          </div>
        </td>
        <td className="md-2">
          <p className="fw-normal mb-1">{products.name}</p>
        </td>
        {/* <td>
          <span className="badge badge-success rounded-pill d-inline">
            Active
          </span>
        </td> */}
        <td className="md-2">{products.price} บาท</td>
        {/* <td>{products.stock} ชิ้น</td> */}
        {/* <td className="md-2">{products.fdCategory.name} </td> */}
        {/* <td>{products.districtName} </td> */}
        <td className="md-2">
          <Button onClick={()=>navigate("/editserve",{state: products})} className=" btn-sm btn-rounded">
            <EditIcon />
          </Button>

          <Button
            style={{ left: "5px" }}
           onClick={()=>navigate(`/AddImageServe/${products.serveId}`)} className=" btn-sm btn-rounded">
            <AddPhotoAlternateIcon />
          </Button>

          {/* <Button style={{ left: "10px" }} className=" btn-sm btn-rounded">
            <MoreHorizIcon />
          </Button> */}
          <Button
            onClick={() => {
              Delete(products.serveId);
            }}
            style={{ left: "10px" }}
            className=" btn-sm btn-rounded"
          >
            <DeleteForeverIcon />
          </Button>


        </td>
      </tr>
    );
  });




  return (
    <LayoutAdmin>

              <table ref={componentRef} className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <h3>รายการบริการ</h3>
              <Button
                onClick={() => {window.location.replace("/createserve")}}
                style={{ margin: "10px", right: "10px" }}
              >
                <AddBusinessIcon /> เพิ่มรายการ
              </Button>
              <Button
            // onClick={() => {window.location.replace("/createacmd")}}
            onClick={handlePrint}
            style={{ margin: "10px", right: "10px" }}
          >
            <PrinterOutlined /> Print
          </Button>
              <tr>
                <th>บริการ</th>
                <th>ชื่อบริการ</th>
                <th>ราคา</th>
                {/* <th>จำนวน</th> */}
                {/* <th>ประเภทสินค้า</th> */}
                {/* <th>ตำบล</th> */}
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>{producttest}</tbody>
          </table>
          <hr />

        </LayoutAdmin>

      );
}

export default ServeListV2

