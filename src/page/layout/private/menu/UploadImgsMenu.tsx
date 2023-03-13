import React, { useState } from 'react';
import { CloseOutlined, LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Form, message, Modal, Row, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import { Formik } from 'formik';
import { useAppSelector } from '../../../../app/store/configureStore';
import agent from '../../../../app/api/agent';

import swal from "sweetalert";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });


  

function UploadImgsMenu() {

  const { id } = useParams<{ id: any }>();
  console.log(`id :${id}`)




  const navigate = useNavigate();


  const beforeUploadAntd = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'|| file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('สามารถอัปโหลดไฟล์ JPG/PNG เท่านั้น!');
    }
    const isLt2M = file.size / 1024 / 1024 < 100;
    if (!isLt2M) {
      message.error('รูปภาพต้องมีขนาดเล็กกว่า 100MB!');
    }
    return isJpgOrPng && isLt2M;
  };

//   const { CategoryFd } = useAppSelector((state) => state.fdCategory);


    // console.log(`CategoryFd :${CategoryFd}`)

    const value = {
    fdImgName:     "",
    };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<any[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
]);

const submitForm = async (value: any) => {
    // let result = await agent.FoodDrink.createFd(value)
    
    console.log(value)

    // if (!state) result = await dispatch(CreateMenu(data)).unwrap();
    // if (result.statusCode == 200) {
    if (value != null) {

      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/menus"));
    } else {
      swal({
        // title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }
  };


const handleCancel = () => setPreviewOpen(false);

const handlePreview = async (file: UploadFile) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj as RcFile);
  }

  setPreviewImage(file.url || (file.preview as string));
  setPreviewOpen(true);
  setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
};

const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {

  setFileList(newFileList);


  console.log(newFileList)


}

const onClick = async () =>{

  if (fileList != null) {
 await agent.FdImg.AddFdImg({id : id ,data : fileList})
 console.log(fileList)

//  <Button
//   variant="contained"
//   component="label"
// >
//   Upload File
//   <input
//     type="file"
//     hidden
//   />
// </Button>

      swal({
        title: "บันทึกสำเร็จ",
        icon: "success",
        buttons: [false, "ตกลง"],
      }).then(() => navigate("/fdList"));
    } else {
      swal({
        // title: result.message,
        icon: "warning",
        buttons: [false, "ตกลง"],
      });
    }

  // Swal.fire({
  //   title: "ออกจากระบบหรือไม่?",
  //   icon: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3c16e8",
  //   cancelButtonColor: "#d33",
  //   cancelButtonText: "ยกเลิก",
  //   confirmButtonText: "ตกลง",
  // }).then((result) => {
  //   if (result.isConfirmed && dispatch(logout())) {
  //     Swal.fire(
  //       "เรียบร้อย",
  //       "ออกสู่ระบบสำเร็จ",
  //       "success"
  //     );
  //   }
  // })
}






const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

const handleUploadImage = (
  info: UploadChangeParam<UploadFile<any>>,
  setFileList: any
) => {
  const { status, response } = info.file;
  if (status == "done") {
    setFileList((prevFileList: any) => [...prevFileList, { url: response }]);
  }
};

  return (
    <>

        <Formik
    // validationSchema={MenuValidate}
    initialValues={value}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      console.log(values)
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
setFieldValue,
}) => (


<Form
    // onFinish={handleSubmit}
    
    labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
                // disabled={componentDisabled}
                style={{ maxWidth: 600 }}
    >

    
{/* <Upload.Dragger height={250} {...props} beforeUpload={beforeUploadAntd} showUploadList={false} className="col-md-4 mt-3">
                    {!imageUrl ?
                      !state ? (<> <p className="ant-upload-drag-icon">
                        {!loading ? <UploadOutlined style={{ fontSize: "60px" }} /> : <LoadingOutlined style={{ fontSize: "60px" }} />}
                      </p>
                        <p className="ant-upload-text text-st">
                          เพิ่มรูปภาพสินค้า
                        </p> </>)
                        : (<Badge count={<Button
                          type="primary"
                          shape="circle"
                          htmlType='button'
                          danger icon={<CloseOutlined />}
                          onClick={RemoveImage}
                          size="small"
                          style={{ marginLeft: "5px" }} />}>
                          <img
                            src={state.image}
                            className='img-thumbnail'
                            alt='...'
                            style={{ width: '100%', height: "200px" }}
                          />
                        </Badge>) : (<Badge count={<Button
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
                        </Badge>)}
                  </Upload.Dragger> */}

                  
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>

      
      <Form.Item label="Button">
            <Button onClick={onClick} htmlType="submit">Button</Button>
      </Form.Item>

      </Form>
      )}
          </Formik>






{/* <Form.Item>
        <Upload
          multiple
          accept="image/jpeg, image/png,  image/jpg"
          action={import.meta.env.VITE_API_URL + "/uploadFile/image"}
          listType="picture-card"
          previewFile={undefined}
          showUploadList={false}
          onChange={(info) => handleUploadImage(info, setFileList)}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>อัพโหลดรูปภาพ</div>
          </div>
        </Upload>
      </Form.Item>

      <Row className="py-4" gutter={[16, 16]}>
        {fileList.map((file: Photo, i: number) => (
          <Col key={i} xs={12} sm={12} md={8} lg={6}>
            <img key={i} src={file}/> 
          </Col>
        ))}
      </Row> */}
    </>
  )
}

export default UploadImgsMenu
