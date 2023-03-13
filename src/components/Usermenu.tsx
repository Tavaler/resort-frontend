import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect } from "react";
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

  useEffect(() => {
    if (!account) dispatch(fetchAccount());
  }, [account]);
  console.log(account);

  const navigate = useNavigate();

  return (
    <div className="tn-right">
      {/* <div className="top-social">
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
      </div> */}

      {account != null ? (
        <>
          <div className="header-configure-area">
            <div
              style={{ backgroundColor: "#dfa974" }}
              className="language-option "
            >
              &nbsp;
              <img
                src="https://imgs.search.brave.com/Ell7mcCJkiKw_1nJ4Vr-9r8l0FPRS_ZzLi44ylxAqgk/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18zODMyMTAucG5n"
                alt=""
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
                    <Link
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
                      ออกจากระบบ
                    </Link>
                  </li>

                  {account.roleId != "1" ? (
                    <>
                      <li>
                        <Link to={"/createmenu"}>Create Menu</Link>
                      </li>
                      <li>
                        <Link to={"/fdList"}>fdList</Link>
                      </li>
                      <li>
                        <Link to={"/acmdList"}>acmdList</Link>
                      </li>
                    </>
                  ) : (
                    
                    <></>
                  )}

                  {/* <a href="#">Fr</a> */}
                </ul>
              </div>
            </div>
            {"  "}
            <Button
              type="default"
              icon={<ShoppingCartOutlined />}
              // loading={loadings[2]}
              onClick={() => navigate("/cart")}
              // color="#fff"
            ></Button>
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
