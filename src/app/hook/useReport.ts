// import { useEffect } from "react";
// import { useAppDispatch,
//   //  useAppSelector 
//   } from "../store/configureStore";
// import { fetchProductStatisticsAsync, fetchSalesStatisticsAsync } from "../store/reportSlice";


const useReport = () => {
    // const dispatch = useAppDispatch()

    // const { productStatistics,productStatisticsLoaded,salesStatistics,salesStatisticsLoaded } = useAppSelector((state) => state.report);
  
      // useEffect(()=>{
      //   if(!productStatisticsLoaded)dispatch(fetchProductStatisticsAsync())
      // },[productStatistics])
      
      // useEffect(()=>{
      //   if(!salesStatisticsLoaded)dispatch(fetchSalesStatisticsAsync())
      // },[salesStatistics])

    
    return {
        // productStatistics,
        // salesStatistics
    };
   
  }
  
  export default useReport