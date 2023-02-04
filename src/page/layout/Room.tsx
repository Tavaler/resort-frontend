import React from 'react'
import Navbar from '../../components/Navbar'

function Room() {
  return (
    <> 
    <Navbar />

        {/* <!-- Breadcrumb Section Begin --> */}
    <div className="breadcrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>Our Rooms</h2>
                        <div className="bt-option">
                            <a href="./home.html">หน้าหลัก</a>
                            <span>ห้องท้ังหมด</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Rooms Section Begin --> */}
    <section className="rooms-section spad">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-1.jpg" alt="" />
                        <div className="ri-text">
                            <h4>Premium King Room</h4>
                            <h3>159฿<span>/ต่อคืน</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">ขนาด:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 3</td>
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
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-2.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Deluxe Room</h4>
                            <h3>159฿<span>/ต่อคืน</span></h3>
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
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-3.jpg" alt="" />
                        <div className="ri-text">
                            <h4>Double Room</h4>
                            <h3>159฿<span>/ต่อคืน</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 2</td>
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
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-4.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Luxury Room</h4>
                            <h3>159฿<span>/ต่อคืน</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 1</td>
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
                            <a href="#" className="primary-btn">รายละเอียด</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-5.jpg" alt="" />
                        <div className="ri-text">
                            <h4>Room With View</h4>
                            <h3>159฿<span>/ต่อคืน</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 1</td>
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
                            <a href="#" className="primary-btn">รายละเอียด</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-6.jpg" alt="" />
                        <div className="ri-text">
                            <h4>Small View</h4>
                            <h3>159฿<span>/ต่อคืน</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 2</td>
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
                            <a href="#" className="primary-btn">รายละเอียด</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Rooms Section End --> */}
    </>
  )
}

export default Room