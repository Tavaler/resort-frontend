import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";

// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch } from "../app/store/configureStore";


import { Link,useNavigate } from "react-router-dom";
import { loginAccount } from "../app/store/accountSlice";
import swal from "sweetalert";
import { LoginValidate } from "./AccontValidate";
import { ErrorMessage, Form, Formik } from "formik";
import { Input } from "antd";

const value = { email: "", password: "" };

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();



// export default function SignInSide() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const submitForm = async (data: any) => {
//     const result = await dispatch(loginAccount(data)).unwrap();
//     if (result.msg === "OK") {
//       swal({
//         title: "เข้าสู่ระบบสำเร็จ",
//         icon: "success",
//         buttons: [false, "ตกลง"],
//       }).then(() => navigate("/rooms"));
//     } else {
//       swal({
//         title: result.message,
//         icon: "warning",
//         buttons: [false, "ตกลง"],
//       });
//     }
//   };

  export default function SignInSide() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const submitForm = async (data: any) => {
      // console.log(data)
      const result = await dispatch(loginAccount(data)).unwrap();
      console.log(result)
      if (result.msg === 'OK') {
        
        swal({
          title: "เข้าสู่ระบบสำเร็จ",
          icon: "success",
          buttons: [false, "ตกลง"],
        }).then(() => navigate("/rooms"));
      }
      // if (result.msg === "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง") {
        
      //   swal({
      //     title: "รหัสไม่ถูกต้องs",
      //     icon: "warning",
      //     buttons: [false, "ตกลง"],
      //   });
      // }
      
      else {
        swal({
          // title: result.message,
          title: "รหัสไม่ถูกต้อง",
          icon: "warning",
          buttons: [false, "ตกลง"],
        });
        // Swal.fire({
        //   icon: 'warning',
        //   title: result.message,
        //   text: 'Something went wrong!',
        //   // footer: '<a href="">Why do I have this issue?</a>'
        // })
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
              เข้าสู่ระบบ
            </Typography>
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
              }) => (
                <Form onSubmit={handleSubmit} style={{ backgroundColor: "" }}>
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
                    <button type="submit" className="btn btn-primary" >
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
                      <Link to={"/register"}> 
                      ลงทะเบียน?
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
  );
}
