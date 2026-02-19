// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./2_counterSlice";

// console.log("🧠 Redux Store created");

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });


//Async Thunks Store
import { configureStore } from "@reduxjs/toolkit";

// Import reducer from your async thunk slice
import usersReducer from "./3_Async_Thunks_Slice";

console.log("🧠 Creating Redux Store...");

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// console.log("✅ Redux Store Ready:", store.getState());

