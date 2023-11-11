// Importing necessary functions and modules from the Redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing the userReducer from the userSlice file
import userReducer from "../features/user/userSlice";

// Configuring the Redux store with the userReducer
const store = configureStore({
    // Defining the reducers for the store
    reducer: {
        // Assigning the userReducer to the 'user' slice of the state
        user: userReducer,
    },
});

// Exporting the configured Redux store
export default store;
