import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { fetchServeCartAsync } from '../store/ServeCartSlice';

const useServeBooking = () => {
  const dispatch = useAppDispatch();
  const { account } = useAppSelector((state) => state.account);
  const { serveCart, ServeCartdetailLoaded } = useAppSelector((state) => state.serveCart);

  const subtotal = serveCart?.reduce((sum, item) => sum + (item.sumAmountPrice), 0) ?? 0;


  useEffect(() => {
    if(!ServeCartdetailLoaded)
    dispatch(fetchServeCartAsync(account?.accountId));
  }, [dispatch, serveCart]);


//   const { hbookings,HbdetailLoaded } = useAppSelector((state) => state.housebooking);

    return {
      serveCart,
      ServeCartdetailLoaded,
      subtotal

    }
}

export default useServeBooking