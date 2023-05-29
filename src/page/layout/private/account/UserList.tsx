import { useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";

import EditIcon from "@mui/icons-material/Edit";

// import LayoutAdmin from "../PageAdmin/LayoutAdmin";
import { Button } from "antd";

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
import { GetAll } from "../../../../app/store/accountSlice";
import { useReactToPrint } from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { userLoaded, user } = useAppSelector((state) => state.account);
  console.log("user", user);

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });

  useEffect(() => {
    if (!userLoaded) dispatch(GetAll());
  }, [userLoaded, dispatch]);

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
    dispatch(GetAll());
    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();

    if (result.statusCode == 200) {
      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      })
        .then(() => navigate("/userList"))
        .then(() => dispatch(GetAll()));
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };
  // const submitForm = async (value: any) => {
  //   let result = await agent.FoodDrink.updateFd(value);

  //   // if (!state) result = await dispatch(CreateMenu(data)).unwrap();
  //   if (result.statusCode == 200) {
  //     swal({
  //       title: "บันทึกสำเร็จ",
  //       icon: "success",
  //       buttons: [false, "ตกลง"],
  //     }).then(() => navigate("/fdList"));
  //   } else {
  //     swal({
  //       title: result.message,
  //       icon: "warning",
  //       buttons: [false, "ตกลง"],
  //     });
  //   }
  // };

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

  const producttest = user?.map((products) => {
    return (
      <tr key={products.accountId}>
        <td className="md-2">
          {/* <div className="d-flex-order align-items-center">
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


          </div> */}
          <p className="fw-normal mb-1">{products.accountId}</p>
        </td>
        <td className="md-2">
          <p className="fw-normal mb-1">
            {products.firstName} {products.lastName}
          </p>
        </td>
        {/* <td>
          <span className="badge badge-success rounded-pill d-inline">
            Active
          </span>
        </td> */}
        <td className="md-2">{products.email} </td>
        {/* <td>{products.stock} ชิ้น</td> */}
        <td className="md-2">{products.tel} </td>
        <td>
          {products?.role.roleName != "Admin" ? (
            <Button
              onClick={() => ChangeStatus(products.accountId)}
              type="primary"
              ghost
            >
              ผู้ใช้
            </Button>
          ) : (
            <Button onClick={() => ChangeStatus(products.accountId)} danger>
              ผู้ดูแล
            </Button>
          )}
          {/* {

          products?.isUsed == 1 ? (
            <Button
              onClick={() => ChangeStatus(products.accountId)}
              type="primary"
              ghost
            >
              ผู้ใช้
            </Button>
          ) : (
            <Button onClick={() => ChangeStatus(products.accountId)} danger>
              ผู้ดูแล
            </Button>
          )} */}
        </td>
        <td className="md-2">
          <Button
            onClick={() => navigate("/editacmd", { state: products })}
            className=" btn-sm btn-rounded"
          >
            <EditIcon />
          </Button>

          {/* <Button
            style={{ left: "5px" }}
            onClick={() => navigate(`/AddImageAcmd/${products.accommodationId}`)}
            className=" btn-sm btn-rounded"
          >
            <AddPhotoAlternateIcon />
          </Button> */}

          {/* <Button style={{ left: "10px" }} className=" btn-sm btn-rounded">
            <MoreHorizIcon />
          </Button> */}
          <Button
            onClick={() => {
              DeleteProduct(products.accountId);
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
          <h3>รายการบัญชีผู้ใช้</h3>
          <Button
            // onClick={() => {window.location.replace("/createacmd")}}
            onClick={handlePrint}
            style={{ margin: "10px", right: "10px" }}
          >
            <PrinterOutlined /> Print
          </Button>
          {/* <Button onClick={handlePrint} className="mr-2"><PrinterOutlined style={{}}/>Print</Button> */}
          {/* <Button onClick={handlePrint}>ddd</Button> */}
          <tr>
            <th>ไอดี</th>
            <th>ชื่อ-นามสกุล</th>
            <th>อีเมลล์</th>
            {/* <th>จำนวน</th> */}
            <th>เบอร์โทรศัพท์</th>
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

export default UserList;
