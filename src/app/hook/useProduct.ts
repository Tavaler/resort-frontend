import { useEffect } from "react";
// import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { GetMenuAll,
  //  GetByIdFd,
  //  resetDetailFd 
  } from "../../app/store/menuSlice";
import { GetCategoryFd } from "../../app/store/FdCategorySilce";
// import { GetCommunityGroup } from "../../store/CommunityGroupSilce";
// import { GetLevelRaritys } from "../../Stone/LevelRaritySilce";


const useProduct = () => {
   
    // const { id } = useParams<{ id: any }>();
    const dispatch = useAppDispatch()
    const { productsLoaded, fds } = useAppSelector((state) => state.menu);
    // const { productsdetailLoaded, detailfd } = useAppSelector((state) => state.menu);
    // const { CommunityGroups } = useAppSelector((state) => state.communitygroup);
    const { CategoryFd  } = useAppSelector((state) => state.fdCategory);
    // const { LevelRaritys } = useAppSelector((state) => state.LevelRarity);

    useEffect(() => {
        if (!productsLoaded) dispatch(GetMenuAll());
      }, [productsLoaded, dispatch]);

      // useEffect(()=>{
      //   if(!productsdetailLoaded)dispatch(GetByIdFd(id))
      //   return()=>{ dispatch(resetDetailFd())}
      // },[detailfd,dispatch])

      useEffect(() => {
        if (!CategoryFd) dispatch(GetCategoryFd());
        // if(!CommunityGroups)dispatch(GetCommunityGroup());
        // if(!LevelRaritys)dispatch(GetLevelRaritys());
      }, [CategoryFd,dispatch]);
      
    
    return {
        fds,
        productsLoaded,
        // detailfd,
        // productsdetailLoaded,
        // CommunityGroups,
        CategoryFd,
        // LevelRaritys
    };
   
  }
  
  export default useProduct