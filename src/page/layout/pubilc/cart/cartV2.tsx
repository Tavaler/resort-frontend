import { useEffect, useState } from "react";
import agent from "../../../../app/api/agent";
import useCart from "../../../../app/hook/useCart";
import {
  DeletCart,
  fetchCartAsync
} from "../../../../app/store/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import Navbar from "../../../../components/Navbar";
import "./cartV2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Select } from "antd";
import Swal from "sweetalert2";
import useHBorder from "../../../../app/hook/useHBorder";
import { OrderCreate, OrderItem } from "../../../../app/models/order";
import { Formik } from "formik";

function cartV2() {
  const { account } = useAppSelector((state) => state.account);
  // const { carts } = useAppSelector(state => state.cartItem);
  const { carts, subtotal } = useCart();

  const { hborderV2 } = useHBorder();
  // console.log("hborder",hborder)

  const [idaddress, setId] = useState<string>("");
  
  // const { carts } = useAppSelector(state => state.crat);
  // const account = JSON.parse(localStorage.getItem("account")!);
  const dispatch = useAppDispatch();

  const value = {

    accommodationId: "",

  };
  useEffect(() => {
    //  if (!carts)
    //  dispatch(fetchCartAsync(account?.accountId));
    //  dispatch(itemPlusCartAsync(carts.))
    //  console.log({account})
  }, [dispatch, carts]); ///,carts]

  const DeleteCart = (id: any) => {
    Swal.fire({
      // title: "ต้องการจะลบรายการสินค้าที่สั่งหรือไม่?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
          async () => {
            await dispatch(DeletCart(id)).then(() =>
              dispatch(fetchCartAsync(account?.accountId))
            );
          }
        );
      }
    });
  };

  // console.log("detailfd", detailfd);
  async function onChangeNumberCartPlus(id: any) {
    console.log(id);
      await agent.Cart.ItemPlusCart({id})
    //dispatch(itemPlusCartAsync({id}));

    dispatch(fetchCartAsync(account?.accountId));
  }

  async function onChangeNumberCartRemove(id: any) {
    console.log(id);
      await agent.Cart.ItemRemoveCart({id})
    //dispatch(itemPlusCartAsync({id}));
    dispatch(fetchCartAsync(account?.accountId));
  }
  // dispatch(fetchCartAsync(account?.accountId));

  const orderreuest: OrderCreate = {
    total: subtotal,
    accommodationId: idaddress,
    accountId: account?.accountId,
    orderItem: carts
      ? carts.map(
          (cart) => 
            ({
              idCartItem: cart.id,
              fdId: cart.fdId,
              amount: cart.amount
              

    
            } as OrderItem ||console.log(cart.id)) 
            
        )
      : [],
  };

  const onClickOrder = async (id:any) => {
    setId(id)
    // console.log(id)
    console.log(orderreuest)

    const result = await agent.Order.create(orderreuest);
    console.log(result)
    if (carts?.length! > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "บันทึกสำเร็จ",
        showConfirmButton: false,
        timer: 1000,
       }).then(() => dispatch(fetchCartAsync(account?.accountId)))
      //}).then( async() => await agent.Order.create(orderreuest)).then(() => dispatch(fetchCartAsync(account?.accountId)))

    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "บันทึกไม่สำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    //console.log(result);
  };

  return (
    <div>
      <Navbar />

      <div className="main">
        <h1>อาหาร</h1>
        <h2 className="sub-heading">
          รายการการที่เลือก : {carts?.length} รายการ
        </h2>

        <section className="shopping-cart">
          {carts?.map((cart) => {
            return (
              <div key={cart.id} className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={cart.fdImg}
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{cart.fdName}</p>
                      <p>
                        ประเภท:
                        <span className="text-muted">
                          {" "}
                          {cart.fdCategoryName}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                      onClick={() => onChangeNumberCartRemove(cart.id)}
                      >

                        <MinusOutlined />
                      </button>

                      <input
                      disabled={false}
                        id="form1"
                        min="0"
                        name="quantity"
                        value={cart.amount}
                        type="number"
                        className="form-control form-control-sm"
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={() => onChangeNumberCartPlus(cart.id)}
                      >
                        <PlusOutlined />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
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

          {/* <div className=" cart-totals " style={{backgroundColor:"#fff"}}>
            <div className="_column subtotal">
              <div className="cart-totals-key">Subtotal</div>
              <div className="cart-totals-value">{subtotal} ฿</div>
            </div>
            <div className="_column shipping">
              <div className="cart-totals-key">Shipping</div>
              <div className="cart-totals-value">$0.00</div>
            </div>
            <div className="_column taxes">
              <div className="cart-totals-key">Taxes (6%)</div>
              <div className="cart-totals-value">$0.00</div>
            </div>
            <div className="_column total">
              <div className="cart-totals-key">Total</div>
              <div className="cart-totals-value">$0.00</div>
            </div>
            <div className="_column checkout">
              <button className="_btn checkout-btn entypo-forward">
                Checkout
              </button>
            </div>
          </div> */}

          <div className="card mb-4">
            <div className="card-body p-4 d-flex flex-row">
              <div className="form-outline flex-fill">
                {/* <input type="text" id="form1" className="form-control form-control-lg" /> */}
                <label className="form-label" htmlFor="form1">
                  ราคารวม : {subtotal}฿
                </label>

                <Formik
              // validationSchema={AcmdValidate}
              initialValues={value}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(values);
                //setId(value.accommodationId)
                console.log(orderreuest)
                // console.log(value.accommodationId)
                // submitForm(values);
                console.log("gggg",values)
                onClickOrder(values.accommodationId)
                
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
                              <Form
                  onFinish={handleSubmit}
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  // disabled={componentDisabled}
                  style={{ maxWidth: 600 }}
                >
                <Form.Item label="">
                  <Select
                    className="col-md-4"
                    style={{ padding: "7px" }}
                    size="large"
                    placeholder="เลือกที่อยู่จัดส่ง"
                    value={values.accommodationId}
                    
                    onBlur={handleBlur}
                    status={
                      touched.accommodationId && errors.accommodationId
                        ? "error"
                        : ""
                    }
                    onChange={(data) => {
                      setFieldValue("accommodationId", data);
                      setId(data)
                    }}
                    options={hborderV2?.map((data) => {
                      ///if(data?.status == PaymentStatus.WorkInProgress )
                      return {
                        value: data.acmdId,
                        label: data.name,
                        
                      };
                    })}
                    
                      //   CategoryFd?.map((data) => {
                      //   return {
                      //     value: data.fdCategoryId,
                      //     label: data.name,
                      //   };
                      // }
                      // )
                    
                  />
                  {/* <ErrorMessage
                      name="fdCategoryId"
                      component="div"
                      className="text-danger text-st"
                    /> */}
                </Form.Item>
              

              <button type="submit" 
             
              className="btn btn-outline-warning ms-3">
                ยืนยัน
              </button>
              </Form>)}
              </Formik>
            </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="container">




      </div> */}
    </div>
  );
}

export default cartV2;
