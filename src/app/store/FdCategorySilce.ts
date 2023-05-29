import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { FdCategory } from "../models/menu";
// import { CommunityGroup } from "../Model/CommunityGroup";
import agent from "../api/agent";

interface Category{
    CategoryFd: FdCategory[] | null,
}

const initialState : Category= {
    CategoryFd: null

}


export const GetCategoryFd = createAsyncThunk(
    'FdCategory/categoryfd',
    async (_, thunkAPI) => {
        try {
            const data = await agent.FdCategory.getAll();
            console.log(data);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);



export const CategorySilce = createSlice({
    name: "FdCategory",
    initialState ,
    reducers:{
        setCategoryProduct: (state, action) => {
            state.CategoryFd = action.payload;
          },
    },
    extraReducers: (builder => {
        builder.addCase(GetCategoryFd.fulfilled, (state, action) => {
            if (action.payload) {
                state.CategoryFd = action.payload
              }
        });
    })

    
});

export const { setCategoryProduct} = CategorySilce.actions