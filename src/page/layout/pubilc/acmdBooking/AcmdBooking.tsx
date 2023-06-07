import { useEffect } from "react";
import agent from "../../../../app/api/agent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import {
  Delet,
  fetchHouseBookingAsync,
} from "../../../../app/store/HBookingSlice";
import Navbar from "../../../../components/Navbar";
import "../cart/cartV2.css";
import useHBooking from "../../../../app/hook/useHBooking";
import Swal from "sweetalert2";
import { HBOrderCreate, HbOrderItem } from "../../../../app/models/HBOrder";

function AcmdBooking() {
  const { account } = useAppSelector((state) => state.account);
  const { hbookings, subtotal } = useHBooking();

  // const { carts } = useAppSelector(state => state.crat);
  // const account = JSON.parse(localStorage.getItem("account")!);
  // console.log(hbookings)
  const dispatch = useAppDispatch();

  useEffect(() => {
    //  console.log({account})
  }, [dispatch, hbookings]); ///,carts]

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
        Swal.fire("ลบแล้ว!", "ลบเรียบร้อย", "success").then(
          async () => {
            await dispatch(Delet(id)).then(() =>
              dispatch(fetchHouseBookingAsync(account?.accountId))
            );
          }
        );
      }
    });
  };

  // async function onChangeNumberCart({ value, data }: any) {
  //   var result: any = dispatch(
  //     itemPlusCartAsync({
  //       data: data,

  //     })
  //   );
  //   console.log(result);

  // }

  const orderreuest: HBOrderCreate = {
    total: subtotal,
    accountId: account?.accountId,
    hbOrderItem: hbookings
      ? hbookings.map(
          (cart) =>
            (({
              idHBooking: cart.id,
              accommodationId: cart.accommodationId,

              // accountId: account?.accountId,

              checkIn: cart.checkIn,
              checkOut: cart.checkOut,
              desiredDetail: cart.desiredDetail,
            } as HbOrderItem) || console.log(cart.id))
        )
      : [],
  };

  const onClickOrder = async () => {
    const result = await agent.HBOrder.create(orderreuest);

    if (hbookings?.length! > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "บันทึกสำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => dispatch(fetchHouseBookingAsync(account?.accountId)));
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
        <h1>House Booking</h1>
        <h2 className="sub-heading">
          รายการการจอง : {hbookings?.length} รายการ
        </h2>

        <section className="shopping-cart">
          {hbookings?.map((hb) => {
            return (
              <div key={hb.id}>
                <ol
                  className="ui-list shopping-cart--list"
                  id="shopping-cart--list"
                >
                  {/* <script id="shopping-cart--list-item-template" type="text/template"> */}

                  <li className="_grid shopping-cart--list-item">
                    <div className="_column product-image">
                      <img
                        style={{ height: "100%", width: "100%" }}
                        className="product-image--img"
                        //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScULwPMUZpqrl8ZLObUclIKeaZY6IQjuJdqxLxLcg6f_PfpGUuY5ZLniKUBFbyRWFJpjI&usqp=CAU"
                        src={hb.image}
                        alt="Item image"
                      />
                    </div>
                    <div className="_column product-info">
                      <h4 className="product-name">{hb.name}</h4>
                      <p className="product-desc">ประเภท : {hb.accommodationTypes}</p>
                      <span className="">ระยะเวลาจอง : {hb.sumDate} วัน</span>

                      {/* <p className="product-desc"> {hb.sumDate}</p> */}

                      
                      <div className="price product-single-price">
                        {hb.price}฿ 
                      </div>
                    </div>
                    <div
                      className="_column product-modifiers"
                      data-product-price="{{=price}}"
                    >
                      <div className="_grid">
                        {/* <button className="_btn _column product-subtract">
                    &minus;
                  </button> */}
                        <div className="_column product-qty">{hb.sumPrice}</div>
                        {/* <button 
                  onClick={()=>onChangeNumberCart(cart.id)} 
                  className="_btn _column product-plus">+</button> */}
                      </div>
                      <button
                        onClick={() => DeleteCart(hb.id)}
                        className="_btn entypo-trash product-remove"
                      >
                        ยกเลิกรายการ
                      </button>
                      <div className="price bg-primary product-total-price">
                        {hb.sumPrice}฿
                      </div>
                    </div>
                  </li>

                  {/* {cart.} */}

                  {/* </script> */}
                </ol>
              </div>
            );
          })}

        
            
            {/* <div className="_column subtotal">
              <div className="cart-totals-key">Subtotal</div>
              <div className="cart-totals-value">$0.00</div>
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
              <button
                onClick={() => onClickOrder()}
                className="_btn checkout-btn entypo-forward"
              >
                ยืนยัน
              </button>
            </div> */}

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  {/* <input type="text" id="form1" className="form-control form-control-lg" /> */}
                  <label className="form-label" htmlFor="form1">
                    ราคารวม : {subtotal}฿
                  </label>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-warning ms-3"
                  onClick={() => onClickOrder()}
                >
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

export default AcmdBooking;
