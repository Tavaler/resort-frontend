import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import {
  Form,
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
import Swal from "sweetalert2";
import { GetMenuAll } from "../../../../app/store/menuSlice";

// const { RangePicker } = DatePicker;

function AddImageFd() {
  const { id } = useParams<{ id: any }>();
  console.log(`id :${id}`);

  interface PreviewFile extends File {
    preview: string;
  }

  const thumbsContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb: React.CSSProperties = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [files, setFiles] = useState<PreviewFile[]>([]);

  // const images = imageProducts?.map((img)=>{return(
  //   <Image src={img?.image}  style={{width:"150px"}} />

  // )})

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const values = {
    formFiles: [],
    FdId: id,
  };

  const handleSubmitForm = async (value: any) => {
    let result;

    result = await agent.FdImg.create(value);
    console.log("result", value);
    if (result.msg === "OK")
      Swal.fire({
        position: "center",
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(()=> navigate(-1)).then(()=>(dispatch(GetMenuAll())));
    else {
      Swal.fire({
        position: "center",
        title: "เกิดข้อผิดพลาด!",
        text: "ไม่สามารถบันทึกข้อมูลได้",
        icon: "error",
      });
    }
  };

  return (
    <div className="containerFdCreate">
      <div id="contact" className="FdCreateBody">
        <div className="row">
          <div className="col-lg-12 ">
            <div style={{ textAlign: "center" }}>
              <p>
                <h3>รูปภาพ</h3>
              </p>
            </div>

            <Formik
              // validationSchema={MenuValidate}
              initialValues={values}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
              
                handleSubmitForm(values);
                console.log(values);
              }}
            >
              {({
                handleSubmit,
                setFieldValue,
              }) => {
                const { getRootProps, getInputProps } = useDropzone({
                  accept: {
                    "image/*": [],
                  },
                  onDrop: (acceptedFiles) => {
                    setFieldValue("formFiles", acceptedFiles);
                    setFiles(
                      acceptedFiles.map((file) =>
                        Object.assign(file, {
                          preview: URL.createObjectURL(file),
                        })
                      )
                    );
                  },
                });

                return (
                  <Form
                    onFinish={handleSubmit}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // disabled={componentDisabled}
                    style={{ maxWidth: 600 }}
                  >
                    <div className="comment-text active w-100 pt-3">
                      <section className="container">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <p>
                            ลาก 'และ' วางบางไฟล์ที่นี่ หรือคลิกเพื่อเลือกไฟล์
                          </p>
                        </div>
                        <aside style={thumbsContainer}>{thumbs}</aside>
                      </section>
                    </div>

                    <Form.Item label="ยืนยัน">
                      {files.length === 0 ? (
                        <div></div>
                      ) : (
                        <Button className="col-md-12" htmlType="submit">
                          บันทึก
                        </Button>
                      )}
                      {/* <Button className="col-md-12" htmlType="submit">
                        บันทึก
                      </Button> */}
                      <Button className="col-md-12 btn btn-danger"
                      onClick={()=>navigate(-1)}>
                        ยกเลิก
                      </Button>
                    </Form.Item>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddImageFd;
