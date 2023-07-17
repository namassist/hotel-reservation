import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./reducers/hotelSlice";
import bookSlice from "./reducers/bookSlice";
import loginSlice from "./reducers/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    hotels: hotelReducer,
    book: bookSlice,
  },
});

export default store;
