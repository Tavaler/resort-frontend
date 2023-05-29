import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { Descriptions } from "antd";
import agent from "../api/agent";
// import { CartItem } from "../models/cartItem";
import { AddHouseBooking, HouseBooking } from "../models/houseBooking";

interface HouseBookingState{
    hbookings: HouseBooking[] | null,
    status : string;
    HbdetailLoaded : boolean;

    // detailCart : CartItem | null;
    // CartdetailLoaded : boolean;


}

const initialState : HouseBookingState= {
  hbookings: null,
  status: '',
  HbdetailLoaded: false
}

export const fetchHouseBookingAsync = createAsyncThunk<any, any>(
    "houseBooking/fetchHouseBookingAsync",
    async (accountId, thunkAPI) => {
      try {
        const result = await agent.HouseBooking.GetByidBooking(accountId);
        return result.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );


export const addHouseBookingAsync = createAsyncThunk<any, AddHouseBooking >(
    "houseBooking/addHouseBookingAsync",
  async (value,thunkAPI) => {
      try {
        let formData = new FormData();
        formData.append("AccountId", value.accountId);
        formData.append("AccommodationId", value.accommodationId);
        formData.append("CheckIn", value.checkIn.toString());
        formData.append("CheckOut", value.checkOut.toString());
        formData.append("DesiredDetail", value.desiredDetail);
        const  result  = await agent.HouseBooking.AddBooking(formData);
        return result;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    }
  );

  export const Delet = createAsyncThunk<any, string>(
    "houseBooking/delet", 
    async (id, thunkAPI) => {
    try {
        const result = await agent.HouseBooking.DeleteBooking(id);
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







export const hbookingSlice = createSlice({
    name: "housebooking" ,
    initialState ,
    reducers:{
        setHousebooking: (state, action) => {
            state.hbookings = action.payload;
          },
          clearHousebooking: (state) => {
            state.hbookings = null;
          },

          // resetDetailFd:(state)=>{
          //   state.CartdetailLoaded = false;
          // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouseBookingAsync.fulfilled, (state, action) => {
        // if(action.payload.message === 'success')
          
          state.hbookings = action.payload;
          state.status = "idle";
          state.HbdetailLoaded = true
        });

        // builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
        //   // if(action.payload.msg === 'OK')
        //   state.detailCart = action.payload;
        //   // state.detailfd = action.payload;
        //   state.CartdetailLoaded = true
        // });
      },


});

export const {setHousebooking,clearHousebooking} = hbookingSlice.actions