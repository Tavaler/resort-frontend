import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Accommodation } from "../models/accommodation";

interface acmdState {
  acmd: Accommodation[] | null;
  acmdsLoaded: boolean;
  detailacmd: Accommodation | null;
  acmdsdetailLoaded: boolean;
}

const initialState: acmdState = {
  acmd: null,
  acmdsLoaded: false,
  detailacmd: null,
  acmdsdetailLoaded: false,
};

export const GetAcmdAll = createAsyncThunk<Accommodation[]>(
  "Accommodation/GetAll",
  async (_, thunkAPI) => {
    try {
      return await agent.Accommodation.getAll();
    } catch (error:any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const DeletAcmd = createAsyncThunk<any, string>(
  "Accommodation/deleteAcmd",
  async (id, thunkAPI) => {
    try {
      const result = await agent.Accommodation.deleteAcmd(id);
      return result;
    } catch (error:any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const GetByIdAcmd = createAsyncThunk<any, string>(
  "Accommodation/fetchacmddetail",
  async (accommodationId, thunkAPI) => {
    try {
      const result = await agent.Accommodation.GetByIdAcmd(accommodationId);
      return result;
    } catch (error:any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const CreateAcmd = createAsyncThunk<any, Accommodation>(
  "Accommodation/createAcmd",
  async (data, thunkAPI) => {
    try {
      const results = await agent.Accommodation.createAcmd(data);
      return results;
    } catch (error:any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const AccmdChangeStatus = createAsyncThunk<any, string>(
  "Accommodation/changeStatus",
  async (id, thunkAPI) => {
    try {
      const result = await agent.Accommodation.changeStatus(id);
      return result;
    } catch (error:any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

// export const editProductAsync = createAsyncThunk<any, any>(
//   "product/editProductAsync", async (product, thunkAPI) => {
//   try {
//       const results = await agent.Accommodation.changeStatus(product);
//       return results;
//   } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.data })
//   }
// });

export const acmdSlice = createSlice({
  name: "acmd",
  initialState,
  reducers: {
    resetDetailAcmd: (state) => {
      state.acmdsdetailLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAcmdAll.fulfilled, (state, action) => {
      state.acmd = action.payload;
      state.acmdsLoaded = true;
    });

    builder.addCase(GetByIdAcmd.fulfilled, (state, action) => {
      // if(action.payload.msg === 'OK')
      state.detailacmd = action.payload;
      // state.detailfd = action.payload;
      state.acmdsdetailLoaded = true;
    });

  //   builder.addMatcher(isAnyOf(ChangeStatus.fulfilled), (state, action) => {
  //     const { isSuccess } = action.payload;
  //     if (isSuccess === true) state.acmdsLoaded = false;
  // });
  },
});

export const { resetDetailAcmd } = acmdSlice.actions;
