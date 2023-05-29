import { useEffect } from "react";
import swal from "sweetalert";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import {
  Form,
  Input,
  Button,
  // Cascader,
  // DatePicker,
  // InputNumber,
  // TreeSelect,
  // Switch,
  // Checkbox,
  // Upload,
} from "antd";
import {
  useAppDispatch,
} from "../../../../app/store/configureStore";
// import { Result } from "../../../../app/Interfaces/IResponse";
import agent from "../../../../app/api/agent";

import "../privateCss/FdCreate.css";
import { GetServeAll } from "../../../../app/store/serveSlice";
import { ServeValidate } from "../../../../app/Validate/serveValidate";

// const { RangePicker } = DatePicker;
const { TextArea } = Input;

function EditServe() {
  const { id } = useParams<{ id: any }>();
  console.log(`id :${id}`);

  // const { CategoryFd } = useAppSelector((state) => state.fdCategory);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  const value = {
    serveId: state ? state.serveId : "",
    name: state ? state.name : "",
    // fdCategoryId: state ? state.fdCategoryId : "",
    price: state ? state.price : "",
    detail: state ? state.detail : "",
    // fdIsused: 1,
  };


  // console.log(`CategoryFd :${CategoryFd}`)
  console.log(state);

  useEffect(() => {
    // dispatch(GetCategoryFd());
  }, []);

  const submitForm = async (value: any) => {
    console.log(value.serveId)

    let result = await agent.Serve.Update(value);
    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();
    if (result.statusCode == 200) {
      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/serveList")).then(()=>(dispatch(GetServeAll())));
    } else {
      swal({
        title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };

  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <div className="containerFdCreate">
      <div id="contact" className="FdCreateBody">
        <div className="row">
          <div className="col-lg-12 ">
            <div style={{ textAlign: "center" }}>
              <p>
                <h3>บริการ</h3>
              </p>
            </div>

            <Formik
              validationSchema={ServeValidate}
              initialValues={value}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
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

            <Form.Item label="ID">
                    <Input
                      style={{ fontFamily: "Sriracha, cursive" }}
                      disabled={true}
                      type="text"
                      size="large"
                      status={touched.serveId && errors.serveId ? "error" : ""}
                      name="serveId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Id"
                      value={values.serveId}
                    />
                    <ErrorMessage
                      name="serveId"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Item>

                  <Form.Item label="ชื่อ">
                    <Input
                      style={{ fontFamily: "Sriracha, cursive" }}
                      type="text"
                      size="large"
                      status={touched.name && errors.name ? "error" : ""}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ชื่อ"
                      value={values.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Item>

                  {/* <Form.Item label="ประเภท">
                    <Select
                      className="col-md-4"
                      style={{ padding: "7px" }}
                      size="large"
                      placeholder="Search to Select"
                      value={values.fdCategoryId}
                      onBlur={handleBlur}
                      status={
                        touched.fdCategoryId && errors.fdCategoryId
                          ? "error"
                          : ""
                      }
                      onChange={(data) => {
                        setFieldValue("fdCategoryId", data);
                      }}
                      options={CategoryFd?.map((data) => {
                        return {
                          value: data.fdCategoryId,
                          label: data.name,
                        };
                      })}
                    />
                    <ErrorMessage
                      name="fdCategoryId"
                      component="div"
                      className="text-danger text-st"
                    />
                  </Form.Item> */}

                  <Form.Item wrapperCol={{ span: 4 }} label="ราคา">
                    <Input
                      status={touched.price && errors.price ? "error" : ""}
                      name="price"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ราคา"
                      value={values.price}
                    />
                  </Form.Item>

                  <Form.Item label="รายละเอียด ">
                    <TextArea
                      status={
                        touched.detail && errors.detail
                          ? "error"
                          : ""
                      }
                      name="detail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="รายละเอียด"
                      value={values.detail}
                      rows={4}
                    />
                  </Form.Item>

                  {/* <AddImage /> */}

                  <Form.Item label="ยืนยัน">
                    <Button className="col-md-12" htmlType="submit">
                      บันทึก
                    </Button>
                    <Button
                    onClick={
                      () => navigate("/serveList")
                    }
                    className="col-md-12 btn btn-danger">ยกเลิก</Button>
                  </Form.Item>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditServe;
