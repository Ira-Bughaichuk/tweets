import { createSlice } from "@reduxjs/toolkit";
import { updateTweetByIdThunk, getTweetsThunk } from './tweetsThunk';

const initialState = {
   tweets: [],
   isLoading: false,
   error:false,
}
const handlePending = state => {
    state.isLoading = true;
    state.error = false;
  };
  const handleRejected = state => {
    state.isLoading = false;
    state.error = true;
  };

  const tweetsSlice = createSlice({
    name: "tweets",
  initialState,
    extraReducers: builder =>{
        builder
        .addCase(getTweetsThunk.pending, handlePending)
        .addCase(getTweetsThunk.rejected, handleRejected)
        .addCase(getTweetsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.tweets =  payload;
          })
          .addCase(updateTweetByIdThunk.pending, handlePending)
        .addCase(updateTweetByIdThunk.rejected, handleRejected)
        .addCase(updateTweetByIdThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
          })  
        },
    });
    
    
    export const tweetsReducer = tweetsSlice.reducer;