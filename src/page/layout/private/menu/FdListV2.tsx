import { useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../app/store/configureStore';

import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { DeletFd, GetMenuAll } from '../../../../app/store/menuSlice';
// import LayoutAdmin from "../PageAdmin/LayoutAdmin";
import { Button } from "antd";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";



import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../admin/LayoutAdmin";
import PrinterOutlined from "@ant-design/icons/lib/icons/PrinterOutlined";
import { useReactToPrint } from "react-to-print";
import { URLSever } from "../../../../util/util";

const FdListV2 = () => {
  const dispatch = useAppDispatch();
//   const [typeChart, setTypeChart] = useState<string>("doughnut");
  const navigate = useNavigate()
//   const [perspective, setPerspective] = useState<string>("2d");
  const { productsLoaded, fds } = useAppSelector((state) => state.menu);
  
  useEffect(() => {
    if (!productsLoaded) dispatch(GetMenuAll());
  }, [productsLoaded, dispatch]);
  
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });
  
  const DeleteProduct = (id: any) => {
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
            await dispatch(DeletFd(id)).then(() =>
              dispatch(GetMenuAll())
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




  const producttest = fds?.map(products => {
    return (
      <tr key={products.fdId}>
        <td className="md-2">
          <div className="d-flex-order align-items-center">
            
              {products.fdImgs[0] ?  <img className="rounded-circle" 
              src={
                // "https://localhost:5000/images/"
                URLSever
              +products.fdImgs[0].fdImgName} style={{ width: "45px", height: "45px" }} alt="" /> : <img className="rounded-circle" src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" style={{ width: "45px", height: "45px" }} alt="" />}
              
            {/* <div className="ms-3">
              <p className="fw-bold mb-1">รหัสสิค้า: {products.fdId}</p>
              <p className="text-muted mb-0"></p>
            </div> */}
          </div>
        </td>
        <td className="md-2">
          <p className="fw-normal mb-1">{products.fdName}</p>
        </td>
        {/* <td>
          <span className="badge badge-success rounded-pill d-inline">
            Active
          </span>
        </td> */}
        <td className="md-2">{products.fdPrice} บาท</td>
        {/* <td>{products.stock} ชิ้น</td> */}
        <td className="md-2">{products.fdCategory.name} </td>
        {/* <td>{products.districtName} </td> */}
        <td className="md-2">
          <Button onClick={()=>navigate("/editmenu",{state: products})} className=" btn-sm btn-rounded">
            <EditIcon />
          </Button>

          <Button
            style={{ left: "5px" }}
           onClick={()=>navigate(`/AddImageFd/${products.fdId}`)} className=" btn-sm btn-rounded">
            <AddPhotoAlternateIcon />
          </Button>
          
          {/* <Button style={{ left: "10px" }} className=" btn-sm btn-rounded">
            <MoreHorizIcon />
          </Button> */}
          <Button
            onClick={() => {
              DeleteProduct(products.fdId);
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
          <h3>รายการสินค้า</h3>
          <Button
            onClick={() => {window.location.replace("/createmenu")}}
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
            <th>สินค้า</th>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            {/* <th>จำนวน</th> */}
            <th>ประเภทสินค้า</th>
            {/* <th>ตำบล</th> */}
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>{producttest}</tbody>
      </table>
      <hr />

    </LayoutAdmin>
   
  );
};

export default FdListV2;