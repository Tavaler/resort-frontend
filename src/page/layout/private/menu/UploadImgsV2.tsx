// import { Button } from "@mui/material";
// import { Form } from "formik";
import { Form } from "antd";
import axios from "axios";
import React, { useState } from "react";

function UploadImgsV2() {

    const [images, setImages] = useState<File[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
          const fileList = Array.from(files);
          setImages(fileList);
        }
      };



      const handleUpload = async () => {
        const formData = new FormData();
        images.forEach((image) => {
          formData.append('images', image);
        });
        try {
          await axios.post('/api/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(formData)
          // handle success
        } catch (error) {
          // handle error
        }
      };
  return (
    <>
    <Form>

    <input type="file" multiple onChange={handleInputChange} />
    
    <button onClick={handleUpload}>Upload</button>
        
    </Form>
      {/* <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button> */}
    </>
  );
}

export default UploadImgsV2;
