import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Serve } from "../models/serve";

interface ServeState{
    serve: Serve[] | null;
    serveLoaded : boolean;
    detailServe : Serve | null;
    serevedetailLoaded : boolean;
    
}

const initialState : ServeState= {
    serve: null,
    serveLoaded: false,
    detailServe: null,
    serevedetailLoaded: false
}



export const GetServeAll = createAsyncThunk<Serve[]>(
    'Serve/GetAll',
    async (_, thunkAPI) => {
        try {
            return await agent.Serve.GetAll();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);




  export const GetByIdServe = createAsyncThunk<any, string>(
    "Serve/fetchservedetail",
    async (serveId, thunkAPI) => {
      try {
        const result = await agent.Serve.GetById(serveId);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

  export const CreateMenu = createAsyncThunk<any, Serve>(
    "Serve/createServe",
    async (data, thunkAPI) => {
      try {
        const results = await agent.Serve.Create(data);
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

export const DeletServe = createAsyncThunk<any, string>(
  "Serve/deletFd", 
  async (id, thunkAPI) => {
  try {
      const result = await agent.Serve.Delete(id);
      return result;
  } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data })
  }
});






export const serveSlice = createSlice({
    name: "serve" ,
    initialState ,
    reducers:{

        resetDetailServe:(state)=>{
            state.serevedetailLoaded = false;
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
        builder.addCase(GetServeAll.fulfilled, (state, action) => {
            state.serve = action.payload
            state.serveLoaded = true
        });

        builder.addCase(GetByIdServe.fulfilled, (state, action) => {
            // if(action.payload.msg === 'OK')
            state.detailServe = action.payload;
            // state.detailfd = action.payload;
            state.serevedetailLoaded = true
          });
    },


    
    
});

// export const { setMetaData, setParams, resetProductParams, resetImageProduct } = menuSlice.actions;

export const {resetDetailServe} = serveSlice.actions