import { BookOutlined, HomeOutlined, IdcardOutlined, LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Register } from "../app/models/user";
import { fetchAccount, logout } from "../app/store/accountSlice";
import { useAppDispatch } from "../app/store/configureStore";

interface Prop {
  account: Register;
}

export const Usermenu = ({ account }: Prop) => {
  const dispatch = useAppDispatch();


  // const { carts } = useCart();

  useEffect(() => {
    if (!account) dispatch(fetchAccount());
  }, [account,dispatch]);

  const navigate = useNavigate();

  return (
    <div className="tn-right">
      {
      account != null ? 
      (
        <>
          <div className="header-configure-area">
            <div
              style={{ backgroundColor: "#dfa974" }}
              className="language-option "
            >
              &nbsp;
              <img
                src="https://imgs.search.brave.com/Ell7mcCJkiKw_1nJ4Vr-9r8l0FPRS_ZzLi44ylxAqgk/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18zODMyMTAucG5n"
                // src="https://drive.google.com/file/d/17-tmBBJt-oGB5HNtKRfWOGAwPhkQU9Ek/view?usp=sharing"
                alt="icon-user"
              />
              {/* <UserOutlined /> */}
              <span>
                {account.firstName} &nbsp; {account.lastName} &nbsp;
                {/* <i className="fa fa-angle-down"></i> */}
              </span>
              <div className="dropdown flag-dropdown">
                <ul className="dropdown">
                  <li>
                    {/* <a href="#">Zi</a> */}
                    <Link style={{color:"red"}}
                      to={"#"}
                      // className="bk-btn"
                      onClick={() =>
                        Swal.fire({
                          title: "ออกจากระบบหรือไม่?",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3c16e8",
                          cancelButtonColor: "#d33",
                          cancelButtonText: "ยกเลิก",
                          confirmButtonText: "ตกลง",
                        }).then((result) => {
                          if (result.isConfirmed && dispatch(logout())) {
                            Swal.fire(
                              "เรียบร้อย",
                              "ออกสู่ระบบสำเร็จ",
                              "success"
                            );
                          }
                        })
                      }
                    >
                      <LogoutOutlined style={{color:"red"}} />Logout
                    </Link>
                  </li>

                  {/* <li>
                        <Link to={"/acmdBooking"}>การจองที่พัก</Link>
                      </li>
                      <li>
                        <Link to={"/servebooking"}>การขอบริการ</Link>
                      </li>
                      <li>
                        <Link to={"/orderbooking"}>การจอง</Link>
                      </li> */}
                      <li>
                        {/* <Link to={"/profile"}>ข้อมูลทั้งหมด</Link> */}
                        <a style={{color:"#0150EA"}} onClick={() => navigate("/profile", { state: account })}><IdcardOutlined style={{color:"#0150EA"}} />ข้อมูลทั้งหมด</a>

                        
                      </li>
                  {account.role.roleName != "User" ? (
                    <>

                      <li>
                        <Link to={"/userList"}><img src="https://cdn.onlinewebfonts.com/svg/img_325788.png" />Admin</Link>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}

                  {/* <a href="#">Fr</a> */}
                </ul>
              </div>
            </div>
            &nbsp;
            <Button
              //type="default"
              icon={<ShoppingCartOutlined />}
              type="primary" 

              // onClick={() => setModal2Open(true)}
              // loading={loadings[2]}
              onClick={() => navigate("/cart")}
              // color="#00EB5C"
            >
              {/* {carts?.length} */}
            </Button>
            {/* &nbsp; */}
            <Button
              type="primary"
              icon={<HomeOutlined   />}
              style={{color:"#fff",backgroundColor:"#00EB5C"}}
              
              // type="danger" 
              // onClick={() => setModal2Open(true)}
              // loading={loadings[2]}
              onClick={() => navigate("/acmdBooking")}
              color="green"
            >
              {/* {carts?.length} */}
            </Button>
            <Button
              type="default"
              icon={<BookOutlined  />}
              style={{color:"#fff",backgroundColor:"#EBB900"}}
              // type="danger" 
              // onClick={() => setModal2Open(true)}
              // loading={loadings[2]}
              onClick={() => navigate("/servebooking")}
              // color="#00FF0D"
            >
              {/* {carts?.length} */}
            </Button>


            {/* <Modal
            centered
            style={{width:"auto"}}

            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            >
              <CartV2 />
              

            </Modal> */}

           
          </div>
        </>
      ) : (
        <>
          <Link to={"/login"} className="bk-btn">
            เข้าสู่ระบบ
          </Link>
        </>
      )}

      {/* {account != null ? (
        <>
          <Link
            to={"#"}
            className="bk-btn"
            onClick={() =>
              Swal.fire({
                title: "ออกจากระบบหรือไม่?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3c16e8",
                cancelButtonColor: "#d33",
                cancelButtonText: "ยกเลิก",
                confirmButtonText: "ตกลง",
              }).then((result) => {
                if (result.isConfirmed && dispatch(logout())) {
                  Swal.fire("เรียบร้อย", "ออกสู่ระบบสำเร็จ", "success");
                }
              })
            }
          >
            ออกจากระบบ
          </Link>{" "}
          {account.firstName} {account.lastName}
          
          {account.roleId == "2"}
        </>
      ) : (
        <>
          <Link to={"/login"} className="bk-btn">
            เข้าสู่ระบบ
          </Link>
        </>
      )} */}

      {/* <a href="#" className="bk-btn">
                      จองเลย
                    </a> */}
      {/* <div className="language-option">
                      <img src="img/flag.jpg" alt="" />
                      <span>
                        EN <i className="fa fa-angle-down"></i>
                      </span>
                      <div className="flag-dropdown">
                        <ul>
                          <li>
                            <a href="#">Zi</a>
                          </li>
                          <li>
                            <a href="#">Fr</a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    
    </div>




  );
};

export default Usermenu;