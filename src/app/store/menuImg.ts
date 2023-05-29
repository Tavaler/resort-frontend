import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Result } from "../Interfaces/IResponse";
import { FdImg } from "../models/menu";

interface MenuImgState{
    fdimgs: FdImg[] | null;
    productimgsLoaded : boolean;
    detailfdimg : FdImg | null;
    productimgsdetailLoaded : boolean;
    
}

const initialState : MenuImgState= {
    fdimgs: null,
    productimgsLoaded: false,
    detailfdimg: null,
    productimgsdetailLoaded: false
}



// export const GetMenuAll = createAsyncThunk<FoodDrink[]>(
//     'FoodDrink/GetMenuAll',
//     async (_, thunkAPI) => {
//         try {
//             return await agent.FoodDrink.getAll();
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue({ error: error.data });
//         }
//     }
// );




//   export const GetByIdFd = createAsyncThunk<any, string>(
//     "FoodDrink/fetchfddetail",
//     async (fdId, thunkAPI) => {
//       try {
//         const result = await agent.FoodDrink.getByIdFd(fdId);
//         return result;
//       } catch (error: any) {
//         return thunkAPI.rejectWithValue({ error: error.data });
//       }
//     }
//   );

export const createImgProductAsync = createAsyncThunk<Result, any>("Fdimg/createImgProductAsync",
    async (values, thunkAPI) => {
        try {
            return await agent.FdImg.create(values);
          
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    });

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

// export const DeletFd = createAsyncThunk<any, string>(
//   "FoodDrink/deletFd", 
//   async (id, thunkAPI) => {
//   try {
//       const result = await agent.FoodDrink.deleteFd(id);
//       return result;
//   } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data })
//   }
// });






export const menuImgSlice = createSlice({
    name: "menuimg" ,
    initialState ,
    reducers:{

        resetDetailFdImg:(state)=>{
            state.productimgsdetailLoaded = false;
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
    extraReducers: () => {
        // builder.addCase(GetMenuAll.fulfilled, (state, action) => {
        //     state.fdimgs = action.payload
        //     state.productimgsLoaded = true
        // });

        // builder.addCase(GetByIdFd.fulfilled, (state, action) => {
           
        //     state.detailfdimg = action.payload;

        //     state.productimgsdetailLoaded = true
        //   });
    },


    
    
});

// export const { setMetaData, setParams, resetProductParams, resetImageProduct } = menuSlice.actions;

export const {resetDetailFdImg} = menuImgSlice.actions