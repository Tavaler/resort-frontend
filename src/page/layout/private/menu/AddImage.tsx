import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';

function AddImage() {

    interface PreviewFile extends File {
        preview: string;
      }
      
      const thumbsContainer: React.CSSProperties = {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 16,
        };
      
        const thumb: React.CSSProperties = {
          display: 'inline-flex',
          borderRadius: 2,
          border: '1px solid #eaeaea',
          marginBottom: 8,
          marginRight: 8,
          width: 100,
          height: 100,
          padding: 4,
          boxSizing: 'border-box' ,
        };
      
      
      const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
      };
      
      const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
      };
    
    
      const [files, setFiles] = useState<PreviewFile[]>([]);
      console.log("files files",files)
      const {getRootProps, getInputProps} = useDropzone({
        accept: {
          'image/*': []
        },
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });
      
      const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              // Revoke data uri after image is loaded
              onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
          </div>
        </div>
      ));
    
      useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);
  return (
    
    <div className="comment-text active w-100">
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  </div>
  )
}

export default AddImage