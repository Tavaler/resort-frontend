import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../API/Agent";
import { Login, Register } from "../models/user";
import {Role} from "../models/role"
import { AccommodationType } from "../models/accommodation";
// import { CommunityGroup } from "../Model/CommunityGroup";
import { setCart } from "./cartSlice";

interface AcmdType{
    AcmdType: AccommodationType[] | null,
}

const initialState : AcmdType= {
    AcmdType: null
}


export const GetAcmdType = createAsyncThunk(
    'AcmdType/acmdtype',
    async (_, thunkAPI) => {
        try {
            const data = await agent.AccommodationType.getAll();
            console.log(data);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);



export const AcmdTypeSilce = createSlice({
    name: "AcmdTypeSilce",
    initialState ,
    reducers:{
        setTypeAcmd: (state, action) => {
            state.AcmdType = action.payload;
          },
    },
    extraReducers: (builder => {
        builder.addCase(GetAcmdType.fulfilled, (state, action) => {
            if (action.payload) {
                state.AcmdType = action.payload
              }
        });
    })

    
});

export const { setTypeAcmd} = AcmdTypeSilce.actions