import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../services/fetchPlaceholder";

const initialState={
    value:0,
    posts:{}
}

export const getUserDetails = createAsyncThunk(
    'user-details-specific',
    async (_, thunkAPI) => {
      try {
        const result = await getUser();
        return result.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );

export const incrementSlice = createSlice({
    name: 'increment',
    initialState,
    reducers:{
        incr:(state)=>{
            state.value +=1
        },
        decr:(state)=>{
            state.value -=1
        },
        incByVal: (state, action)=>{
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getUserDetails.pending, (state) => {
            state.posts.loading = true;
            state.posts.error = null; 
          })
          .addCase(getUserDetails.fulfilled, (state, action) => {
            state.posts.loading = false;
            state.posts.userDetails = action.payload; 
          })
          .addCase(getUserDetails.rejected, (state, action) => {
            state.posts.loading = false;
            state.posts.error = action.payload?.error || 'Failed to fetch user details';
          });
      },
})
export const {incr, decr, incByVal} = incrementSlice.actions
export default incrementSlice.reducer