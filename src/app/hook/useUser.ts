import { useEffect, useState } from "react";
import { GetAll, fetchAccount } from "../../app/store/accountSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { Account } from "../../app/models/user";
import agent from "../api/agent"


const useUser = () => {
    const dispatch = useAppDispatch()
   
    const { account,userLoaded,user
      // ,accountLoad 
    } = useAppSelector((state) => state.account);   
    const localaccount = JSON.parse(localStorage.getItem("account")!)

    const [, setUser] = useState<Account[] | null>(null);


    const loadUser = async () => {
      const { data } = await agent.Account.getAll();
      setUser(data);
    }

    useEffect(() => {
      if (!userLoaded) dispatch(GetAll());
    }, [userLoaded, dispatch]);
  
    useEffect(() => {
      loadUser()
    }, []);
  
    
   

  useEffect(() => {
    if (userLoaded) dispatch(fetchAccount());
    if (!localaccount)dispatch(fetchAccount())
    //if(!accounts) dispatch(GetAccountAll())
  }, [account, dispatch]);

    return {
        account,
        localaccount,
        user
    };
   
  }
  
  export default useUser