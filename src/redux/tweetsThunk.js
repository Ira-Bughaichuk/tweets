import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTweets, updateTweetById  } from "../service/service";

export const getTweetsThunk = createAsyncThunk(
    "tweets/fetchAll",
    async (page, {rejectWithValue}) => {
     
      try {
          const data = await getTweets(page);
          return data
      } catch {
        return rejectWithValue("Error fetch");
      }
    }
  );
 
  export const updateTweetByIdThunk = createAsyncThunk(
    "tweets/putById",
    async (obj, {rejectWithValue}) => {
      try {
          const data = await updateTweetById(obj);
          return data
      } catch {
        return rejectWithValue("Error put by id");
      }
    }
  );

