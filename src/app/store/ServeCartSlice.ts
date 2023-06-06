import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
// import { CartItem } from "../models/cartItem";
import { AddServeCart, ServeCart } from "../models/serveCart";

interface ServeCartState{
    serveCart: ServeCart[] | null,
    status : string;
    ServeCartdetailLoaded : boolean;

    // detailCart : CartItem | null;
    // CartdetailLoaded : boolean;


}

const initialState : ServeCartState= {
  serveCart: null,
  status: '',
  ServeCartdetailLoaded: false
}

export const fetchServeCartAsync = createAsyncThunk<any, any>(
    "serveCart/fetchServeCartgAsync",
    async (accountId, thunkAPI) => {
      try {
        const result = await agent.ServeCart.GetById(accountId);
        return result.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );


export const addServeCartAsync = createAsyncThunk<any, AddServeCart >(
    "serveCart/addServeCartAsync",
  async (value,thunkAPI) => {
      try {
        let formData = new FormData();
        formData.append("AccountId", value.accountId);
        formData.append("ServeId", value.serveId.toString());
        formData.append("Amount", value.amount.toString());
        formData.append("CheckIn", value.checkIn.toString());
        // formData.append("DesiredDetail", value.desiredDetail);
        const  result  = await agent.ServeCart.AddCartServe(formData);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

  export const Delete = createAsyncThunk<any, string>(
    "serveCart/delete", 
    async (id, thunkAPI) => {
    try {
        const result = await agent.ServeCart.DeleteCartServe(id);
        return result;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data })
    }
  });


//   export const updateCartAsync = createAsyncThunk<CartItem, any>(
//     "cart/updateCartAsync",
//     async ({ data, amountProduct, idAccount }, thunkAPI) => {
//       try {
//         // console.log(data)
//         let formData = new FormData();
//         formData.append("ID", data.id);
//         formData.append("AccountID", idAccount);
//         formData.append("ProductID", data.product.id);
//         formData.append("AmountProduct", amountProduct);
//         const { result } = await agent.Cart.UpdateCrat(formData);
//         return result;
//       } catch (error: any) {
//         return thunkAPI.rejectWithValue({ error: error.data });
//       }
//     }
//   );







export const serveCartSlice = createSlice({
    name: "serveCart" ,
    initialState ,
    reducers:{
        setServeCart: (state, action) => {
            state.serveCart = action.payload;
          },
          clearServeCart: (state) => {
            state.serveCart = null;
          },

          // resetDetailFd:(state)=>{
          //   state.CartdetailLoaded = false;
          // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServeCartAsync.fulfilled, (state, action) => {
        // if(action.payload.message === 'success')
          
          state.serveCart = action.payload;
          state.status = "idle";
          state.ServeCartdetailLoaded = true
        });

        // builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
        //   // if(action.payload.msg === 'OK')
        //   state.detailCart = action.payload;
        //   // state.detailfd = action.payload;
        //   state.CartdetailLoaded = true
        // });
      },


});

export const {setServeCart,clearServeCart} = serveCartSlice.actions