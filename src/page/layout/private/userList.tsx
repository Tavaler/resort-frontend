// import { useAppDispatch, useAppSelector } from '../../../app/store/configureStore';

// function UserList() {
//     const dispatch = useAppDispatch();
//     // const { productsLoaded, fds } = useAppSelector((state) => state.account);
//     // console.log("account", fds);
//     // useEffect(() => {
//     //   if (!productsLoaded) dispatch(GetMenuAll());
//     // }, [productsLoaded, dispatch]);
//   return (
//     <div>userList</div>
//   )
// }

// export default UserList

// import React from 'react';
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function Datepicker() {
  return (
    <>
      <Space direction="vertical" size={12}>
        <RangePicker />
        <RangePicker showTime />
        {/* <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" /> */}
      </Space>
    </>
  );
}

export default Datepicker;
