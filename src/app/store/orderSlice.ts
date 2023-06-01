import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  Order, OrderID } from "../models/order";
import agent from "../api/agent";

interface ReviewState {
  order: Order[] | null;
  orderAll: Order[] | null;
  orderAllLoaded: boolean;
  
  orderLoaded: boolean;
  orderDetail: OrderID | null
  orderDetailLoaded: boolean;
}

const initialState: ReviewState = {
  orderAll: null,
  orderAllLoaded: false,
  order: null,
  orderLoaded: false,
  orderDetail: null,
  orderDetailLoaded: false,
  
};

export const fetchOrderByIdAccount = createAsyncThunk<any, any>(
  "order/fetchOrderByIdAccount",
  async (idAccount, thunkAPI) => {
    try {
      return await agent.Order.GetByIdAccount(idAccount);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchOrderById = createAsyncThunk<any ,any>(
  "order/fetchOrderConfirm",
  async (id, thunkAPI) => {
    try {
      const result = await agent.Order.GetById(id);
      return result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const GetOrderAll = createAsyncThunk<any>(
  'Order/GetAll',
  async (_, thunkAPI) => {
      try {
          return await agent.Order.getAll();
      } catch (error: any) {
          return thunkAPI.rejectWithValue({ error: error.data });
      }
  }
);



export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.orderLoaded = false;
    },
    resetOrderDetail: (state) => {
      state.orderDetailLoaded = false;
    },
  },
  extraReducers: (builder) => {

    builder.addCase(GetOrderAll.fulfilled, (state, action) => {
      state.orderAll = action.payload.data;
      state.orderAllLoaded = true
  });

    builder.addCase(fetchOrderByIdAccount.fulfilled, (state, action) => {
      state.order = action.payload.data;
      state.orderLoaded = true;
    });

    builder.addCase(fetchOrderById.fulfilled, (state, action) => {
    state.orderDetail = action.payload.data;
      state.orderDetailLoaded = true;
    });
  },
});

export const { resetOrder ,resetOrderDetail} = orderSlice.actions;