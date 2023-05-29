import { ErrorMessage, Form, Formik } from "formik";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { registerAccount } from "../app/store/accountSlice";
import { useAppDispatch } from "../app/store/configureStore";
import { RegisterValidate } from "./AccontValidate";
import { Input } from "antd";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, createTheme, CssBaseline, Grid, Paper, ThemeProvider, Typography } from "@mui/material";

const value = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  tel: "",
  roleId: 1,
};

const theme = createTheme();


function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submitForm = async (data: any) => {
    const result = await dispatch(registerAccount(data)).unwrap();
    if (result.message === "สมัครสมาชิกสำเร็จ") {
      swal({
        title: "สมัครสมาชิกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/login"));
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundImage:
            "url(https://images.trvl-media.com/lodging/20000000/19820000/19812400/19812313/8b24efe3.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          สมัครสมาชิก
          </Typography>
          <Formik
            validationSchema={RegisterValidate}
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
            }) => (
              <Form onSubmit={handleSubmit} style={{ backgroundColor: "" }}>
                <div className="mb-3">
              <label>ชื่อ</label>
              <Input
                style={{ fontFamily: "Sriracha, cursive" }}
                type="text"
                size="large"
                status={touched.firstName && errors.firstName ? "error" : ""}
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="ชื่อ"
                value={values.firstName}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label>นามสกุล</label>
              <Input
                style={{ fontFamily: "Sriracha, cursive" }}
                type="text"
                size="large"
                status={touched.lastName && errors.lastName ? "error" : ""}
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="นามสกุล"
                value={values.lastName}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>
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
            
            <div className="mb-3">
              <label>เบอร์โทรศัพท์</label>
              <Input
                style={{ fontFamily: "Sriracha, cursive" }}
                type="tel"
                size="large"
                status={
                  touched.tel && errors.tel ? "error" : ""
                }
                name="tel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tel}
                placeholder="เบอร์โทรศัพท์"
              />
              <ErrorMessage
                name="tel"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                ยืนยัน
              </button>
            </div>
                <Grid container>
                  <Grid item left={20}>
                    
                      เป็นสมาชิกหรือยัง?
                      {/* <Link to={"/register"}>ลงทะเบียน?</Link> */}
                    
                    {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
                  </Grid>
                  <Grid item>
                    <Link to={"/login"}> 
                    เข้าสู่ระบบ?
                    </Link>
                  </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>

    
    
    // <div className="container-wrap">
    // {/* // <div className="container col-lg-4 col-md-6"> */}
    // <div className=" login-form col-lg-4 col-md-6">

    //   <Formik
    //     validationSchema={LoginValidate}
    //     initialValues={value}
    //     onSubmit={async (values) => {
    //       await new Promise((r) => setTimeout(r, 500));
    //       submitForm(values);
    //     }}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       isSubmitting,
    //     }) => (
    //       <Form onSubmit={handleSubmit} style={{ backgroundColor: "" }}>
    //         <h3 className="mb-3">สมัครสมาชิก</h3>

            
    //         <p className="forgot-password text-right">
    //         สมัครสมาชิกเรียบร้อยแล้ว <Link to={"/"} >เข้าสู่ระบบ?</Link>
    //         </p>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
    // </div>
  );
}

export default Register;
