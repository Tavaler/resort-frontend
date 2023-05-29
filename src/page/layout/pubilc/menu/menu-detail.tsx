import { useEffect, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Navbar from "../../../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import { GetByIdFd, resetDetailFd } from "../../../../app/store/menuSlice";
import Swal from "sweetalert2";
// import { addCartItemAsync } from "../../../../app/store/cartSlice";
import "../../test/cssTest.css";

import "../../../../index.css"
import { Carousel } from "antd";
import { URLSever } from "../../../../util/util";

function MenuDetail() {
  const { account } = useAppSelector((state) => state.account);
  const { carts } = useAppSelector((state) => state.cartItem);

  const [amount, setAmount] = useState<Number | any>(1); // จำนวนสินค้าที่เราจะเพิ่มใส่ตะกร้า

  const onChange = () => {};

  // const imagesdetail = detailfd?.fdImgs.map((image: any) => {
  //   return (
  //     <div >
  //       <img style={contentStyle} src={image.image} />
  //     </div>
  //   );
  // });
  const { id } = useParams<{ id: any }>();
  const dispatch = useAppDispatch();
  const { detailfd } = useAppSelector(
    (state) => state.menu
  );

  console.log("detailfd", detailfd);

  const item = carts?.find((i) => i.fdId);

  const AddCart = async (accountId: any, fdId: any, amount: any) => {
    console.log(`account: ${accountId} fdId: ${fdId} amount: ${amount}`)
    if (account) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เพิ่มลงตะกร้าแล้ว",
        showConfirmButton: false,
        timer: 1000,
      })
        .then(() => {
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

    // from https://react-slick.neostack.com/docs/example/custom-arrows
    const SampleNextArrow = (props: { className: any; style: any; onClick: any; }) => {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{
            ...style,
            color: 'black',
            fontSize: '20px',
            // lineHeight: '1.5715'
          }}
          onClick={onClick}
        >
          {/* <RightOutlined /> */}
        </div>
      )
    }
    
    const SamplePrevArrow = (props: { className: any; style: any; onClick: any; }) => {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{
            ...style,
            color: 'black',
            fontSize: '20px',
            // lineHeight: '1.5715'
          }}
          onClick={onClick}
        >
          {/* <LeftOutlined /> */}
        </div>
      )
    }
  
    const settings = {
      nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
      prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
    }

  useEffect(() => {
    if (item) setAmount(1);
    if (!detailfd) dispatch(GetByIdFd(id));
    return () => {
      dispatch(resetDetailFd());
    };
  }, [detailfd, item, id, dispatch]);

  
  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: "#fff" }} className="container">
        {/* <!-- Breadcrumb Section Begin --> */}
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>รายละเอียด</h2>
                  <div className="bt-option">
                    <Link to="/">หน้าหลัก</Link>
                    <span>{detailfd?.fdCategory.name}</span>
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
              <div className="col-lg-12">
                <div className="room-details-item">
                  {/* <img src="img/room/room-details.jpg" alt="ss" /> */}
                  {/* <center>
           {
           detailfd?.fdImgs[0] ? <img
            style={{maxHeight:"50rem",maxWidth:"40%"}}
            className="img-fluid"
             src={
               "https://localhost:5000/images/" +
               detailfd?.fdImgs[0].fdImgName
             }
             alt={
               "https://localhost:5000/images/" +
               detailfd?.fdImgs[0].fdImgName
             }
           />

           : <img src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" className="img-fluid" alt="" />
          }

           
           </center> */}

<div style={{backgroundColor:"#FAF9F6"}} className="services-section">

