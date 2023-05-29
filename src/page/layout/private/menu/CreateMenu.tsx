import { useEffect } from "react";
import swal from "sweetalert";
import {  useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import {
  Form,
  Input,
  Button,
  Select,
  // Cascader,
  // DatePicker,
  // InputNumber,
  // TreeSelect,
  // Switch,
  // Checkbox,
  // Upload,
} from "antd";
import { MenuValidate } from "../../../../app/Validate/menuValidate";
import { useAppDispatch, useAppSelector } from "../../../../app/store/configureStore";
// import { Result } from "../../../../app/Interfaces/IResponse";
import { GetCategoryFd } from "../../../../app/store/FdCategorySilce";
import agent from "../../../../app/api/agent";

import "../privateCss/FdCreate.css"
// import AddImage from "./AddImage";

// const { RangePicker } = DatePicker;
const { TextArea } = Input;

function CreateMenu() {
  const { CategoryFd } = useAppSelector((state) => state.fdCategory);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(`CategoryFd :${CategoryFd}`)

  const value = {
    fdName: "",
    fdCategoryId: "",
    fdPrice: "",
    fdDescription: "",
    fdIsused: 1,
  };

  useEffect(() => {
    dispatch(GetCategoryFd());

  }, []);

  const submitForm = async (value: any) => {
    let result = await agent.FoodDrink.createFd(value)

    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();
    if (result.statusCode == 200) {
      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/fdList"));
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
                <h3>เมนูอาหาร</h3>
              </p>
            </div>

            <Formik
              validationSchema={MenuValidate}
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
                setFieldValue,
              }) => (
                <Form
                  onFinish={handleSubmit}
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  // disabled={componentDisabled}
                  style={{ maxWidth: 600 }}
                >
                  <Form.Item label="ชื่อ">
                    <Input
                      style={{ fontFamily: "Sriracha, cursive" }}
                      type="text"
                      size="large"
                      status={touched.fdName && errors.fdName ? "error" : ""}
                      name="fdName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ชื่อ"
                      value={values.fdName}
                    />
                    <ErrorMessage
                      name="fdName"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Item>

                  <Form.Item label="ประเภท">
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
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 4 }} label="ราคา">
                    <Input
                      status={touched.fdPrice && errors.fdPrice ? "error" : ""}
                      name="fdPrice"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ราคา"
                      value={values.fdPrice}
                    />
                  </Form.Item>

                  <Form.Item label="รายละเอียด ">
                    <TextArea
                      status={
                        touched.fdDescription && errors.fdDescription
                          ? "error"
                          : ""
                      }
                      name="fdDescription"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="รายละเอียด"
                      value={values.fdDescription}
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
                      () => navigate("/fdList")
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

export default CreateMenu;
