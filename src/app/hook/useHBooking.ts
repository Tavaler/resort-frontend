import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { fetchHouseBookingAsync } from '../store/HBookingSlice';

const useHBooking = () => {
    const { account } = useAppSelector((state) => state.account);
    
    const { hbookings,HbdetailLoaded } = useAppSelector((state) => state.housebooking);

    // const { carts, CartdetailLoaded } = useAppSelector((state) => state.cartItem);

    const subtotal = hbookings?.reduce((sum, item) => sum + (item.sumPrice), 0) ?? 0;

    const dispatch = useAppDispatch();

    useEffect(() => {
        //  if (!carts) 
        //  dispatch(fetchCartAsync(account?.accountId));
        
        
        //  dispatch(itemPlusCartAsync(carts.))
    if(!hbookings)
        dispatch(fetchHouseBookingAsync(account?.accountId));
        
        //  console.log({account})
        // dispatch(fetchCartAsync(account?.accountId));
        }, [dispatch,hbookings]); ///,carts]

    return{
        hbookings,
        HbdetailLoaded,
        subtotal
    };
}

export default useHBooking