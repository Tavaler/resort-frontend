import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Login, Register } from "../models/user";

const initialState = {}
export const loginAccount = createAsyncThunk<any, Login>(
    'user/Login',
    async (data, thunkAPI) => {
        try {
            let formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            const result = await agent.Account.login(formData);
           console.log(result)
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const registerAccount = createAsyncThunk<any, Register>(
    'user/Register',
    async (data, thunkAPI) => {
        try {
            let formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("tel", data.tel);
            formData.append("roleId", data.roleId);
            
            const result = await agent.Account.register(formData);
           console.log(result)
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);
export const accountSlice = createSlice({
    name: "account" ,
    initialState ,
    reducers:{

    },
    
});

export const {} = accountSlice.actions