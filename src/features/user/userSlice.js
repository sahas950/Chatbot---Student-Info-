// Importing the createSlice function from the @reduxjs/toolkit library
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice of the Redux store for user information
export const userSlice = createSlice({
  // Name of the slice
  name: "user",

  // Initial state for the user slice
  initialState: {
    name: "",   // User's name
    age: 0,     // User's age
    date: "",   // Date selected by the user
    time: "",   // Time selected by the user
    chkn: "false", // Flag to check if the user is entering their name
  },

  // Reducers for updating different parts of the user state
  reducers: {
    // Reducer to update the user's name
    updateName: (state, action) => {
      state.name = action.payload;
    },
    // Reducer to update the check name flag
    updateChkName: (state, action) => {
      state.chkn = action.payload;
    },
    // Reducer to update the user's age
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    // Reducer to update the user's selected date and time
    updateDate: (state, action) => {
      state.date = action.payload.date;
      state.time = action.payload.time;
    },
  },
});

// Exporting the action creators and the reducer from the user slice
export const { updateName, updateAge, updateDate, updateChkName } = userSlice.actions;

// Selector function to retrieve the user state from the Redux store
export const selectUser = (state) => state.user;

// Exporting the user reducer
export default userSlice.reducer;
