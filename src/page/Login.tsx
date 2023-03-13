import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/store/configureStore";
import swal from "sweetalert";
import { loginAccount } from "../app/store/accountSlice";
import {  Input } from "antd";
import { LoginValidate } from "./AccontValidate";
const value = { email: "", password: "" };



function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submitForm = async (data: any) => {
    const result = await dispatch(loginAccount(data)).unwrap();
    console.log(result.data)
    if (result.msg === "OK") {
      swal({
        title: "เข้าสู่ระบบสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/home"));
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };
  return (

    <div className="container-wrap ">
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
            <h3 className="mb-3">เข้าสู่ระบบ</h3>

            
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
            
           
            {/* <div className="d-grid">
              <Link  to="/home"
               onClick={()=>handleSubmit()}
              className="btn btn-primary"/>

            

            
                
             
            </div> */}
            <p className="forgot-password text-right">
            เป็นสมาชิกหรือยัง <Link to={"/register"} >ลงทะเบียน?</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}

export default Login;
