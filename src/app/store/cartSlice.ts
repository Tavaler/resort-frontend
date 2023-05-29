import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { CartItem } from "../models/cartItem";

interface CartState{
    carts: CartItem[] | null,
    status : string;
    CartdetailLoaded : boolean;



    // detailCart : CartItem | null;


}

const initialState : CartState= {
  carts: null,
  CartdetailLoaded : false,
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

  export const DeletCart = createAsyncThunk<any, string>(
    "cart/deletCart", 
    async (id, thunkAPI) => {
    try {
        const result = await agent.Cart.DeleteCart(id);
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



export const itemPlusCartAsyncV2 = createAsyncThunk<any, any>("cart/editProductAsync", async (value, thunkAPI) => {
    try {
        const results = await agent.Cart.ItemPlusCart(value);
        return results;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data })
    }
});

  export const itemPlusCartAsync = createAsyncThunk<CartItem, any>(
    "cart/itemPlusCartAsync",
    async (id, thunkAPI) => {
      try {
        // console.log(data)
        let formData = new FormData();
        formData.append("id", id);
        // formData.append("AccountID", idAccount);
        // formData.append("ProductID", data.product.id);
        // formData.append("AmountProduct", amountProduct);
        const result = await agent.Cart.ItemPlusCart(formData);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

  export const itemRemoveCartAsync = createAsyncThunk<CartItem, any>(
    "cart/itemRemoveCartAsync",
    async ({ id}, thunkAPI) => {
      try {
        // console.log(data)
        let formData = new FormData();
        formData.append("id", id);
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
          // state.status = "idle";
          state.CartdetailLoaded = true
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