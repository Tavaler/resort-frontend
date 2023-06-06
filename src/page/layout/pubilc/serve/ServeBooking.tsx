// import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Form } from "antd";
import { useEffect } from "react";
import Navbar from "../../../../components/Navbar";
import {
  useAppDispatch, useAppSelector,
  // useAppSelector,
} from "../../../../app/store/configureStore";
import useServeBooking from "../../../../app/hook/useServeBooking";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import {
  Delete,
  fetchServeCartAsync,
} from "../../../../app/store/ServeCartSlice";
import {
  ServeOrderCreate,
  ServeOrderItem,
} from "../../../../app/models/serveOrder";
import agent from "../../../../app/api/agent";
import { fetchServeOrderByIdAccount } from "../../../../app/store/serveOrderSlice";
import moment from "moment-timezone";


function ServeBooking() {
  const { account } = useAppSelector((state) => state.account);
  const { account2 } = JSON.parse(localStorage.getItem("account")!);

  // const { carts } = useAppSelector(state => state.cartItem);
  // const { carts, subtotal } = useCart();

  const { serveCart, subtotal } = useServeBooking();
  // console.log("serveCart", serveCart);

  // const { carts } = useAppSelector(state => state.crat);
  // const account = JSON.parse(localStorage.getItem("account")!);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!serveCart)
    dispatch(fetchServeCartAsync(account2?.accountId));
    //  dispatch(itemPlusCartAsync(carts.))
    //  console.log({account})
  }, [dispatch, serveCart]); ///,carts]

  const DeleteCart = (id: any) => {
    Swal.fire({
      title: "ยืนยันที่จะลบหรือไม่?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน!",
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("ลบแล้ว!", "ยกเลิกการจองที่พักเรียบร้อย", "success").then(
          async () => {
            await dispatch(Delete(id)).then(() =>
              dispatch(fetchServeCartAsync(account?.accountId))
            );
          }
        );
      }
    });
  };

  const orderreuest: ServeOrderCreate = {
    total: subtotal,
    accountId: account?.accountId,
    serveOrderItem: serveCart
      ? serveCart.map(
          (cart) =>
            (({
              idServeCart: cart.id,
              serveId: cart.serveId,
              checkIn:  cart.checkIn,
              amount: cart.amount,

              // accountId: account?.accountId,

              // checkIn: cart.checkIn,
              // checkOut: cart.checkOut,
              // desiredDetail: cart.desiredDetail
            } as ServeOrderItem) || console.log(cart.id))
        )
      : [],
  };

  const onClickOrder = async () => {
    const result = await agent.ServeOrder.create(orderreuest);

    if (serveCart?.length! > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "บันทึกสำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => dispatch(fetchServeOrderByIdAccount(account?.accountId)));
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "บันทึกไม่สำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    console.log(result);
  };

  return (
    <div>
      <Navbar />

      <div className="main">
        <h1>การจองบริการ</h1>
        <h2 className="sub-heading">
          รายการการที่เลือก : {serveCart?.length} รายการ
        </h2>

        <section className="shopping-cart">
          {serveCart?.map((cart) => {
            return (
              <div key={cart.id} className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={cart.image}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <p className="lead fw-normal mb-2">{cart.name}</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2">
                    <p>
                      {moment
                    .utc(cart.checkIn)
                    .tz("Asia/Bangkok")
                    .format("DD-MM-YYYY HH:mm")}
                    </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      {/* <button
                      className="btn btn-link px-2"
                      // onClick={() => onChangeNumberCartRemove(cart.id)}
                    >
                      <MinusOutlined />
                    </button> */}
                      <p>ผู้ใช้บริการ</p>
                      

                      {/* <input
                        disabled={false}
                        id="form1"
                        min="0"
                        name="quantity"
                        value={cart.amount}
                        type="number"
                        className="form-control form-control-sm"
                      /> */}
                      <p> {cart.amount} </p>
                      {/* <button
                      className="btn btn-link px-2"
                      // onClick={() => onChangeNumberCartPlus(cart.id)}
                    >
                      <PlusOutlined />
                    </button> */}
                      <p>คน</p>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 offset-lg-1">
                      <h5 className="mb-0">{cart.sumAmountPrice}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a
                        onClick={() => DeleteCart(cart.id)}
                        className="text-danger"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="card mb-4">
            <div className="card-body p-4 d-flex flex-row">
              <div className="form-outline flex-fill">
                {/* <input type="text" id="form1" className="form-control form-control-lg" /> */}
                <label className="form-label" htmlFor="form1">
                  ราคารวม : {subtotal}฿
                </label>
              </div>

              <button type="button" className="btn btn-outline-warning ms-3"
              onClick={()=>onClickOrder()}>
                ยืนยัน
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="container">




    </div> */}
    </div>
  );
}

export default ServeBooking;