<Carousel arrows {...settings} afterChange={onChange} autoplay>

                      {/* <center>
                        <img
                          style={contentStyle}
                          src={"https://localhost:5000/images/" + img.fdImgName}

                        />
                      </center> */}
                      {detailfd?.fdImgs.map((img) => {
                    return (
                      <center>
                        <img
                          // className="img-fluid"
                          style={{ height: "25rem", width: "30rem" }}
                          src={URLSever + img.fdImgName}
                          alt={URLSever + img.fdImgName}
                        />
                      </center>
                    );
                  })}
                      
                    </Carousel>
      



      {/* <Carousel autoplay>

        <center>
        {detailfd?.fdImgs.map((img) => {
                    return (
                      <center>
                        <img
                          // className="img-fluid"
                          style={{ height: "25rem", width: "30rem" }}
                          src={"https://localhost:5000/images/" + img.fdImgName}
                          alt={"https://localhost:5000/images/" + img.fdImgName}
                        />
                      </center>
                    );
                  })}

        </center>
      </Carousel> */}
    </div>



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
                          type="button"
                          // href="#"
                          onClick={() =>
                            AddCart(account?.accountId, detailfd?.fdId, amount)
                          }
                        >
                          เลือก
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
                        {/* <tr>
                   <td className="r-o">สถานะ:</td>
                   <td>King Beds</td>
                 </tr> */}
                        <tr>
                          <td className="r-o">รายละเอียด:</td>
                          <td>{detailfd?.fdDescription}</td>
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
                      The two commonly known recreational vehicle classes are
                      the motorized and towable. Towable rvs are the travel
                      trailers and the fifth wheel. The rv travel trailer or
                      fifth wheel has the attraction of getting towed by a
                      pickup or a car, thus giving the adaptability of
                      possessing transportation for you when you are parked at
                      your campsite.
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
            </div>
          </div>
        </section>
        {/* <!-- Room Details Section End --> */}
      </div>
    </>

    // <>

    //     <Navbar />
    //     <div className="container">
    //     <Test />

    //     </div>
    // </>

    // <div>
    //    <div>
    //   <div className="bg-body">
    //     <div className="container-wrap">
    //       <div
    //         // style="max-width: 70%;max-height: 1900px; margin-top: 40px;margin-bottom: 10px;"
    //         className="container1"
    //       >
    //         {/* <!-- Left Column / Headphones Image --> */}
    //         <div className="left-column">
    //           <div
    //             id="carouselExampleInterval"
    //             className="carousel slide"
    //             data-bs-ride="carousel"
    //           >
    //             <div className="carousel-inner">
    //               <div className="carousel-item active">
    //                 <center>
    //                   <Zoom>
    //                     <img
    //                       //  style={{marginTop: '1px'}}
    //                       className="active"
    //                       // src={data.productImages[0].img}
    //                       height="500px"
    //                       width="550px"
    //                       style={{ objectFit: "cover", border: "solid" }}
    //                       // alt={data.productImages}
    //                     />
    //                   </Zoom>
    //                 </center>
    //               </div>
    //               {detailfd &&
    //                 detailfd.fdImgs.map((item, index) => {
    //                   return (
    //                     <div key={index} className="carousel-item">
    //                       <center>
    //                         <Zoom>
    //                           <img
    //                             className=""
    //                             alt={item.fdImgName}
    //                             height="500px"
    //                             width="554px"
    //                             style={{ objectFit: "cover", border: "solid" }}
    //                             src={`https://localhost:5000/images${item.fdImgName}`}
    //                           />
    //                         </Zoom>
    //                       </center>
    //                     </div>
    //                   );
    //                 })}
    //               {/* <div class="carousel-item" >
    //                                 <img
    //                                     // style="margin-top: 1px;"
    //                                     className="active"
    //                                     src={data.productImages[0].img} height='500px' width='554px' style={{ objectFit: 'cover', border: 'solid' }} alt={data.productImages} />
    //                             </div> */}
    //             </div>
    //             <button
    //               className="carousel-control-prev "
    //               type="button"
    //               data-bs-target="#carouselExampleInterval"
    //               data-bs-slide="prev"
    //             >
    //               <span
    //                 className="carousel-control-prev-icon bg-dark"
    //                 aria-hidden="true"
    //               ></span>
    //               <span className="visually-hidden">Previous</span>
    //             </button>
    //             <button
    //               className="carousel-control-next"
    //               type="button"
    //               data-bs-target="#carouselExampleInterval"
    //               data-bs-slide="next"
    //             >
    //               <span
    //                 className="carousel-control-next-icon bg-dark"
    //                 aria-hidden="true"
    //               ></span>
    //               <span className="visually-hidden">Next</span>
    //             </button>
    //           </div>
    //         </div>
    //         <p>&#160; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
    //         <p></p>
    //         {/* <!-- Right Column --> */}
    //         <div className="right-column">
    //           {/* <!-- Product Description --> */}
    //           <div className="product-description">
    //             <h1>{detailfd?.fdName}</h1>
    //             <p>
    //               <strong style={{ color: "black" }}>รายละเอียด </strong>
    //               {detailfd?.fdDescription}
    //             </p>
    //           </div>

    //           {/* <!-- Product Configuration --> */}
    //           <div className="product-configuration">
    //             {/* <!-- Cable Configuration --> */}
    //             <div className="cable-config">
    //               <p>
    //                 ยอดขาย <strong>:</strong>
    //                 <strong>
    //                   &nbsp;
    //                   533
    //                   {/* {data.stockSell} */}
    //                 </strong>
    //               </p>
    //             </div>
    //             <div className="cable-config">
    //               <p>
    //                 คลัง <strong>:</strong>
    //                 <strong>&nbsp;6262</strong>
    //               </p>
    //             </div>
    //           </div>

    //           {/* <!-- Product Pricing --> */}
    //           <div className=" product-price cable-choose">
    //             <a className="btn btn-lg border">{detailfd?.fdPrice}฿</a>
    //             <a
    //               href="#"
    //               // style="background-color: #7dc855; color: #fff;"
    //               // (click)="addToCart(mProduct)"
    //               className="btn btn-lg bg-success text-white"
    //             >
    //               +
    //               {/* <FontAwesomeIcon icon={faCartPlus} /> */}
    //             </a>
    //             <a
    //               className="btn btn-lg bg-danger text-white"
    //               // onClick={() => history(-1)}

    //               // style="background-color: #dc3545; color: #fff;"
    //               // type="button"
    //               // (click)="onClickCancel()"
    //             >
    //               Cancel
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className="container-wrap">
    //       <br />
    //       <br />
    //       <br />

    //       <div className="text-align-center">
    //         <img src="https://www.prachachat.net/wp-content/uploads/2021/01/table-791167_960_720-728x485.jpg" />
    //       </div>
    //       <div>
    //         <div
    //           className="text-align-center"
    //           // style="text-align: center;"
    //         >
    //           <br />
    //           <br />
    //           <br />
    //           <div className="heading-section text-center">
    //             <h2 className="mb-4">
    //               Welcome to <span className="flaticon-pizza">Coffee</span> Shop
    //             </h2>
    //           </div>

    //           <h4
    //             className="text-align-center"
    //             // style="text-align: center;"
    //           >
    //             On her way she met a copy. The copy warned the Little Blind
    //             Text, that where it came from it would have been rewritten a
    //             thousand times and everything that was left from its origin
    //             would be the word "and" and the Little Blind Text should turn
    //             around and return to its own, safe country. But nothing the copy
    //             said could convince her and so it didn’t take long until a few
    //             insidious Copy Writers ambushed her, made her drunk with Longe
    //             and Parole and dragged her into their agency, where they abused
    //             her for their.
    //           </h4>
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       <section
    //         className="ftco-counter ftco-bg-dark img bg-footerimg"
    //         id="section-counter"
    //         // --------------------------------------------------------------------------------------------------
    //         // style="background-image: url(assets/Home/images/bg_2.jpg);"
    //         data-stellar-background-ratio="0.5"
    //       >
    //         <div className="overlay"></div>
    //         <div>
    //           <div className="row justify-content-center">
    //             <div className="col-md-10">
    //               <div className="row">
    //                 <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
    //                   <div className="block-18 text-center">
    //                     <div className="text">
    //                       <div className="icon">
    //                         <span className="flaticon-pizza-1"></span>
    //                       </div>
    //                       <strong className="number" data-number="100">
    //                         100
    //                       </strong>
    //                       <span>Pizza Branches</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
    //                   <div className="block-18 text-center">
    //                     <div className="text">
    //                       <div className="icon">
    //                         <span className="flaticon-medal"></span>
    //                       </div>
    //                       <strong className="number" data-number="0">
    //                         85
    //                       </strong>
    //                       <span>Number of Awards</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
    //                   <div className="block-18 text-center">
    //                     <div className="text">
    //                       <div className="icon">
    //                         <span className="flaticon-laugh"></span>
    //                       </div>
    //                       <strong className="number" data-number="10567">
    //                         10567
    //                       </strong>
    //                       <span>Happy Customer</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
    //                   <div className="block-18 text-center">
    //                     <div className="text">
    //                       <div className="icon">
    //                         <span className="flaticon-chef"></span>
    //                       </div>
    //                       <strong className="number" data-number="900">
    //                         900
    //                       </strong>
    //                       <span>Staff</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div> */}
    //   </div>
    // </div>

    // </div>

    // <div>
    //   <Navbar />
    //   <Test />

    //   <div >

    //   <div className="e1_2">
    //     <div className="e1_3"></div>
    //     <div className="e1_4">
    //       <div className="e1_5">
    //         <div className="e1_6"></div>
    //       </div>
    //     </div>
    //     <div className="e1_7">

    //       <a className="e1_12"
    //       type="button"

    //                onClick={() =>
    //                  AddCart(account?.accountId, detailfd?.fdId, amount)
    //                }
    //              >
    //               เพิ่มลงตะกร้า
    //       </a>
    //     </div>
    //     <div className="e1_13">
    //       <div className="e1_14">
    //         <img
    //           src={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[0].fdImgName
    //           }
    //           alt={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[0].fdImgName
    //           }
    //         />
    //       </div>
    //       <div className="e1_15">
    //         <img
    //           src={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[1].fdImgName
    //           }
    //           alt={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[1].fdImgName
    //           }
    //         />
    //       </div>
    //       <div className="e1_16">
    //         <img
    //           src={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[2].fdImgName
    //           }
    //           alt={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[2].fdImgName
    //           }
    //         />
    //       </div>
    //       <div className="e1_17">
    //         <img
    //           src={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[2].fdImgName
    //           }
    //           alt={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[2].fdImgName
    //           }
    //         />
    //       </div>

    //       <div className="e1_18">
    //         <img
    //           src={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[2].fdImgName
    //           }
    //           alt={
    //             "https://localhost:5000/images/" + detailfd?.fdImgs[2].fdImgName
    //           }
    //         />
    //       </div>

    //     </div>
    //     <span className="e1_21">รายละเอียด</span>
    //     <div className="e1_22">

    //       <span className="e1_24">{detailfd?.fdPrice} ฿</span>
    //     </div>
    //     <div className="e1_25">
    //       <div className="e1_26"></div>
    //     </div>
    //     <div className="e1_27">
    //       <div className="e1_28">
    //         <span className="e1_29">XS</span>
    //       </div>
    //       <div className="e1_30"></div>
    //       <div className="e1_31">
    //         <span className="ei1_31_1_29">XL</span>
    //       </div>
    //       <div className="e1_32"></div>
    //       <div className="e1_33">
    //         <span className="ei1_33_1_29">S</span>
    //       </div>
    //       <div className="e1_34"></div>
    //       <span className="e1_35">M</span>
    //       <span className="e1_36">XXL</span>
    //       <span className="e1_37">L</span>
    //     </div>
    //     <div className="e1_38">
    //       <span className="e1_39">{detailfd?.fdName}</span>

    //     </div>
    //     <div className="e1_41">

    //       <span className="e1_43">ประเภท :  {detailfd?.fdCategory.name}</span>
    //     </div>
    //     <div className="e1_44">
    //       <span className="e1_45">รายละเอียด</span>

    //       <div className="e1_47"></div>
    //       <span className="e1_48">
    //         {detailfd?.fdDescription}
    //       </span>

    //     </div>
    //   </div>

    //   </div>

    // </div>
  );
}

export default MenuDetail;
