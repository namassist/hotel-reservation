const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, acttion) => {
      state.user = acttion.payload;
    },
    setLogout: (state, action) => {
      state.user = [];
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin, setLogout, updateUser } = loginSlice.actions;
export default loginSlice.reducer;
