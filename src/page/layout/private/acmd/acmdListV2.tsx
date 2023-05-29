import { useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";

import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// import LayoutAdmin from "../PageAdmin/LayoutAdmin";
import { Button } from "antd";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import swal from "sweetalert";

import agent from "../../../../app/api/agent";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../admin/LayoutAdmin";
import {
  DeletAcmd,
  GetAcmdAll,
} from "../../../../app/store/accommodationSlice";
import { useReactToPrint } from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

const AcmdListV2 = () => {
  const dispatch = useAppDispatch();
  const { acmdsLoaded, acmd } = useAppSelector((state) => state.acmd);
  console.log("acmd", acmd);

  useEffect(() => {
    if (!acmdsLoaded) dispatch(GetAcmdAll());
  }, [acmdsLoaded, dispatch]);

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });

  // const dispatch = useAppDispatch();
  //   const [typeChart, setTypeChart] = useState<string>("doughnut");
  const navigate = useNavigate();
  //   const [perspective, setPerspective] = useState<string>("2d");
  // const { productsLoaded, fds } = useAppSelector((state) => state.menu);
  // useEffect(() => {
  //   if (!productsLoaded) dispatch(GetMenuAll());
  // }, [productsLoaded, dispatch]);

  const ChangeStatus = async (id: any) => {
    console.log("id", id);

    let result = await agent.Accommodation.changeStatus(id);
    // let result = await dispatch(AccmdChangeStatus("b4c8d7f6a1da48488b93f00c"))
    console.log(result.statusCode);
    dispatch(GetAcmdAll());
    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();

    if (result.statusCode == 200) {
      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      })
        .then(() => navigate("/acmdList"))
        .then(() => dispatch(GetAcmdAll()));
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };


  // async function onChangeNumberCartPlus(id: any) {
  //   console.log(id);
  //     await agent.Cart.ItemPlusCart({id})
  //   //dispatch(itemPlusCartAsync({id}));

  //   dispatch(fetchCartAsync(account?.accountId));
  // }

  const DeleteProduct = (id: any) => {
    Swal.fire({
      title: "แน่ใจนะว่าจะลบ",
      text: "จะไม่สามารถนำข้อมูลกลับมาได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ลบ!", "รายการดังกล่าวถูกลบแล้ว", "success").then(
          async () => {
            await dispatch(DeletAcmd(id)).then(() => dispatch(GetAcmdAll()));
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

  const producttest = acmd?.map((products) => {
    return (
      <tr key={products.accommodationId}>
        <td className="md-2">
          <div className="d-flex-order align-items-center">
            {products.accommodationImgs[0] ? (
              <img
                className="rounded-circle"
                src={
                  "https://localhost:5000/images/" +
                  products.accommodationImgs[0].image
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
        <td className="md-2">{products.accommodationType.name} </td>
        <td>
          {// products?.isUsed == "1" ?

          products?.isUsed == 1 ? (
            <Button
              onClick={() => ChangeStatus(products.accommodationId)}
              type="primary"
              ghost
            >
              ว่าง
            </Button>
          ) : (
            <Button
              onClick={() => ChangeStatus(products.accommodationId)}
              danger
            >
              ไม่ว่าง
            </Button>
          )}
        </td>
        <td className="md-2">
          <Button
            onClick={() => navigate("/editacmd", { state: products })}
            className=" btn-sm btn-rounded"
          >
            <EditIcon />
          </Button>

          <Button
            style={{ left: "5px" }}
            onClick={() =>
              navigate(`/AddImageAcmd/${products.accommodationId}`)
            }
            className=" btn-sm btn-rounded"
          >
            <AddPhotoAlternateIcon />
          </Button>

          {/* <Button style={{ left: "10px" }} className=" btn-sm btn-rounded">
            <MoreHorizIcon />
          </Button> */}
          <Button
            onClick={() => {
              DeleteProduct(products.accommodationId);
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
          <h3>รายการที่พัก</h3>
          <Button
            onClick={() => {
              window.location.replace("/createacmd");
            }}
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
            <th>ที่พัก</th>
            <th>ชื่อที่พัก</th>
            <th>ราคา</th>
            {/* <th>จำนวน</th> */}
            <th>ประเภทที่พัก</th>
            <th>สถานะ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>{producttest}</tbody>
      </table>
      <hr />
    </LayoutAdmin>
  );
};

export default AcmdListV2;
