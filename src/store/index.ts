import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import characterSlice from "./characterSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    character: characterSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
