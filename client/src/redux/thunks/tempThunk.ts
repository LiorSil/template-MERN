import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const tempFetch = createAsyncThunk("temp/fetch", async () => {
  try {
    const response = await axios.get("http://localhost:5000/");
    return response.data;
  } catch (error) {
    return error;
  }
});

export  {tempFetch};
