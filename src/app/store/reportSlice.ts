import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import agent from "../API/Agent";
import {  GetProductStatistics, GetSalesStatistics } from "../models/report";
import agent from "../api/agent";
import { Community } from "../models/report2";


interface ReportState{
    productStatistics: GetProductStatistics[] | null;
    productStatisticsLoaded: boolean;
    salesStatistics: GetSalesStatistics | null;
    salesStatisticsLoaded: boolean;
    salesCommunity: Community | null;
    salesCommunityLoaded: boolean;
}

const initialState : ReportState= {
    productStatistics: null,
    productStatisticsLoaded: false,
    salesStatistics: null,
    salesStatisticsLoaded: false,
    salesCommunity: null,
    salesCommunityLoaded: false
}


export const fetchProductStatisticsAsync = createAsyncThunk<any>(
    'report/fetchProductStatisticsAsync',
    async (_value, thunkAPI) => {
        try {
            const result = await agent.Report.getProductStatistics();
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
);

export const fetchSalesStatisticsAsync = createAsyncThunk<any>(
    'report/fetchSalesStatisticsAsync',
    async (_, thunkAPI) => {
        try {
            const result = await agent.Report.getSalesStatistics();
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
);

export const fetchReport = createAsyncThunk<any>(
    "report/fetchReport",
    async (date, thunkAPI) => {
      try {
        return await agent.Report.getReport(date);
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    },
  );

  export const fetchSalesCommunityAsync = createAsyncThunk<any>(
    'report/fetchSalesCommunityAsync',
    async (date, thunkAPI) => {
        try {
            const result = await agent.Report.getReport(date);
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data }) //ส่งไปที่ Interceptor
        }
    }
)


export const reportSlice = createSlice({
    name: "Report",
    initialState ,
    reducers:{
        reSetProductStatistics: (state) => {
            state.productStatisticsLoaded = false;
            state.productStatistics = null;
        } ,
        reSetSalesStatistics: (state) => {
            state.salesStatisticsLoaded = false;
            state.salesStatistics = null;
        },

        reSetSalesCommunity: (state) => {
            state.salesCommunityLoaded = false;
            state.salesCommunity = null;
        }
    },
    extraReducers: (builder => {
        // builder.addCase(fetchReport.fulfilled, (state, action) => {
        //     state.datareport = action.payload.data;
        //     state.datareportLoaded = true;
            
        // });
        
        builder.addCase(fetchSalesStatisticsAsync.fulfilled, (state, action) => {
            // console.log(action.payload.msg)
            if(action.payload.msg === 'OK')
            state.salesStatistics = action.payload.data;
            state.salesStatisticsLoaded = true
          });

        builder.addCase(fetchProductStatisticsAsync.fulfilled, (state, action) => {
            if(action.payload.msg === 'OK')
            state.productStatistics = action.payload.data;
            state.productStatisticsLoaded = true
          });

          builder.addCase(fetchSalesCommunityAsync.fulfilled, (state, action) => {
            if(action.payload.msg === 'OK')
            state.salesCommunity = action.payload.data;
            state.salesCommunityLoaded = true
          });
          

        //   builder.addCase(fetchSalesCommunityAsync.fulfilled, (state, action) => {
        //     if(action.payload.msg === 'OK')
        //     state.salesCommunity = action.payload.data;
        //     state.salesCommunityLoaded = true
        //   });
    })


    
});

export const {reSetProductStatistics
     ,reSetSalesStatistics
    ,
    reSetSalesCommunity
} = reportSlice.actions




