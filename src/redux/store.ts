import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import movieReducer from "./movie/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
