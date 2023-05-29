import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchHBOrderByIdAccount , fetchHBOrderByIdAccountV2 } from "../store/hbOrderSlice";



const useHBorder = () => {
  const dispatch = useAppDispatch();
  const { account } = useAppSelector((state) => state.account);
  // const localaccount = JSON.parse(localStorage.getItem("account")!)
  const { hborder ,
    //  hborderLoaded ,
    hborderV2} = useAppSelector((state) => state.hbOrder);



  useEffect(() => {
    // if(!hborderLoaded)dispatch(fetchHBOrderByIdAccount(account?.accountId));
    dispatch(fetchHBOrderByIdAccount(account?.accountId));

  }, [hborder,dispatch ]);
  
  useEffect(() => {
    // if(!hborderLoaded)dispatch(fetchHBOrderByIdAccount(account?.accountId));
    dispatch(fetchHBOrderByIdAccountV2(account?.accountId));

  }, [hborderV2,dispatch ]);


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
    hborder,
    hborderV2
  };
};

export default useHBorder