import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import './home.css'
import { Carousel } from 'antd';
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchCartAsync } from "../../app/store/cartSlice";
import Footer from "../../components/Footer";

// import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const { account } = useAppSelector(state => state.account);
  const dispatch = useAppDispatch();
  // dispatch(fetchCartAsync(account?.accountId));

  useEffect(() => {
    //  if (!carts) 
    dispatch(fetchCartAsync(account?.accountId));
    
    
    //  dispatch(itemPlusCartAsync(carts.))
    
    //  console.log({account})
    }, [dispatch,account]);

    

  


  return (
    <div>
      {/* <NavbarV2 /> */}
      <Navbar />
      {/* <Header /> */}
      <div className="services-section">
      



        <Carousel autoplay>
          <center>
            <img
              className="responsive-home-image"
              src="https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/8b24efe3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              alt=""
            />
          </center>
          <center>
            <img
              className="responsive-home-image"
              src="
              https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/ea68a5a7.jpg?impolicy=resizecrop&rw=1200&ra=fit
              "
              alt=""
            />
          </center>

          <center>
            <img
              className="responsive-home-image"
              src="
              https://s359.kapook.com/pagebuilder/d24d175e-45e3-4b12-9e22-666c44043686.jpg
              "
              alt=""
            />
          </center>
          <center>
            <img
              className="responsive-home-image"
              src="
              https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/e43b53f0.jpg?impolicy=resizecrop&rw=1200&ra=fit
              "
              alt=""
            />
          </center>
        </Carousel>
      </div>

      {/* <!-- About Us Section Begin --> */}
      <section className="aboutus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>
                    Intercontinental LA <br />
                    Westlake Hotel
                  </h2>
                </div>
                <p className="f-para">
                  Sona.com is a leading online accommodation site. We’re
                  passionate about travel. Every day, we inspire and reach
                  millions of travelers across 90 local websites in 41
                  languages.
                </p>
                <p className="s-para">
                  So when it comes to booking the perfect hotel, vacation
                  rental, resort, apartment, guest house, or tree house, we’ve
                  got you covered.
                </p>
                <a href="#" className="primary-btn about-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-pic">
                <div className="row">
                  <div className="col-sm-6">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/b3/15/13/photo7jpg.jpg" alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src="https://pix10.agoda.net/hotelImages/1730437/-1/e08df229e8584956623a269aabe29973.jpg?ca=7&ce=1&s=414x232" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Section End --> */}

      {/* <!-- Services Section End --> */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>What We Do</span>
                <h2>Discover Our Services</h2>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-036-parking"></i>
                <h4>Travel Plan</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-033-dinner"></i>
                <h4>Catering Service</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-026-bed"></i>
                <h4>Babysitting</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-024-towel"></i>
                <h4>Laundry</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-044-clock-1"></i>
                <h4>Hire Driver</h4>
                <p>
                บริการเช็คอิน 24 ชั่วโมง
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna. */}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-012-cocktail"></i>
                <h4>Bar & Drink</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}

      {/* <!-- Home Room Section Begin --> */}
      <section className="hp-room-section">
        <div className="container-fluid">
          <div className="hp-room-items">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b1.jpg"
                >
                  <img className="hp-room-item set-bg img-blur-home-event" src="https://s359.kapook.com/pagebuilder/3ee4b0d2-3070-4ec5-b830-da8ae2a8e570.jpg" alt="" />
                  <div className="hr-text">
                    <h3>Double Room</h3>
                    <h2>
                      199$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg "
                  data-setbg="https://nps.dnp.go.th/img/file-0157013001594096324.jpg"
                >
                  <img  className="hp-room-item set-bg img-blur-home-event" src="https://nps.dnp.go.th/img/file-0157013001594096324.jpg" alt="" />
                  <div className="hr-text">
                    <h3>พื้นที่กางเต็นท์</h3>
                    <h2>
                      159$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="
                  https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/8b24efe3.jpg?impolicy=resizecrop&rw=1200&ra=fit
                  "
                  // data-setbg="src/assets/img/room/room-b3.jpg"
                >
                  <img className="hp-room-item set-bg img-blur-home-event" src="https://www.77kaoded.com/wp-content/uploads/2017/12/24312795_378902622566382_2541218222243337743_n-1024x683.jpg" alt="" />
                  <div className="hr-text">
                    <h3>Deluxe Room</h3>
                    <h2>
                      198$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b4.jpg"
                >
                  <img className="hp-room-item set-bg img-blur-home-event" src="https://api.soimilk.com/sites/default/files/u31105/kempinspa_px4.jpg" alt="" />
                  <div className="hr-text">
                    <h3>สปา</h3>
                    <h2>
                      299฿<span>/ครั้ง</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Home Room Section End --> */}

      {/* <!-- Testimonial Section Begin --> */}
      {/* <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Testimonials</span>
                <h2>What Customers Say?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="testimonial-slider owl-carousel">
                <div className="ts-item">
                  <p>
                    After a construction project took longer than expected, my
                    husband, my daughter and I needed a place to stay for a few
                    nights. As a Chicago resident, we know a lot about our city,
                    neighborhood and the types of housing options available and
                    absolutely love our vacation at Sona Hotel.
                  </p>
                  <div className="ti-author">
                    <div className="rating">
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star-half_alt"></i>
                    </div>
                    <h5> - Alexander Vasquez</h5>
                  </div>
                  <img src="img/testimonial-logo.png" alt="" />
                </div>
                <div className="ts-item">
                  <p>
                    After a construction project took longer than expected, my
                    husband, my daughter and I needed a place to stay for a few
                    nights. As a Chicago resident, we know a lot about our city,
                    neighborhood and the types of housing options available and
                    absolutely love our vacation at Sona Hotel.
                  </p>
                  <div className="ti-author">
                    <div className="rating">
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star-half_alt"></i>
                    </div>
                    <h5> - Alexander Vasquez</h5>
                  </div>
                  <img src="img/testimonial-logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Blog Section Begin --> */}
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Hotel News</span>
                <h2>Our Blog & Event</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-1.jpg"
              >
                <img className="blog-item set-bg" src="https://resource.nationtv.tv/resource/photo_news/2014/12/28/1024_5c59dagieeh5ahidi8bi8.jpg?x-image-process=style/lg" alt="" />
                <div className="bi-text">
                  <span className="b-tag">Travel Trip</span>
                  <h4>
                    <a href="#">ถนนนั่งยองทองผาภูมิ</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt"></i> 15th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-2.jpg"
                
              >
                <img className="blog-item set-bg" src="https://kanchanaburi.mots.go.th/ewtadmin/ewt/kanchanaburi/images/article/news658/n_20190729132752_658_6.jpg" alt="" />
                <div className="bi-text">
                  <span className="b-tag">Camping</span>
                  <h4>
                    <a href="#">วันผลไม้</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt"></i> 15th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-3.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Event</span>
                  <h4>
                    <a href="#">Copper Canyon</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt"></i> 21th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="blog-item small-size set-bg"
                data-setbg="img/blog/blog-wide.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Event</span>
                  <h4>
                    <a href="#">
                      Trip To Iqaluit In Nunavut A Canadian Arctic City
                    </a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt"></i> 08th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="blog-item small-size set-bg"
                data-setbg="img/blog/blog-10.jpg"
              >
                <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2020/07/1-800x534.jpg" alt="" />
                <div className="bi-text">
                  <span className="b-tag">Travel</span>
                  <h4>
                    <a href="#">Traveling To Barcelona</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt"></i> 12th April, 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End --> */}

      {/* <!-- Footer Section Begin --> */}

      <Footer />


      {/* <!-- Footer Section End --> */}

      {/* <!-- Search model Begin --> */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close"></i>
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>

      {/* <!-- Search model end --> */}


    </div>
  );
}

export default Home;
