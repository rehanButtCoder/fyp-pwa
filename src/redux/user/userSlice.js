import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  loggedInUserData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggingIn: (state, action) => {
      // debugger
      state.userData = action.payload;
    },
    userLoggingOut: (state, action) => {
      // debugger
      state.userData = {};
    },
    addUserData: (state, action) => {
      // debugger
      state.userData = action.payload;
    },
    userRemoveData: (state) => {
      // debugger
      state.userData = {};
      state.userLoginData = {};
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addUserData, userRemoveData, userLoggingIn, userLoggingOut } =
  userSlice.actions;

export default userSlice.reducer;