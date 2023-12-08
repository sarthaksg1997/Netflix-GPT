import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    signin: (_, action) => {
      return action.payload;
    },
    signout: () => {
      return null;
    },
  },
});

export const { signin, signout } = userSlice.actions;
export default userSlice.reducer;
