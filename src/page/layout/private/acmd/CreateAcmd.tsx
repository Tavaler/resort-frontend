import { useEffect } from "react";
import swal from "sweetalert";
import {  useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  // Cascader,
  // DatePicker,
  // InputNumber,
  // TreeSelect,
  // Switch,
  // Checkbox,
  // Upload,
} from "antd";
import { useAppDispatch, useAppSelector } from "../../../../app/store/configureStore";
// import { Result } from "../../../../app/Interfaces/IResponse";
import agent from "../../../../app/api/agent";

import "../privateCss/FdCreate.css"
import { AcmdValidate } from "../../../../app/Validate/acmdValidate";
import { GetAcmdType } from "../../../../app/store/AcmdTypeSilce";

// const { RangePicker } = DatePicker;
const { TextArea } = Input;

function CreateAcmd() {
  const { AcmdType } = useAppSelector((state) => state.acmdType);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(AcmdType)

  const value = {
    name: "",
    accommodationTypeId: "",
    quantity: 4,
    price: 2800,
    detail: "",
    status:"1",
    isUsed: 1,
  };

  // accommodationId:     string;
  //  name:                string;
  //   quantity:            number;
  //   price:               number;
  //   detail:              string;
  //   isUsed:              number;
  //   createTime:          Date;
  //   accommodationTypeId: string;
  //   accommodationType:   AccommodationType;
  //   accommodationImgs:   AccommodationImg[];

  useEffect(() => {
    dispatch(GetAcmdType());

  }, []);

  const submitForm = async (value: any) => {
    console.log(`data :${value}`)
    let result = await agent.Accommodation.createAcmd(value)

    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();
    if (result.statusCode == 200) {
      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/acmdList"));
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
            <div style={{textAlign:"center"}}>
              <p>
              <h3>ที่พัก</h3>
              </p>
            </div>

            <Formik
              validationSchema={AcmdValidate}
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
                  <Form.Item  label="ชื่อ">
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

                  <Form.Item  label="ประเภท">
                  <Select
                  
                  className="col-md-4"
                  style={{ padding: "7px" }}
                  
                  size="large"
                  placeholder="Search to Select"
                  value={values.accommodationTypeId}
                  onBlur={handleBlur}
                  status={
                    touched.accommodationTypeId && errors.accommodationTypeId
                      ? "error"
                      : ""
                  }
                  onChange={(data) => {
                    setFieldValue("accommodationTypeId", data);
                  }}
                  options={AcmdType?.map((data) => {
                    return {
                      value: data.accommodationTypeId,
                      label: data.name,
                    };
                  })}
                />
                <ErrorMessage
                  name="accommodationTypeId"
                  component="div"
                  className="text-danger text-st"
                />

                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 4 }} label="ราคา">
                    <InputNumber
                      status={touched.price && errors.price ? "error" : ""}
                      name="price"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="ราคา"
                      value={values.price}
                    />
                  </Form.Item>
                  
                  
                  

                  <Form.Item wrapperCol={{ span: 4 }} label="จำนวนห้อง">
                    <InputNumber
                      status={touched.quantity && errors.quantity ? "error" : ""}
                      name="quantity"
                      type="number"
                      
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="จำนวนห้อง"
                      value={values.quantity}
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

                  <Form.Item label="ยืนยัน">
                    <Button className="col-md-12" htmlType="submit">บันทึก</Button>
                    <Button onClick={()=>navigate("/acmdList")} className="col-md-12 btn btn-danger" >ยกเลิก</Button>
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

export default CreateAcmd;
