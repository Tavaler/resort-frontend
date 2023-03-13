import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../API/Agent";
import { CartItem } from "../models/cartItem";

interface CartState{
    carts: CartItem[] | null,
    status : string;


    // detailCart : CartItem | null;
    // CartdetailLoaded : boolean;


}

const initialState : CartState= {
  carts: null,
  status: '',


  // detailCart: null,
  // CartdetailLoaded: false
}

export const fetchCartAsync = createAsyncThunk<any, any>(
    "cart/fetchCartAsync",
    async (accountId, thunkAPI) => {
      try {
        const result = await agent.Cart.GetByidCart(accountId);
        return result.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );


export const addCartItemAsync = createAsyncThunk<CartItem ,{ fdId: string; accountId: string; amount: number }>(
    "cart/addCartItemAsync",
  async ({ fdId, accountId, amount }, thunkAPI) => {
      try {
        let formData = new FormData();
        formData.append("AccountId", accountId);
        formData.append("FdId", fdId);
        formData.append("Amount", amount.toString());
        const { result } = await agent.Cart.AddCart(formData);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

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

  export const itemPlusCartAsync = createAsyncThunk<CartItem, any>(
    "cart/itemPlusCartAsync",
    async ({ data}, thunkAPI) => {
      try {
        // console.log(data)
        let formData = new FormData();
        formData.append("id", data.id);
        // formData.append("AccountID", idAccount);
        // formData.append("ProductID", data.product.id);
        // formData.append("AmountProduct", amountProduct);
        const { result } = await agent.Cart.ItemPlusCart(formData);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

  export const itemRemoveCartAsync = createAsyncThunk<CartItem, any>(
    "cart/itemRemoveCartAsync",
    async ({ data}, thunkAPI) => {
      try {
        // console.log(data)
        let formData = new FormData();
        formData.append("id", data.id);
        // formData.append("AccountID", idAccount);
        // formData.append("ProductID", data.product.id);
        // formData.append("AmountProduct", amountProduct);
        const { result } = await agent.Cart.ItemRemoveCart(formData);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );






export const cratSlice = createSlice({
    name: "cartItem" ,
    initialState ,
    reducers:{
        setCart: (state, action) => {
            state.carts = action.payload;
          },
          clearCart: (state) => {
            state.carts = null;
          },

          // resetDetailFd:(state)=>{
          //   state.CartdetailLoaded = false;
          // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
        // if(action.payload.message === 'success')
          
          state.carts = action.payload;
          state.status = "idle";
        });

        // builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
        //   // if(action.payload.msg === 'OK')
        //   state.detailCart = action.payload;
        //   // state.detailfd = action.payload;
        //   state.CartdetailLoaded = true
        // });
      },


});

export const {setCart,clearCart} = cratSlice.actions