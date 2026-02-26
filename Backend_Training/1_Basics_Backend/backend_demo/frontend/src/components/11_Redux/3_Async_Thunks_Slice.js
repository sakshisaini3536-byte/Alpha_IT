import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log("📦 userSlice loaded");

/* ===============================
   🔵 FETCH USERS
================================= */
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    console.log("🌐 Fetching users from backend...");

    const response = await axios.get(
      "http://localhost:5000/api/users"
    );

    console.log("✅ API Response received:", response.data);
    return response.data;
  }
);

/* ===============================
   🔴 DELETE USER
================================= */
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    console.log("🗑️ Sending DELETE request for id:", id);

    await axios.delete(
      `http://localhost:5000/api/users/${id}`
    );

    console.log("✅ User deleted from backend");

    // Return deleted id so Redux can update state
    return id;
  }
);

/* ===============================
   🟡 UPDATE USER
================================= */
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, updatedData }) => {
    console.log("✏️ Sending UPDATE request for id:", id);

    const response = await axios.put(
      `http://localhost:5000/api/users/${id}`,
      updatedData
    );

    console.log("✅ Updated user received:", response.data);

    return response.data; // return updated user
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

      /* ===============================
         FETCH USERS STATES
      ================================= */
      .addCase(fetchUsers.pending, (state) => {
        console.log("⏳ Fetch Pending triggered");
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log("🎉 Fetch Fulfilled triggered");
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("❌ Fetch Rejected triggered");
        state.loading = false;
        state.error = action.error.message;
      })

      /* ===============================
         DELETE USER STATE
      ================================= */
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log("🎉 Delete Fulfilled triggered");

        // Remove deleted user from Redux state
        state.users = state.users.filter(
          (user) => user._id !== action.payload
        );
      })
      
        /* ===============================
          UPDATE USER STATE
        ================================= */

      .addCase(updateUser.fulfilled, (state, action) => {
  console.log("🎉 Update Fulfilled triggered");

  const index = state.users.findIndex(
    (user) => user._id === action.payload._id
  );

  if (index !== -1) {
    state.users[index] = action.payload;
  }
});
  },
});

export default userSlice.reducer;