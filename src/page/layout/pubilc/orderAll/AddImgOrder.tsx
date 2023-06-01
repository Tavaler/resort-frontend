import { SetStateAction, useState } from "react";
import { useAppDispatch } from "../../../../app/store/configureStore";
import agent from "../../../../app/api/agent";
import * as Yup from 'yup';
import { Badge, Button, Col, Divider, Form, message, Modal, Row, Upload, UploadProps } from 'antd'

import AppSwal from "../../../../components/charts/AppSwal";
import { fetchHBOrderByIdAccount } from "../../../../app/store/hbOrderSlice";
import { ErrorMessage, Formik } from "formik";
import { LoadingOutlined, CloseOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload";
import { Ts, beforeUploadAntd, getBase64 } from "../../../../util/util";
import { BiCloudUpload } from "react-icons/bi";


interface Props {
  openModal: boolean;
  setOpenModal: Function;
  id: string;
  setOrderId: Function;
}
const accountNumber = "1155522001";
const accountName = "อดิศักดิ์ ชัยสุวรรณ์";

const ValidateSchema = Yup.object().shape({
  FormFiles: Yup.string().required('กรุณาเลือกไฟล์'),
});
// , setOrderId 
const AddImgOrder = ({ openModal, setOpenModal, id, setOrderId  }: Props) => {
  const dispatch = useAppDispatch();
  const [, contextHolder] = message.useMessage();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const localaccount = JSON.parse(localStorage.getItem("account")!)
  
  const handleSubmitForm = async (value: any) => {
      
      const result =  await agent.Order.update(value)

      console.log("value",value)
      console.log(result)
      if (result.msg === "OK") {
          AppSwal({
              icon: "success",
              onThen: () => {
                  setOpenModal(false);
                   setOrderId("");
                  setImageUrl("");
                  dispatch(fetchHBOrderByIdAccount(localaccount.id));
              },
              title: "บันทึกข้อมูลสำเร็จ",
              timer: 1500
          });
      };
  };

  return (
      <Formik
          initialValues={{ id: "", FormFiles: ''  
        // ,status : PaymentStatus.WaitingForCheck 
        }}
          validationSchema={ValidateSchema}
          onSubmit={(values, { resetForm }) => {
              values.id = id;
              handleSubmitForm(values);
              resetForm();
              console.log(values,"values")
          }}
      >
          {({
              handleSubmit,
              setFieldValue,
              resetForm
          }) => {
              const props: UploadProps = {
                  name: 'FormFiles',
                  multiple: false,
                  onChange: (info) => {
                      if (info.file.status === 'uploading') {
                          setLoading(true);
                          return;
                      }
                      getBase64(info.file.originFileObj as RcFile, (url: SetStateAction<string>) => {
                          setLoading(false);
                          setImageUrl(url);
                      });
                      setFieldValue("FormFiles", info.file.originFileObj);
                      console.log("orderId",id)
                  }
                  
              };

              const RemoveImage = () => {
                  setFieldValue("FormFiles", "");
                  setImageUrl("");
              };

              const onCancel = () => {
                  setOpenModal(false);
                   setOrderId("");
                  RemoveImage();
                  resetForm();
              };

              return <Modal
                  title="โอนชำระ"
                  className='text-st'
                  
                  centered
                  okText={<Ts>ตกลง</Ts>}
                  cancelText={<Ts>ยกเลิก</Ts>}
                  open={openModal}
                  onOk={handleSubmit as any}
                  onCancel={onCancel}
                  width={'70rem'}
              >
                  <Form>
                      <Row gutter={24} >
                          {contextHolder}
                          <Col span={8} style={{ textAlign: "center" }}>
                              <div >
                                  <img width="45%" src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Krung_Thai_Bank_logo.svg/1200px-Krung_Thai_Bank_logo.svg.png' alt='image-bank' />
                                  <h4 className='text-st'>ชื่อบัญชี {accountName}</h4>
                                  <h4 className='text-st'>
                                      เลขที่บัญชี {accountNumber} {" "}
                                      {/* <CopyToClipboard text={accountNumber} onCopy={() => messageApi.open({
                                          type: 'success',
                                          content: 'คัดลอกเรียบร้อย',
                                          className : "text-st"
                                      })}>
                                          <Button type='text' icon={<CopyOutlined />} />
                                      </CopyToClipboard> */}
                                  </h4>
                              </div>
                          </Col>
                          <Col span={1} style={{ textAlign: "center" }}>
                              <Divider type='vertical' style={{ height: "100%" }} />
                          </Col>
                          <Col span={15} className="center">
                              <div>
                                  <Upload.Dragger {...props} beforeUpload={beforeUploadAntd} style={{ width: "30rem" }} showUploadList={false}>
                                      {!imageUrl ? <>
                                          {!loading ? <BiCloudUpload style={{ fontSize: "10rem" }} className='img-opacity' /> : <LoadingOutlined style={{ fontSize: "10rem" }} />}
                                          <p className="ant-upload-text text-st">
                                              เพิ่มหลักฐานการโอนเงิน
                                          </p>
                                      </> : <Badge count={<Button
                                          type="primary"
                                          shape="circle"
                                          htmlType='button'
                                          danger icon={<CloseOutlined />}
                                          onClick={RemoveImage}
                                          size="small"
                                          style={{ marginLeft: "5px" }} />}>
                                          <img
                                              src={imageUrl}
                                              className='img-thumbnail'
                                              alt='...'
                                              style={{ width: '100%', height: "200px" }}
                                          />
                                      </Badge>}
                                  </Upload.Dragger>
                                  <ErrorMessage name="FormFiles" component="div" className="text-danger text-st" />
                              </div>
                          </Col>
                      </Row>
                  </Form>
              </Modal>
          }}
      </Formik>
  )
}

export default AddImgOrder