import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ConfirmOrder, Order } from "../models/Order";
import agent from "../api/agent";
import { ServeOrder, ServerOrderID } from "../models/serveOrder";
// import { OrderID } from "../models/order";


interface ServeOrderState {
  serveorder: ServeOrder[] | null;
  serveorderLoaded: boolean;

  sv : ServeOrder[] | null;
  svLoaded:boolean;

  serveorderDetail: ServerOrderID | null
  serveorderDetailLoaded: boolean;
//   orderConfirm: ConfirmOrder[] | null
}

const initialState: ServeOrderState = {
  serveorder: null,
  serveorderLoaded: false,
  sv: null,
  svLoaded: false,


  serveorderDetail: null,
  serveorderDetailLoaded: false
};

export const fetchServeOrderByIdAccount = createAsyncThunk<any, any>(
    "serveorder/fetchServeOrderByIdAccount",
    async (id, thunkAPI) => {
      try {
        return await agent.ServeOrder.GetByIdAccount(id);
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );
  
  export const GetServeOrderAll = createAsyncThunk<any>(
    'ServeOrder/GetAll',
    async (_, thunkAPI) => {
        try {
            return await agent.ServeOrder.getAll();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
  );
  
  // export const GetMenuAll = createAsyncThunk<FoodDrink[]>(
  //   'FoodDrink/GetMenuAll',
  //   async (_, thunkAPI) => {
  //       try {
  //           return await agent.FoodDrink.getAll();
  //       } catch (error: any) {
  //           return thunkAPI.rejectWithValue({ error: error.data });
  //       }
  //   }
  // );
  
  
  
  export const fetchServeOrderById = createAsyncThunk<any, string>(
    "serveorder/fetchServeOrderById",
    async (id, thunkAPI) => {
      try {
        return await agent.ServeOrder.GetById(id);
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );
  
//   export const fetchHBOrderConfirm = createAsyncThunk(
//     "product/fetchOrderConfirm",
//     async (id, thunkAPI) => {
//       try {
//         const result = await agent.HBOrder.cancelStatusOrder(id);
//         return result;
//       } catch (error: any) {
//         return thunkAPI.rejectWithValue({ error: error.data });
//       }
//     }
//   );
  
  
  
  export const serveorderSlice = createSlice({
    name: "serveorder",
    initialState,
    reducers: {
      resetServeOrder: (state) => {
        state.serveorderLoaded = false;
      },
      resetServeOrderDetail: (state) => {
        state.serveorderDetailLoaded = false;
      },
      // resetHbOrder0: (state) => {
      //   state.hborderLoaded0 = false;
      // },
    //   resetHbOrder1: (state) => {
    //     state.hborderLoaded1 = false;
    //   },
    //   resetHbOrder2: (state) => {
    //     state.hborderLoaded2 = false;
    //   },
    //   resetHbOrder3: (state) => {
    //     state.hborderLoaded3 = false;
    //   },
    //   resetOrderConfirm: (state) => {
    //     state.hborderConfirmLoaded = false;
    //   },
    },
    extraReducers: (builder) => {
        builder.addCase(GetServeOrderAll.fulfilled, (state, action) => {
        state.sv = action.payload.data;
        state.svLoaded = true
      });
  
      builder.addCase(fetchServeOrderByIdAccount.fulfilled, (state, action) => {
        state.serveorder = action.payload.data
        state.serveorderLoaded = true
      });

      builder.addCase(fetchServeOrderById.fulfilled, (state, action) => {
        state.serveorderDetail = action.payload.data;
          state.serveorderDetailLoaded = true;
        });
      
  
  
      // builder.addCase(fetchHBOrderByIdAccount1.fulfilled, (state, action) => {
      //   state.hborder1 = action.payload.data;
      //   state.hborderLoaded1 = true;
      // });
      // builder.addCase(fetchHBOrderByIdAccount2.fulfilled, (state, action) => {
      //   state.hborder2 = action.payload.data;
      //   state.hborderLoaded2 = true;
      // });
  
      // builder.addCase(fetchHBOrderByIdAccount3.fulfilled, (state, action) => {
      //   state.hborder3 = action.payload.data;
      //   state.hborderLoaded3 = true;
      // });
      // builder.addCase(fetchHBOrderConfirm.fulfilled, (state, action) => {
      //   state.orderConfirm = action.payload.data;
      //   state.hborderConfirmLoaded = true;
      // });
    },
  });
  
  export const { resetServeOrder ,resetServeOrderDetail } = serveorderSlice.actions;