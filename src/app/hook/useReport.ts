import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../../store/configureStore";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductStatisticsAsync, fetchSalesStatisticsAsync } from "../store/reportSlice";
// import { fetchProductStatisticsAsync, fetchSalesStatisticsAsync } from "../../Stone/reportSlice";



const useReport = () => {
    const dispatch = useAppDispatch()


  

    const { productStatistics,productStatisticsLoaded,salesStatistics,salesStatisticsLoaded 
        // ,salesCommunity,salesCommunityLoaded
    } = useAppSelector((state) => state.report);
  
      useEffect(()=>{
        if(!productStatisticsLoaded)dispatch(fetchProductStatisticsAsync())
      },[productStatistics])
      
      useEffect(()=>{
        if(!salesStatisticsLoaded)dispatch(fetchSalesStatisticsAsync())
      },[salesStatistics])

    //   useEffect(()=>{
    //     if(!salesCommunityLoaded)dispatch(fetchSalesCommunityAsync())
    //   },[salesCommunity])

      
    
    return {
        productStatistics,
        salesStatistics,
        // salesCommunity

    };
   
  }
  
  export default useReport