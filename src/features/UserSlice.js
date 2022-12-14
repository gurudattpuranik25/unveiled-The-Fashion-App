import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userImage: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userImage = action.payload.userImage;
    },
    setUserLogoutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userImage = null;
    },
  },
});

export const { setActiveUser, setUserLogoutState } = UserSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserImage = (state) => state.user.userImage;

export default UserSlice.reducer;
