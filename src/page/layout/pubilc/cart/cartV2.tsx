import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../../../app/api/agent";
import { fetchCartAsync, itemPlusCartAsync } from "../../../../app/store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/store/configureStore";
import Navbar from "../../../../components/Navbar";
import "./cartV2.css"

function cartV2() {
  const { account } = useAppSelector(state => state.account);
  const { carts } = useAppSelector(state => state.cartItem);

  
// const { carts } = useAppSelector(state => state.crat);
  // const account = JSON.parse(localStorage.getItem("account")!);
const dispatch = useAppDispatch();

useEffect(() => {
 dispatch(fetchCartAsync(account?.accountId));
//  dispatch(itemPlusCartAsync(carts.))
 console.log({carts})

//  console.log({account})
}, [dispatch,carts]); ///,carts]

  // const [amount, setAmount] = useState<Number | any>(1); // จำนวนสินค้าที่เราจะเพิ่มใส่ตะกร้า
  // const { id } = useParams<{ id: any }>();

  // const dispatch = useAppDispatch();
  // const { productsdetailLoaded, detailfd } = useAppSelector(
  //   (state) => state.cartItem
  // );

  // console.log("detailfd", detailfd);
  async function onChangeNumberCart({ value, data }: any) {
    var result: any = dispatch(
      itemPlusCartAsync({
        data: data,
        // value: data.id
        // v : data.id
        // amountProduct: value,
        // idAccount: accountid?.id,
      })
    );
    console.log(result)
    // if(result.msg === "OK"){
    //   dispatch(fetchCartAsync(account?.accountId));
    // }
  }



  
  return (
    <div>
      <Navbar />

      <div className="main">
        <h1>Shopping cart</h1>
        <h2 className="sub-heading">{carts?.length}</h2>

        <section className="shopping-cart">

        {carts?.map((cart)=>{
                return <>
          <ol className="ui-list shopping-cart--list" id="shopping-cart--list">
            {/* <script id="shopping-cart--list-item-template" type="text/template"> */}

            

<li  className="_grid shopping-cart--list-item">
              <div className="_column product-image">
                <img
                  style={{ height: "100%", width: "100%" }}
                  className="product-image--img"
                  //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScULwPMUZpqrl8ZLObUclIKeaZY6IQjuJdqxLxLcg6f_PfpGUuY5ZLniKUBFbyRWFJpjI&usqp=CAU"
                  src={cart.fdImg}
                  alt="Item image"
                />
              </div>
              <div className="_column product-info">
                <h4 className="product-name">{cart.fdName}</h4>
                <p className="product-desc">{cart.fdCategoryName}</p>
                <div className="price product-single-price">{cart.fdPrice}฿</div>
              </div>
              <div
                className="_column product-modifiers"
                data-product-price="{{=price}}"
              >
                <div className="_grid">
                  <button className="_btn _column product-subtract">
                    &minus;
                  </button>
                  <div className="_column product-qty">{cart.amount}</div>
                  <button 
                  onClick={()=>onChangeNumberCart(cart.id)} 
                  className="_btn _column product-plus">+</button>
                </div>
                <button className="_btn entypo-trash product-remove">
                  Remove
                </button>
                <div className="price bg-primary product-total-price">
                  {cart.sumAmountPrice}฿
                </div>
              </div>
            </li>

{/* {cart.} */}
                
               





            {/* </script> */}
          </ol>
          </>
              })}

          <footer className=" cart-totals ">
            <div className="_column subtotal">
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
              <button className="_btn checkout-btn entypo-forward">
                Checkout
              </button>
            </div>
          </footer>
        </section>
      </div>
      {/* <div className="container">




      </div> */}
    </div>
  );
}

export default cartV2;
