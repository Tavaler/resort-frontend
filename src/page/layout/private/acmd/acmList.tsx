import React, { useEffect } from 'react'
import { Table, Divider, Tag, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../app/store/configureStore';
import { DeletFd, GetMenuAll } from '../../../../app/store/menuSlice';
import { FdCategory } from '../../../../app/models/menu';
import Sidebar from '../../../../components/Sidebar';
import Swal from 'sweetalert2';
import { GetAcmdAll } from '../../../../app/store/accommodationSlice';


export interface DataType {
  key: string;
  name: string;
  price: number;
  // stock: number;
  // color: string;
  // weight: number;
  description: string;
  imageUrl: string;
  // accountID: string;
  created: Date;
  // lastUpdate: Date;
  // weightUnitID: number;
  categoryProductID: string;
  // weightUnit: WeightUnit;
  categoryProduct: FdCategory;
}
type DataIndex = keyof DataType;


function AcmdList() {
  const dispatch = useAppDispatch();
  const { acmdsLoaded, acmd } = useAppSelector((state) => state.acmd);
  console.log("acmd", acmd);

  useEffect(() => {
    if (!acmdsLoaded) dispatch(GetAcmdAll());
  }, [acmdsLoaded, dispatch]);

  const onDelete = (id: any) => {
    console.log("id",id)
    Swal.fire({
      title: 'ลบสินค้าหรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "ยกเลิก",
      confirmButtonText: 'ตกลง'
    })
    .then((result: any) => result.isConfirmed && dispatch(DeletFd(id))
    
    .then(()=>dispatch(GetAcmdAll())))
    
      
    
    
  };


  // FoodDrink

  const data  = acmd?.map(acmd => ({
    key: acmd.accommodationId,
    name: acmd.name,
    // accountID: menu.accountID,
    imageUrl:acmd.accommodationImgs[0] ?  <img src={"https://localhost:5000/images/"+acmd.accommodationImgs[0].image} style={{ height: "10rem" ,width: "10rem"}} alt="" /> : <img src="http://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png" style={{ height: "10rem" }} alt="" />
    ,
    price: acmd.price,
    categoryProduct: acmd.accommodationType,
    categoryProductID: acmd.accommodationType.name,
    created: acmd.createTime,
    description: acmd.detail,
  })) 
    
    
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    //   tags: ['nice', 'developer'],
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   tags: ['loser'],
    // },
    
  ;
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "imageUrl",
      dataIndex: "imageUrl",
      key: "imageUrl",
    },
    {
      title: "categoryProductID",
      dataIndex: "categoryProductID",
      key: "categoryProductID",
    },

    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </span>
    //   ),
    // },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button href={`/uploadImgsmenu/${record.key}`} type="primary">
            Add Img
          </Button>
          {/* <a >add img</a> */}

          <Divider type="vertical" />
          <Button 
          // onClick: () => onDelete(data.key),
          onClick={() => onDelete(record.key)}
          className="btn-danger"
          type="link"
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];
  return (
    <>
    <Table  columns={columns} dataSource={data} />
    </>
  )
}

export default AcmdList