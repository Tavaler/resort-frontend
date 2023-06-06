import moment from "moment-timezone";
import { useEffect } from "react";
import OrderAll from "../orderAll/orderAll";
import LayoutPubilc from "../Layout/LayoutPubilc";
import { useLocation } from "react-router-dom";
import { 
  // ErrorMessage,
   Formik } from "formik";
import { Form, Input } from "antd";
import agent from "../../../../app/api/agent";
import swal from "sweetalert";
// import { fetchAccount } from "../../../../app/store/accountSlice";
import { UpdateAccountValidate } from "../../../AccontValidate";

// import moment from "moment-timezone";

function Profile() {
  // const { id } = useParams<{ id: any }>();
  // console.log(`id :${id}`);

  // const { AcmdType } = useAppSelector((state) => state.acmdType);

  const { state } = useLocation();

  const value = {
    accountId: state ? state.accountId : "",
    firstName: state ? state.firstName : "",
    lastName: state ? state.lastName : "",
    // quantity: state ? state.quantity : "",
    tel: state ? state.tel : "",
    roleId: state ? state.roleId : "",

    // isUsed: 1,
    // fdIsused: 1,
  };

  // console.log(`CategoryFd :${CategoryFd}`)
  console.log(state);

  useEffect(() => {
    // dispatch(GetAcmdType());
  }, []);

  // const dateTime = moment();
  const { account } = JSON.parse(localStorage.getItem("account")!);
  // const {account.dateTime}

  const submitForm = async (value: any) => {
    console.log(value);
    let result = await agent.Account.update(value);
    console.log(result);

    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();
    if (result.statusCode == 200) {
      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(
        ()=>window.location.replace("/")
        // () => dispatch(fetchAccount())
      );
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };

  return (
    <LayoutPubilc>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://imgs.search.brave.com/Ell7mcCJkiKw_1nJ4Vr-9r8l0FPRS_ZzLi44ylxAqgk/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18zODMyMTAucG5n"
              />
              <span className="font-weight-bold">
                {account.firstName} {account.lastName}{" "}
              </span>
              <span className="text-black-50">{account.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <Formik
                validationSchema={UpdateAccountValidate}
                initialValues={value}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  // console.log("asdsd");
                  console.log(values);
                  submitForm(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <Form
                    onFinish={handleSubmit}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // disabled={componentDisabled}
                    style={{ maxWidth: 600 }}
                  >
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <label>ID</label>
                        <Input
                          // style={{ fontFamily: "Sriracha, cursive" }}
                          disabled={true}
                          type="text"
                          size="large"
                          status={
                            touched.accountId && errors.accountId ? "error" : ""
                          }
                          name="accountId"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // placeholder="Id"
                          value={values.accountId}
                        />
                        {/* <ErrorMessage
                      name="accommodationId"
                      component="div"
                      className="text-danger"
                    /> */}
                      </div>
                      <div className="col-md-6">
                        <label className="labels">ชื่อ</label>
                        <Input
                          // style={{ fontFamily: "Sriracha, cursive" }}
                          type="text"
                          size="large"
                          status={
                            touched.firstName && errors.firstName ? "error" : ""
                          }
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="ชื่อ"
                          value={values.firstName}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="labels">นามสกุล</label>
                        <Input
                          // style={{ fontFamily: "Sriracha, cursive" }}
                          type="text"
                          size="large"
                          status={
                            touched.lastName && errors.lastName ? "error" : ""
                          }
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="นามสกุล"
                          value={values.lastName}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">เบอร์โทรศัพท์</label>
                        <Input
                          status={touched.tel && errors.tel ? "error" : ""}
                          name="tel"
                          type="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="เบอร์โทรศัพท์"
                          value={values.tel}
                        />
                        
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary profile-button"
                        type="submit"
                      >
                        บันทึก
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">สถานะบัญชี</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={true}
                  placeholder={account.role.roleName}
                  value=""
                />
              </div>{" "}
              <br />
              <div className="col-md-12">
                <label className="labels">
                  {/* {account.createTime} */}
                  วันที่สมัครบัญชี
                  {/* {moment
                .utc(account.createTime)
                .tz("Asia/Bangkok")
                .format("DD-MM-YYYY HH:mm:ss")} */}
                  {/* {new Date(revies.created.dateTimeEnd).toLocaleString("th-TH", {
              year: "numeric",
              month: "numeric",
              day: "2-digit",
            })} */}
                </label>
                <input
                  disabled={true}
                  type="text"
                  className="form-control"
                  placeholder={moment
                    .utc(account.createTime)
                    .tz("Asia/Bangkok")
                    .format("DD-MM-YYYY HH:mm:ss")}
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderAll />
    </LayoutPubilc>
  );
}

export default Profile;
