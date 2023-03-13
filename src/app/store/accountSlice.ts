import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Login, Register, Role } from "../models/user";

interface AccountState {
  account: Register | null;
  roles: Role[] | null;
  token: string | null;
}

const initialState: AccountState = {
  roles: null,
  account: null,
  token: null,
};

export interface setUpAccount {
  account: Register;
  token: string;
}

export const loadAccountStorage = () =>
  JSON.parse(localStorage.getItem("account")!);

export const loginAccount = createAsyncThunk<any, Login>(
  "user/Login",
  async (data, thunkAPI) => {
    try {
      let formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      const result = await agent.Account.login(formData);
      
      const { ...payload } = result;
      if (payload.result) {
        const token = payload.result.token;
        const account = payload.result.account;
        //   const cart = payload.result.cart;
        //   thunkAPI.dispatch(setCart(cart));
        thunkAPI.dispatch(
          setTingAccount({ account: account, token: token } as setUpAccount)
        );
      }
      localStorage.setItem("account", JSON.stringify(result));
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

// ------------------------------------------------------------------

export const fetchAccount = createAsyncThunk<Register>(
    "user/fetchAccount",
    async (_, thunkAPI) => {
      const account = loadAccountStorage();
      thunkAPI.dispatch(setAccount(account));
      try {
        const data = await agent.Account.getAccountID(account.result.accountId);
        
        localStorage.setItem(
          "account",
          JSON.stringify({ ...account, account: data })
        );
      ;
        return data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.data });
      }
    },
    {
      condition: () => {
        if (!localStorage.getItem("account")) return false;
      },
    }
  );

// ------------------------------------------------------------------

export const registerAccount = createAsyncThunk<any, Register>(
  "user/Register",
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
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload.account;
      if (action.payload.token) state.token = action.payload.token;
    },
    setTingAccount: (state, action) => {
      const { account, token } = action.payload;
      localStorage.setItem(
        "account",
        JSON.stringify({
          account: account,
          token: token,
        })
      );
    },
    logout: (state) => {
      state.token = null;
      state.account = null;
      localStorage.removeItem("account");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAccount.fulfilled, (state, action) => {
      if (action.payload.result) {
        state.account = action.payload.result.account;
        state.token = action.payload.result.token;
      }
    });
  },
});

export const { setAccount, setTingAccount, logout } = accountSlice.actions;
