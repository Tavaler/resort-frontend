import "./navbarV2.css"

function NavbarV2() {
  return (
        // <div className="dashboard-header">
        //     <nav className="navbar navbar-expand-lg bg-white fixed-top">
        //         <a className="navbar-brand" href="#">BBBOOTSTRAP</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse " id="navbarSupportedContent">
        //             <ul className="navbar-nav ml-auto navbar-right-top">
        //                 <li className="nav-item">
        //                     <div id="custom-search" className="top-search-bar">
        //                         <input className="form-control" type="text" placeholder="Search.."/>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item dropdown notification">
        //                     <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span className="indicator"></span></a>
        //                     <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
        //                         <li>
        //                             <div className="notification-title"> Notification</div>
        //                             <div className="notification-list">
        //                                 <div className="list-group">
        //                                     <a href="#" className="list-group-item list-group-item-action active">
        //                                         <div className="notification-info">
        //                                             <div className="notification-list-user-img"><img src="https://img.icons8.com/office/100/000000/administrator-female.png" alt="" className="user-avatar-md rounded-circle"/></div>
        //                                             <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Hukonah</span>accepted your invitation to join the team.
        //                                                 <div className="notification-date">2 min ago</div>
        //                                             </div>
        //                                         </div>
        //                                     </a>
        //                                     <a href="#" className="list-group-item list-group-item-action">
        //                                         <div className="notification-info">
        //                                             <div className="notification-list-user-img"><img src="https://img.icons8.com/color/48/000000/administrator-female.png" alt="" className="user-avatar-md rounded-circle"/></div>
        //                                             <div className="notification-list-user-block"><span className="notification-list-user-name">John Sammy</span>updated the email address
        //                                                 <div className="notification-date">2 days ago</div>
        //                                             </div>
        //                                         </div>
        //                                     </a>
        //                                     <a href="#" className="list-group-item list-group-item-action">
        //                                         <div className="notification-info">
        //                                             <div className="notification-list-user-img"><img src="https://img.icons8.com/color/100/000000/name.png" alt="" className="user-avatar-md rounded-circle" /></div>
        //                                             <div className="notification-list-user-block"><span className="notification-list-user-name">Kioh Samso</span> is watching your main repository
        //                                                 <div className="notification-date">2 min ago</div>
        //                                             </div>
        //                                         </div>
        //                                     </a>
                                           
        //                                 </div>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="list-footer"> <a href="#">View all notifications</a></div>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item dropdown connection">
        //                     <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th"></i> </a>
        //                     <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
        //                         <li className="connection-list">
        //                             <div className="row">
        //                                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                     <a href="#" className="connection-item"><img src="https://img.icons8.com/nolan/100/000000/github.png" alt="" /> <span>Github</span></a>
        //                                 </div>
        //                                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                     <a href="#" className="connection-item"><img src="https://img.icons8.com/color/100/000000/dribbble.png" alt="" /> <span>Dribbble</span></a>
        //                                 </div>
        //                                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                     <a href="#" className="connection-item"><img src="https://img.icons8.com/color/100/000000/dropbox.png" alt="" /> <span>Dropbox</span></a>
        //                                 </div>
        //                             </div>
        //                             <div className="row">
        //                                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                     <a href="#" className="connection-item"><img src="https://img.icons8.com/color/100/000000/bitbucket.png" alt="" /> <span>Bitbucket</span></a>
        //                                 </div>
        //                                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                     <a href="#" className="connection-item"><img src="https://img.icons8.com/color/100/000000/remove-ads.png" alt="" /><span>Facebook ads</span></a>
        //                                 </div>
        //                                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                     <a href="#" className="connection-item"><img src="https://img.icons8.com/wired/64/000000/slack.png" alt="" /> <span>Slack</span></a>
        //                                 </div>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="conntection-footer"><a href="#">More</a></div>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item dropdown nav-user">
        //                     <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="https://img.icons8.com/dusk/100/000000/user-female-circle.png" alt="" className="user-avatar-md rounded-circle"/></a>
        //                     <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
        //                         <div className="nav-user-info">
        //                             <h5 className="mb-0 text-white nav-user-name">Tikoha Samga</h5>
        //                             <span className="status"></span><span className="ml-2">Available</span>
        //                         </div>
        //                         <a className="dropdown-item" href="#"><i className="fas fa-user mr-2"></i>Account</a>
        //                         <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2"></i>Setting</a>
        //                         <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2"></i>Logout</a>
        //                     </div>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
        <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
                <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                </a>
            </div>
            <div className="col-lg-9">
                <div className="row gx-0 bg-white d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i className="fa fa-envelope text-primary me-2"></i>
                            <p className="mb-0">info@example.com</p>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2">
                            <i className="fa fa-phone-alt text-primary me-2"></i>
                            <p className="mb-0">+012 345 6789</p>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="d-inline-flex align-items-center py-2">
                            <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                            <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                            <a className="" href=""><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="room.html" className="nav-item nav-link">Rooms</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="booking.html" className="dropdown-item">Booking</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="https://htmlcodex.com/hotel-html-template-pro" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default NavbarV2