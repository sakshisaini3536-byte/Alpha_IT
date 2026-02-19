import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log("📦 userSlice loaded");

// 🔵 ASYNC THUNK
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    console.log("🌐 Fetching users from API...");
    const response = await axios.get(
      "http://localhost:5000/api/users"
    );
    console.log("✅ API Response received");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        console.log("⏳ Pending state triggered");
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log("🎉 Fulfilled state triggered");
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("❌ Rejected state triggered");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
