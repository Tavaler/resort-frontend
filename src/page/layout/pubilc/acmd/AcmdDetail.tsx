import React, { useEffect } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import Navbar from "../../../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../../app/store/configureStore";
import { GetByIdAcmd, resetDetailAcmd } from "../../../../app/store/accommodationSlice";
import { addHouseBookingAsync } from "../../../../app/store/HBookingSlice";
import { Col, DatePicker, Form } from "antd";
import { Formik } from "formik";

function AcmdDetail() {
  const { account } = useAppSelector((state) => state.account);
  const { hbookings } = useAppSelector((state) => state.housebooking);

  const { RangePicker } = DatePicker;

  const value = {
    // fdName: "",
    // accommodationId: "",
    checkIn: "",
    checkOut: "",
    // fdDescription: "",
    // fdIsused: 1,
  };

  // id:                 number;
  // accommodationId:    string;
  // checkIn:            Date;
  // checkOut:           Date;
  // createDate:         Date;
  // sumPrice:           number;
  // name:               string;
  // accommodationTypes: string;
  // price:              number;
  // image:              string;

  // const [amount, setAmount] = useState<Number | any>(1); // จำนวนสินค้าที่เราจะเพิ่มใส่ตะกร้า

  const { id } = useParams<{ id: any }>();
  const dispatch = useAppDispatch();
  const { acmdsdetailLoaded, detailacmd } = useAppSelector(
    (state) => state.acmd
  );

  console.log("detailacmd :", detailacmd);

  const item = hbookings?.find((i) => i.accommodationId);


  const AddCart = async (accountId: any, accommodationId: any, checkIn: any,checkOut: any) => {
    if (account) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เพิ่มในรายการการจองแล้ว",
        showConfirmButton: false,
        timer: 1000,
      })
        .then(() => {
          const result: any = dispatch(
            addHouseBookingAsync({
              accountId: accountId,
              accommodationId: accommodationId,
              checkIn: "",
              checkOut: "",
            })
          );
        })
        .then(() => {
          window.location.replace(`/roomsdetail/${id}`);
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
    // if (item) setAmount(1);
    if (!detailacmd) dispatch(GetByIdAcmd(id));
    return () => {
      dispatch(resetDetailAcmd());
    };
  }, [detailacmd,item, id, dispatch]);


  return (
    // <div>
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
    //                       src={data.productImages[0].img}
    //                       height="500px"
    //                       width="550px"
    //                       style={{ objectFit: "cover", border: "solid" }}
    //                       alt={data.productImages}
    //                     />
    //                   </Zoom>
    //                 </center>
    //               </div>
    //               {data &&
    //                 data.productImages.map((item, index) => {
    //                   return (
    //                     <div key={index} className="carousel-item">
    //                       <center>
    //                         <Zoom>
    //                           <img
    //                             className=""
    //                             alt={item.img}
    //                             height="500px"
    //                             width="554px"
    //                             style={{ objectFit: "cover", border: "solid" }}
    //                             src={item.img}
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
    //             <h1>{data.name}</h1>
    //             <p>
    //               <strong style={{ color: "black" }}>รายละเอียด </strong>
    //               {data.detail}
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
    //                   {data.stockSell}
    //                 </strong>
    //               </p>
    //             </div>
    //             <div className="cable-config">
    //               <p>
    //                 คลัง <strong>:</strong>
    //                 <strong>&nbsp;{data.stock}</strong>
    //               </p>
    //             </div>
    //           </div>

    //           {/* <!-- Product Pricing --> */}
    //           <div className=" product-price cable-choose">
    //             <a className="btn btn-lg border">{data.price}฿</a>
    //             <a
    //               href="#"
    //               // style="background-color: #7dc855; color: #fff;"
    //               // (click)="addToCart(mProduct)"
    //               className="btn btn-lg bg-success text-white"
    //             >
    //               <FontAwesomeIcon icon={faCartPlus} />
    //             </a>
    //             <a
    //               className="btn btn-lg bg-danger text-white"
    //               onClick={() => history(-1)}
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

    //     <div className="container-wrap">
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
    //     </div>
    //   </div>
    // </div>

    

    <div>
      <Navbar />

      <div style={{ backgroundColor: "#fff" }} className="container">
        {/* <!-- Breadcrumb Section Begin --> */}
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-text">
                  <h2>รายละเอียด</h2>
                  <div className="bt-option">
                    <Link to="/">หน้าหลัก</Link>
                    <span>{detailacmd?.accommodationType.name}</span>
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
              <div className="col-lg-8">
                <div className="room-details-item">
                  {/* <img src="img/room/room-details.jpg" alt="ss" /> */}
                  <center>
                    <img
                      style={{ height: "40%", width: "40%" }}
                      src={
                        "https://localhost:5000/images/" +
                        detailacmd?.accommodationImgs[0].image
                      }
                      alt={
                        "https://localhost:5000/images/" +
                        detailacmd?.accommodationImgs[0].image
                      }
                    />
                  </center>

                  <div className="rd-text">
                    <div className="rd-title">
                      <h3>{detailacmd?.name}</h3>
                      <div className="rdt-right">
                        {/* <div className="rating">
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star-half_alt"></i>
          </div> */}

                        {/* <a
             
              onClick={() =>
                AddCart(account?.accountId, detailfd?.fdId, amount)
              }
            >
              เลือก
            </a> */}
                      </div>
                    </div>
                    <h2>
                      {detailacmd?.price}฿ <span>/คืน</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">สถานะ:</td>
                          <td> {detailacmd?.isUsed}</td>
                        </tr>
                        <tr>
                          <td className="r-o">ประเภท:</td>
                          <td>{detailacmd?.accommodationType.name}</td>
                        </tr>
                        {/* <tr>
              <td className="r-o">สถานะ:</td>
              <td>King Beds</td>
            </tr> */}
                        <tr>
                          <td className="r-o">รายละเอียด:</td>
                          <td>{detailacmd?.detail}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="f-para">
                      {detailacmd?.detail}
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

              <div className="col-md-4">
                <div className="room-booking">
                  <h3>การจอง</h3>

                  {/* <Formik
            initialValues={values}
            // validationSchema={DeliveryValidate}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    handleSubmitForm(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                setValues
            }) => {

            }
          } */}

                  <form action="#">
                    <div className="check-date">
                      <label htmlFor="date-in">Check In:</label>
                      <input type="text" className="date-input" id="date-in" />

                      <i className="icon_calendar"></i>
                      
                      {/* <Col span={12}>
                        <Form.Item label={<Ts>เวลาจัดส่ง</Ts>}>
                          <DatePicker
                            name="timeArrive"
                            defaultValue={
                              state &&
                              dayjs(state.timeArrive, "YYYY-MM-DD HH:mm:ss")
                            }
                            showTime
                            status={
                              touched.timeArrive && errors.timeArrive
                                ? "error"
                                : ""
                            }
                            locale={locale}
                            onChange={(_, date) => {
                              if (date !== "")
                                setFieldValue(
                                  "timeArrive",
                                  new Date(date).toLocaleString("th-TH")
                                );
                              else setFieldValue("timeArrive", date);
                            }}
                            onBlur={handleBlur}
                            placeholder=""
                            style={{ width: "100%" }}
                          />
                          <ErrorMessage
                            name="timeArrive"
                            component="div"
                            className="text-danger text-st"
                          />
                        </Form.Item>
                      </Col> */}

                      <DatePicker />
                    </div>
                    <div className="check-date">
                      <label htmlFor="date-out">Check Out:</label>
                      <input type="text" className="date-input" id="date-out" />
                      <i className="icon_calendar"></i>
                    </div>
                    {/* <div className="select-option">
               <label htmlFor="guest">Guests:</label>
               <select id="guest">
                 <option value="">3 Adults</option>
               </select>
             </div> */}
                    {/* <div className="select-option">
               <label htmlFor="room">Room:</label>
               <select id="room">
                 <option value="">1 Room</option>
               </select>
             </div> */}
                    <a
                      onClick={() =>
                        AddCart(
                          account?.accountId,
                          detailacmd?.accommodationId,
                          "",
                          ""
                        )
                      }

                      //  type="submit"
                    >
                      Check Availability
                    </a>
                  </form>


                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Room Details Section End --> */}
      </div>
    </div>
  );
}

export default AcmdDetail
