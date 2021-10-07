import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  photo: string;
}

const initialState = {
  name: "",
  email: "",
  photo: "",
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setUserSignOut: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setUserLogin, setUserSignOut } = userSlice.actions;

export const selectUserName = (state: any) => state.user.name;
export const selectUserEmail = (state: any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;

export default userSlice.reducer;
