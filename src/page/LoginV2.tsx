import { ErrorMessage, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount, registerAccount } from "../app/store/accountSlice";
import { LoginValidate } from "./AccontValidate";
import swal from "sweetalert";

import { useAppDispatch } from "../app/store/configureStore";
import { Input } from "antd";

const value = { email: "", password: "" };


function LoginV2() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submitForm = async (data: any) => {
    const result = await dispatch(loginAccount(data)).unwrap();
    if (result.message === "สมัครสมาชิกสำเร็จ") {
      swal({
        title: "สมัครสมาชิกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/"));
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };
  
  return (
    <div className="container-wrap">
    {/* // <div className="container col-lg-4 col-md-6"> */}
    <div className=" login-form col-lg-4 col-md-6">

      <Formik
        validationSchema={LoginValidate}
        initialValues={value}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
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
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} style={{ backgroundColor: "" }}>
            <h3 className="mb-3">สมัครสมาชิก</h3>

            <div className="mb-3">
              <label>อีเมลล์</label>
              <Input
                style={{ fontFamily: "Sriracha, cursive" }}
                type="text"
                size="large"
                status={touched.email && errors.email ? "error" : ""}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="อีเมลล์"
                value={values.email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label>รหัสผ่าน</label>
              <Input.Password
                style={{ fontFamily: "Sriracha, cursive" }}
                type="password"
                size="large"
                status={
                  touched.password && errors.password ? "error" : ""
                }
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="รหัสผ่าน"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                ยืนยัน
              </button>
            </div>
            <p className="forgot-password text-right">
            สมัครสมาชิกเรียบร้อยแล้ว <Link to={"/"} >เข้าสู่ระบบ?</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}

export default LoginV2;
