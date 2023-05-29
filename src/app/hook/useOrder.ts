import { useEffect } from "react";
// import { fetchCartAsync } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
// import { fetchHBOrderByIdAccount , fetchHBOrderById,fetchHBOrderConfirm } from "../store/hbOrderSlice";
import {  fetchOrderByIdAccount } from "../store/orderSlice";



const useOrder = () => {
  const dispatch = useAppDispatch();
  const { account } = useAppSelector((state) => state.account);
  // const localaccount = JSON.parse(localStorage.getItem("account")!)
  const { order , 
    // orderLoaded,
    orderAll  } = useAppSelector((state) => state.order);



  useEffect(() => {
    //if(!orderLoaded)dispatch(fetchHBOrderByIdAccount(account?.accountId));
    dispatch(fetchOrderByIdAccount(account?.accountId));
    // dispatch(fetchOrderByIdAccount(account?.accountId));

  }, [order,orderAll,dispatch ]);



  // useEffect(() => {
  //   if (!ordersConfirm) dispatch(fetchOrderConfirm());
  // }, [orders, dispatch]);

  // useEffect(() => {
  //   if (!ordersSucceed) dispatch(fetchConfirmOrderAccount(localaccount.id));
  // }, [ordersSucceed, dispatch]);
  return {
    order,
    orderAll
  };
};

export default useOrder