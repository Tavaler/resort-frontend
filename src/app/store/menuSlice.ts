import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { FoodDrink } from "../models/menu";

interface MenuState{
    fds: FoodDrink[] | null;
    productsLoaded : boolean
}

const initialState : MenuState= {
    fds: null,
    productsLoaded: false

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




export const menuSlice = createSlice({
    name: "menu" ,
    initialState ,
    reducers:{
       
    },
    extraReducers: (builder) => {
        builder.addCase(GetMenuAll.fulfilled, (state, action) => {
            state.fds = action.payload
            state.productsLoaded = true
        });
    },
    
});

export const {} = menuSlice.actions