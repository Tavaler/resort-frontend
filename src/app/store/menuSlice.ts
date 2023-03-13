import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Result } from "../Interfaces/IResponse";
import { FoodDrink } from "../models/menu";

interface MenuState{
    fds: FoodDrink[] | null;
    productsLoaded : boolean;
    detailfd : FoodDrink | null;
    productsdetailLoaded : boolean;
    
}

const initialState : MenuState= {
    fds: null,
    productsLoaded: false,
    detailfd: null,
    productsdetailLoaded: false
}



export const GetMenuAll = createAsyncThunk<FoodDrink[]>(
    'FoodDrink/GetMenuAll',
    async (_, thunkAPI) => {
        try {
            return await agent.FoodDrink.getAll();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);




  export const GetByIdFd = createAsyncThunk<any, string>(
    "FoodDrink/fetchfddetail",
    async (fdId, thunkAPI) => {
      try {
        const result = await agent.FoodDrink.getByIdFd(fdId);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

  export const CreateMenu = createAsyncThunk<any, FoodDrink>(
    "FoodDrink/createMenu",
    async (data, thunkAPI) => {
      try {
        const results = await agent.FoodDrink.createFd(data);
        return results;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data })
    }
    }
  );

//   export const GetProductDetail = createAsyncThunk<any, number>(
//     'product/GetProductDetail',
//     async (id, thunkAPI) => {
//         try {
//             return await agent.Product.details(id);
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue({ error: error.data }) //ส่งไปที่ Interceptor
//         }
//     }
// )

export const DeletFd = createAsyncThunk<any, string>(
  "FoodDrink/deletFd", 
  async (id, thunkAPI) => {
  try {
      const result = await agent.FoodDrink.deleteFd(id);
      return result;
  } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
  }
});






export const menuSlice = createSlice({
    name: "menu" ,
    initialState ,
    reducers:{

        resetDetailFd:(state)=>{
            state.productsdetailLoaded = false;
          },
        // setMetaData: (state, action) => {
        //     state.metaData = action.payload;
        // },
        // setParams: (state, action) => {
        //     state.productsLoaded = false; // เพื่อ Product มัน reload ใหม่
        //     state.productParams = { ...state.productParams, ...action.payload };
        // },
        // resetProductParams: (state) => {
        //     state.productsLoaded = false;
        //     state.productParams = initParams();
        // },
        // resetImageProduct: (state) => {
        //     state.imageProducts = null;
        //     state.imageProductLoaded = false;
        // },
       
    },
    extraReducers: (builder) => {
        builder.addCase(GetMenuAll.fulfilled, (state, action) => {
            state.fds = action.payload
            state.productsLoaded = true
        });

        builder.addCase(GetByIdFd.fulfilled, (state, action) => {
            // if(action.payload.msg === 'OK')
            state.detailfd = action.payload;
            // state.detailfd = action.payload;
            state.productsdetailLoaded = true
          });
    },


    
    
});

// export const { setMetaData, setParams, resetProductParams, resetImageProduct } = menuSlice.actions;

export const {resetDetailFd} = menuSlice.actions