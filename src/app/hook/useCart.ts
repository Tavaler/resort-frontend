import { useEffect } from "react";
import { fetchCartAsync } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";



const useCart = () => {
  const dispatch = useAppDispatch();
  //   const account = JSON.parse(localStorage.getItem("account")!);
  const { account } = useAppSelector((state) => state.account);

  const { carts, CartdetailLoaded } = useAppSelector((state) => state.cartItem);
  const subtotal = carts?.reduce((sum, item) => sum + (item.sumAmountPrice), 0) ?? 0;
  // const itemCount = carts?.reduce((sum, item) => sum + item.amountProduct, 0) ?? 0;
  // const deliveryFree = subtotal > 10000 ? 0 : 50;

  useEffect(() => {
    // if(!CartdetailLoaded)

    dispatch(fetchCartAsync(account?.accountId));
  }, [dispatch, carts]);
  return {
    carts,
    CartdetailLoaded,
    // status ,
    // deliveryFree ,
    subtotal,
    // itemCount
  };
};

export default useCart