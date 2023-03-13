import React from "react";
import Navbar from "../../components/Navbar";
// import '../../assets/img/hero'

function Home() {
  return (







    <div>
      <Navbar />

      {/* <!-- Hero Section Begin --> */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1>Sona A Luxury Hotel</h1>
                <p>
                  Here are the best hotel booking sites, including
                  recommendations for international travel and for finding
                  low-priced hotel rooms.
                </p>
                <a href="#" className="primary-btn">
                  Discover Now
                </a>
              </div>
            </div>

            {/* ----------------------------------------------------------------------------- */}

            <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
              <div className="booking-form">
                <h3>Booking Your Hotel</h3>
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
                      <option value="">2 Adults</option>
                      <option value="">3 Adults</option>
                    </select>
                  </div>
                  <div className="select-option">
                    <label htmlFor="room">Room:</label>
                    <select id="room">
                      <option value="">1 Room</option>
                      <option value="">2 Room</option>
                    </select>
                  </div>
                  <button type="submit">Check Availability</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-slider owl-carousel">
          <div className="hs-item set-bg">
            <img
              src="https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/8b24efe3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              alt=""
            />
          </div>
          <div className="hs-item set-bg" data-setbg="img/hero/hero-2.jpg">
            <img src="https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/8b24efe3.jpg?impolicy=resizecrop&rw=1200&ra=fit" />
          </div>
          <div className="hs-item set-bg" data-setbg="img/hero/hero-3.jpg">
            <img
              src="https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/8b24efe3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}

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
                    <img src="img/about/about-1.jpg" alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src="img/about/about-2.jpg" alt="" />
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
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
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b2.jpg"
                >
                  <div className="hr-text">
                    <h3>Premium King Room</h3>
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
                  data-setbg="img/room/room-b3.jpg"
                >
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
                  <div className="hr-text">
                    <h3>Family Room</h3>
                    <h2>
                      299$<span>/Pernight</span>
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
      <section className="testimonial-section spad">
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
      </section>
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
                <div className="bi-text">
                  <span className="b-tag">Travel Trip</span>
                  <h4>
                    <a href="#">Tremblant In Canada</a>
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
                <div className="bi-text">
                  <span className="b-tag">Camping</span>
                  <h4>
                    <a href="#">Choosing A Static Caravan</a>
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
      <footer className="footer-section">
        <div className="container">
          <div className="footer-text">
            <div className="row">
              <div className="col-lg-4">
                <div className="ft-about">
                  <div className="logo">
                    <a href="#">
                      <img src="img/footer-logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    We inspire and reach millions of travelers
                    <br /> across 90 local websites
                  </p>
                  <div className="fa-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="ft-contact">
                  <h6>Contact Us</h6>
                  <ul>
                    <li>(12) 345 67890</li>
                    <li>info.colorlib@gmail.com</li>
                    <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="ft-newslatter">
                  <h6>New latest</h6>
                  <p>Get the latest updates and offers.</p>
                  <form action="#" className="fn-form">
                    <input type="text" placeholder="Email" />
                    <button type="submit">
                      <i className="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <ul>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Environmental Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="co-text">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
