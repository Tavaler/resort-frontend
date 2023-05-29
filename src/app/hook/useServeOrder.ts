import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchServeOrderByIdAccount } from "../store/serveOrderSlice";



const useServeorder = () => {
  const dispatch = useAppDispatch();
  const { account } = useAppSelector((state) => state.account);
  // const localaccount = JSON.parse(localStorage.getItem("account")!)
  const { serveorder 
    // , serveorderLoaded 
    ,sv} = useAppSelector((state) => state.serveOrder);



  useEffect(() => {
    // if(!hborderLoaded)dispatch(fetchHBOrderByIdAccount(account?.accountId));
    dispatch(fetchServeOrderByIdAccount(account?.accountId));
  }, [serveorder,sv,dispatch ]);


  // useEffect(() => {
  //   if (!hborderLoaded) dispatch(fetchHBOrderByIdAccount(localaccount.accountId));
  //   dispatch(fetchCartAsync(account?.accountId));

  // }, [hborder, dispatch]);

  // useEffect(() => {
  //   if (!ordersConfirm) dispatch(fetchOrderConfirm());
  // }, [orders, dispatch]);

  // useEffect(() => {
  //   if (!ordersSucceed) dispatch(fetchConfirmOrderAccount(localaccount.id));
  // }, [ordersSucceed, dispatch]);
  return {
    serveorder,
    sv,
  };
};

export default useServeorder