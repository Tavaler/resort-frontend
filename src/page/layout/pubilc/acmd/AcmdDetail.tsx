import { useEffect } from "react";
// import "react-medium-image-zoom/dist/styles.css";
import Navbar from "../../../../components/Navbar";
import { Link, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/configureStore";
import {
  GetByIdAcmd,
  resetDetailAcmd,
} from "../../../../app/store/accommodationSlice";
import { addHouseBookingAsync } from "../../../../app/store/HBookingSlice";
import { Button, Carousel, DatePicker, Form } from "antd";
import { Formik } from "formik";
import TextArea from "antd/es/input/TextArea";
import Swal from "sweetalert2";
import { URLSever } from "../../../../util/util";

function AcmdDetail() {
  // const { account } = useAppSelector((state) => state.account);
  const {account} = JSON.parse(localStorage.getItem("account")!);

  const { hbookings } = useAppSelector((state) => state.housebooking);

  const { RangePicker } = DatePicker;


  const { id } = useParams<{ id: any }>();
  const dispatch = useAppDispatch();
  const { detailacmd } = useAppSelector(
    (state) => state.acmd
  );

  // console.log(id)
  const onChange = () => {};


  const value = {
    accountId: account?.accountId,
    accommodationId: id,
    checkIn: "",
    checkOut: "",
    desiredDetail: "",
    // fdIsused: 1,
  };

  console.log("detailacmd :", detailacmd);

  const item = hbookings?.find((i) => i.accommodationId);

  const AddBooking = async (value :any) => {
    const result = await dispatch(addHouseBookingAsync(value)).unwrap();
    console.log(result)
    console.log(result.message)

    // if (result.message === "บันทึกข้อมูลสำเร็จ") {
    if (result.statusCode == 200) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: result.message

    }).then(() => dispatch(GetByIdAcmd(id)))
      // swal({
      //   title: "บันทึกข้อมูลสำเร็จ",
      //   icon: "success",
      //   buttons: [false, "ตกลง"],
      // })
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: result.message


      }
      ).then(() => dispatch(GetByIdAcmd(id)))
      // swal({
      //   title: result.message,
      //   icon: "warning",
      //   buttons: [false, "ตกลง"],
      // });
    }
    // agent.HouseBooking.AddBooking(value)
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
    // if (item) setAmount(1);
    if (!detailacmd) dispatch(GetByIdAcmd(id));
    return () => {
      dispatch(resetDetailAcmd());
    };
  }, [detailacmd, item, id, dispatch]);

  return (
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
                  <Carousel arrows {...settings} afterChange={onChange} autoplay>

                      {/* <center>
                        <img
                          style={contentStyle}
                          src={"https://localhost:5000/images/" + img.fdImgName}

                        />
                      </center> */}
                      {detailacmd?.accommodationImgs.map((img) => {
                    return (
                      <center>
                        <img
                          // className="img-fluid"
                          style={{ height: "25rem", width: "30rem" }}
                          src={URLSever + img.image}
                          alt={URLSever + img.image}
                        />
                      </center>
                    );
                  })}
                      
                    </Carousel>
      
                  {/* <center>
                    {detailacmd?.accommodationImgs[0] ? (
                      <img
                        className="img-fluid"
                        // style={{ height: "40%", width: "40%" }}

                        src={
                          "https://localhost:5000/images/" +
                          detailacmd?.accommodationImgs[0].image
                        }
                        alt={
                          "https://localhost:5000/images/" +
                          detailacmd?.accommodationImgs[0].image
                        }
                      />
                    ) : (
                      <img
                        src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png"
                        className="img-fluid"
                        alt="noimage"
                      />
                    )}
                  </center> */}

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
                          <td>
                            {// detailacmd?.status == "1" ?
                            detailacmd?.isUsed == 1 ? <>ว่าง</> : <>ไม่ว่าง</>}
                          </td>
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
              </div>

              <div className="col-md-4">
                <div className="room-booking">
                  <h3>การจอง</h3>

                  <Formik
                    initialValues={value}
                    // validationSchema=""
                    onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      console.log(values);
                      AddBooking(values);
                      // // AddCart(values);
                      // AddBooking(value)
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue,
                    }) => (
                      <Form onFinish={handleSubmit}>
                        <div className="">
                          <label htmlFor="date-in">Check In:</label>
                          <RangePicker
                            size="large"
                            placeholder={["Check In", "Check Out"]}
                            onChange={(_, dateString) => {
                              setFieldValue("checkIn", dateString[0]);
                              setFieldValue("checkOut", dateString[1]);
                            }}
                          />
                        </div>

                        <Form.Item>
                          <label htmlFor="date-out">รายละเอียด :</label>

                          <TextArea
                            status={
                              touched.desiredDetail && errors.desiredDetail
                                ? "error"
                                : ""
                            }
                            name="desiredDetail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="รายละเอียด"
                            value={values.desiredDetail}
                            rows={4}
                          />
                        </Form.Item>
                          {// detailacmd?.status == "1" ?
                            detailacmd?.isUsed == 1 ? <Button  htmlType="submit">ยืนยัน</Button> 
                            :
                            <Button disabled htmlType="submit">ยืนยัน</Button>
                            }
                        {/* <Button disabled htmlType="submit">ยืนยัน</Button> */}
                      </Form>
                    )}
                  </Formik>
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

export default AcmdDetail;
