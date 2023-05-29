import { useEffect, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import { Link, useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import { GetByIdFd, resetDetailFd } from "../../../../app/store/menuSlice";
import Swal from "sweetalert2";
import { addCartItemAsync } from "../../../../app/store/cartSlice";
import "../../test/cssTest.css";

function MenuDetailV2() {
  const { account } = useAppSelector((state) => state.account);
  const { carts } = useAppSelector((state) => state.cartItem);

  const [amount, setAmount] = useState<Number | any>(1); // จำนวนสินค้าที่เราจะเพิ่มใส่ตะกร้า

  const { id } = useParams<{ id: any }>();
  const dispatch = useAppDispatch();
  const {  detailfd } = useAppSelector(
    (state) => state.menu
  );

  console.log("detailfd", detailfd);

  const item = carts?.find((i) => i.fdId);

  const AddCart = async (accountId: any, fdId: any, amount: any) => {
    if (account) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "บันทึกสำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      })
        .then(() => {
          const result: any = dispatch(
            addCartItemAsync({
              accountId: accountId,
              fdId: fdId,
              amount: amount,
            })
          );
          console.log(result)
        })
        .then(() => {
          window.location.replace(`/menudetail/${id}`);
        });
    } else
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "กรุณาเข้าสู่ระบบ",
        showConfirmButton: false,
        timer: 1000,
      });
  };

  useEffect(() => {
    if (item) setAmount(1);
    if (!detailfd) dispatch(GetByIdFd(id));
    return () => {
      dispatch(resetDetailFd());
    };
  }, [detailfd, item, id, dispatch]);
  return (
<div>
    {/* <!-- Breadcrumb Section Begin --> */}
   <div className="breadcrumb-section">
   <div className="container">
     <div className="row">
       <div className="col-lg-12">
         <div className="breadcrumb-text">
           <h2>รายละเอียด</h2>
           <div className="bt-option">
             <Link to="/">หน้าหลัก</Link>
             <span>ที่พัก</span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 {/* <!-- Breadcrumb Section End --> */}

 {/* <!-- Room Details Section Begin --> */}
 <section className="room-details-section spad">
   <div className="container">
     <div className="row">
       <div className="col-lg-7">
         <div className="room-details-item">
           {/* <img src="img/room/room-details.jpg" alt="ss" /> */}
           <img
             src={
               "https://localhost:5000/images/" +
               detailfd?.fdImgs[0].fdImgName
             }
             alt={
               "https://localhost:5000/images/" +
               detailfd?.fdImgs[0].fdImgName
             }
           />

           <div className="rd-text">
             <div className="rd-title">
               <h3>{detailfd?.fdName}</h3>
               <div className="rdt-right">
                 {/* <div className="rating">
                 <i className="icon_star"></i>
                 <i className="icon_star"></i>
                 <i className="icon_star"></i>
                 <i className="icon_star"></i>
                 <i className="icon_star-half_alt"></i>
               </div> */}

                 <a
                   // href="#"
                   onClick={() =>
                     AddCart(account?.accountId, detailfd?.fdId, amount)
                   }
                 >
                   Booking Now
                 </a>
               </div>
             </div>
             <h2>
               {detailfd?.fdPrice}฿<span></span>
             </h2>
             <table>
               <tbody>
                 <tr>
                   <td className="r-o">Size:</td>
                   <td> ft</td>
                 </tr>
                 <tr>
                   <td className="r-o">ประเภท:</td>
                   <td>{detailfd?.fdCategory.name}</td>
                 </tr>
                 <tr>
                   <td className="r-o">สถานะ:</td>
                   <td>King Beds</td>
                 </tr>
                 <tr>
                   <td className="r-o">รายละเอียด:</td>
                   {/* <td>Wifi, Television, Bathroom,...</td> */}
                 </tr>
               </tbody>
             </table>
             <p className="f-para">
               {detailfd?.fdDescription}
               {/* Motorhome or Trailer that is the question for you. Here are
               some of the advantages and disadvantages of both, so you
               will be confident when purchasing an RV. When comparing Rvs,
               a motorhome or a travel trailer, should you buy a motorhome
               or fifth wheeler? The advantages and disadvantages of both
               are studied so that you can make your choice wisely when
               purchasing an RV. Possessing a motorhome or fifth wheel is
               an achievement of a lifetime. It can be similar to
               sojourning with your residence as you search the various
               sites of our great land, America. */}
             </p>
             <p>
               The two commonly known recreational vehicle classes are the
               motorized and towable. Towable rvs are the travel trailers
               and the fifth wheel. The rv travel trailer or fifth wheel
               has the attraction of getting towed by a pickup or a car,
               thus giving the adaptability of possessing transportation
               for you when you are parked at your campsite.
             </p>
           </div>
         </div>

         {/* <div className="rd-reviews">
         <h4>Reviews</h4>
         <div className="review-item">
           <div className="ri-pic">
             <img src="img/room/avatar/avatar-1.jpg" alt="" />
           </div>
           <div className="ri-text">
             <span>27 Aug 2019</span>
             <div className="rating">
               <i className="icon_star"></i>
               <i className="icon_star"></i>
               <i className="icon_star"></i>
               <i className="icon_star"></i>
               <i className="icon_star-half_alt"></i>
             </div>
             <h5>Brandon Kelley</h5>
             <p>
               Neque porro qui squam est, qui dolorem ipsum quia dolor
               sit amet, consectetur, adipisci velit, sed quia non
               numquam eius modi tempora. incidunt ut labore et dolore
               magnam.
             </p>
           </div>
         </div>
         <div className="review-item">
           <div className="ri-pic">
             <img src="img/room/avatar/avatar-2.jpg" alt="" />
           </div>
           <div className="ri-text">
             <span>27 Aug 2019</span>
             <div className="rating">
               <i className="icon_star"></i>
               <i className="icon_star"></i>
               <i className="icon_star"></i>
               <i className="icon_star"></i>
               <i className="icon_star-half_alt"></i>
             </div>
             <h5>Brandon Kelley</h5>
             <p>
               Neque porro qui squam est, qui dolorem ipsum quia dolor
               sit amet, consectetur, adipisci velit, sed quia non
               numquam eius modi tempora. incidunt ut labore et dolore
               magnam.
             </p>
           </div>
         </div>
       </div> */}

         {/* <div className="review-add">
         <h4>Add Review</h4>
         <form action="#" className="ra-form">
           <div className="row">
             <div className="col-lg-6">
               <input type="text" placeholder="Name*" />
             </div>
             <div className="col-lg-6">
               <input type="text" placeholder="Email*" />
             </div>
             <div className="col-lg-12">
               <div>
                 <h5>You Rating:</h5>
                 <div className="rating">
                   <i className="icon_star"></i>
                   <i className="icon_star"></i>
                   <i className="icon_star"></i>
                   <i className="icon_star"></i>
                   <i className="icon_star-half_alt"></i>
                 </div>
               </div>
               <textarea placeholder="Your Review"></textarea>
               <button type="submit">Submit Now</button>
             </div>
           </div>
         </form>
       </div> */}
       </div>

       <div className="col-lg-5">
         <div className="room-booking">
           <h3>Your Reservation</h3>
           <form action="#">
             <div className="check-date">
               <label htmlFor="date-in">Check In:</label>
               <input type="text" className="date-input" id="date-in" />
               <i className="icon_calendar"></i>
             </div>
             <div className="check-date">
               <label htmlFor="date-out">Check Out:</label>
               <input type="text" className="date-input" id="date-out" />
               <i className="icon_calendar"></i>
             </div>
             <div className="select-option">
               <label htmlFor="guest">Guests:</label>
               <select id="guest">
                 <option value="">3 Adults</option>
               </select>
             </div>
             <div className="select-option">
               <label htmlFor="room">Room:</label>
               <select id="room">
                 <option value="">1 Room</option>
               </select>
             </div>
             <button type="submit">Check Availability</button>
           </form>
         </div>
       </div>



     </div>
   </div>
 </section>
 {/* <!-- Room Details Section End --> */}

</div>

  ); 
 
 
    }

    export default MenuDetailV2;