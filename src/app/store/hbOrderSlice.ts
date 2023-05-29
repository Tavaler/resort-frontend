import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { HBOrder, HbOrderID } from "../models/HBOrder";

interface HBOrderState {
  hborder: HBOrder[] | null;
  hborderLoaded: boolean;
  hborderV2: HBOrder[] | null;
  hborderLoadedV2: boolean;
  hb: HBOrder[] | null;
  hbLoaded: boolean;

  hborderdetail: HbOrderID | null;
  hborderdetailLoaded : boolean;
  // hborder1: HBOrder[] | null;
  // hborderLoaded1: boolean;
  // hborder2: HBOrder[] | null;
  // hborderLoaded2: boolean;
  // hborder3: HBOrder[] | null;
  // hborderLoaded3: boolean;
  // hborderConfirm: ConfirmOrder[] | null
  hborderConfirmLoaded: boolean;
}

const initialState: HBOrderState = {
  hborder: null,
  hborderLoaded: false,
  hborderV2: null,
  hborderLoadedV2: false,
  // hborderConfirm: null,
  hborderConfirmLoaded: false,
  hb: null,
  hbLoaded: false,

  hborderdetail: null,
  hborderdetailLoaded: false
};

export const fetchHBOrderByIdAccount = createAsyncThunk<any, any>(
  "hborder/fetchOrderByIdAccount",
  async (id, thunkAPI) => {
    try {
      return await agent.HBOrder.GetByIdAccount(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchHBOrderByIdAccountV2 = createAsyncThunk<any, any>(
  "hborder/fetchOrderByIdAccountV2",
  async (id, thunkAPI) => {
    try {
      return await agent.HBOrder.GetByIdAccountV2(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const GetHBOrderAll = createAsyncThunk<any>(
  'HBOrder/GetAll',
  async (_, thunkAPI) => {
      try {
          return await agent.HBOrder.getAll();
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

// export const fetchHBOrderByIdAccount0 = createAsyncThunk<any, any>(
//   "hborder/fetchOrderByIdAccount",
//   async (id, thunkAPI) => {
//     try {
//       return await agent.HBOrder.GetByIdAccountStatus0(id);
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data });
//     }
//   }
// );

// export const fetchHBOrderByIdAccount1 = createAsyncThunk<any, any>(
//   "hborder/fetchOrderByIdAccount",
//   async (id, thunkAPI) => {
//     try {
//       return await agent.HBOrder.GetByIdAccountStatus1(id);
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data });
//     }
//   }
// );

// export const fetchHBOrderByIdAccount2 = createAsyncThunk<any, any>(
//   "hborder/fetchOrderByIdAccount",
//   async (id, thunkAPI) => {
//     try {
//       return await agent.HBOrder.GetByIdAccountStatus2(id);
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data });
//     }
//   }
// );

// export const fetchHBOrderByIdAccount3 = createAsyncThunk<any, any>(
//   "hborder/fetchOrderByIdAccount",
//   async (id, thunkAPI) => {
//     try {
//       return await agent.HBOrder.GetByIdAccountStatus3(id);
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data });
//     }
//   }
// );

export const fetchHBOrderById = createAsyncThunk<any, any>(
  "hborder/fetchOrderById",
  async (id, thunkAPI) => {
    try {
      return await agent.HBOrder.GetById(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchHBOrderConfirm = createAsyncThunk(
  "product/fetchOrderConfirm",
  async (id, thunkAPI) => {
    try {
      const result = await agent.HBOrder.cancelStatusOrder(id);
      return result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);



export const hborderSlice = createSlice({
  name: "hborder",
  initialState,
  reducers: {
    resetHbOrder: (state) => {
      state.hborderLoaded = false;
    },
    resetHbOrderV2: (state) => {
      state.hborderLoadedV2 = false;
    },
    resetDetailHB:(state)=>{
      state.hborderdetailLoaded = false;
    },
    // resetHbOrder0: (state) => {
    //   state.hborderLoaded0 = false;
    // },
    // resetHbOrder1: (state) => {
    //   state.hborderLoaded1 = false;
    // },
    // resetHbOrder2: (state) => {
    //   state.hborderLoaded2 = false;
    // },
    // resetHbOrder3: (state) => {
    //   state.hborderLoaded3 = false;
    // },
    resetOrderConfirm: (state) => {
      state.hborderConfirmLoaded = false;
    },
  },
  extraReducers: (builder) => {
      builder.addCase(GetHBOrderAll.fulfilled, (state, action) => {
      state.hb = action.payload.data;
      state.hbLoaded = true
    });

    builder.addCase(fetchHBOrderByIdAccount.fulfilled, (state, action) => {
      state.hborder = action.payload.data
      state.hborderLoaded = true
    });

    builder.addCase(fetchHBOrderByIdAccountV2.fulfilled, (state, action) => {
      state.hborderV2 = action.payload.data
      state.hborderLoadedV2 = true
    });

    builder.addCase(fetchHBOrderById.fulfilled, (state, action) => {
      // if(action.payload.msg === 'OK')
      state.hborderdetail = action.payload.data;
      // state.detailfd = action.payload;
      state.hborderdetailLoaded = true
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

export const { resetHbOrder ,resetHbOrderV2,resetDetailHB} = hborderSlice.actions;